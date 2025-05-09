// netlify/functions/contact.ts
import type { Handler } from "@netlify/functions"
import { createClient } from "@supabase/supabase-js"
import sgMail from "@sendgrid/mail"

// Init Supabase
const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_KEY!
)

// Init SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

// Extract and validate essential env-vars
const TO   = process.env.EMAIL_TO!
const FROM = process.env.EMAIL_FROM!

if (!TO || !FROM) {
    console.error("❌ Missing required env vars:", { EMAIL_TO: TO, EMAIL_FROM: FROM })
    // You might even throw here to prevent deploy, but at least logs will show
}

export const handler: Handler = async (event) => {
    // Log env-vars on every invocation for easy debugging
    console.log("📨 Sending email from:", FROM, "→ to:", TO)

    if (!TO || !FROM) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                success: false,
                error: "Server misconfiguration – missing EMAIL_TO or EMAIL_FROM",
            }),
        }
    }

    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" }
    }

    // Parse payload safely
    let payload: any
    try {
        payload = JSON.parse(event.body)
    } catch (parseErr) {
        console.error("❌ Invalid JSON in request body:", parseErr)
        return {
            statusCode: 400,
            body: JSON.stringify({ success: false, error: "Invalid JSON payload" }),
        }
    }

    const { name, email, subject, message } = payload

    if (!name || !email || !subject || !message) {
        console.error("❌ Missing required fields:", payload)
        return {
            statusCode: 400,
            body: JSON.stringify({ success: false, error: "All fields are required" }),
        }
    }

    // Optional: persist to Supabase
    try {
        const { error: dbError } = await supabase
            .from("contacts")
            .insert([{ name, email, subject, message }])
        if (dbError) throw dbError
    } catch (dbErr) {
        console.error("⚠️ Supabase insert failed (continuing):", dbErr)
    }

    // Send notification email
    try {
        await sgMail.send({
            to:      TO,
            from:    FROM,
            replyTo: email,
            subject: `New contact: ${subject}`,
            text: `
You’ve got a new message from your portfolio site:

Name:    ${name}
Email:   ${email}
Subject: ${subject}

Message:
${message}
      `,
        })
    } catch (sendErr: any) {
        console.error("❌ SendGrid error:", sendErr)
        return {
            statusCode: 500,
            body: JSON.stringify({ success: false, error: sendErr.message }),
        }
    }

    console.log("✅ Email sent successfully")
    return {
        statusCode: 200,
        body: JSON.stringify({ success: true }),
    }
}
