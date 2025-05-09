import type { Handler } from "@netlify/functions"
import { createClient } from "@supabase/supabase-js"
import sgMail from "@sendgrid/mail"

// Init Supabase (if you’re still using it for persistence)
const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_KEY!
)

// Init SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export const handler: Handler = async (event) => {
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" }
    }

    // 1) Parse the payload
    const { name, email, subject, message } = JSON.parse(event.body)

    // 2) (Optional) Persist to Supabase
    const { error: dbError } = await supabase
        .from("contacts")
        .insert([{ name, email, subject, message }])
    if (dbError) {
        console.error("DB insert failed:", dbError)
        // but continue to send email anyway...
    }

    // 3) Send the notification email
    try {
        await sgMail.send({
            to:   process.env.EMAIL_TO,    // your inbox
            from: process.env.EMAIL_FROM,  // verified sender
            replyTo: email,                // lets you reply directly
            subject: `New contact: ${subject}`,
            text: `
You’ve got a new message from your portfolio site:

Name:    ${name}
Email:   ${email}
Subject: ${subject}

Message:
${message}
      `,
            // you can also send HTML if you prefer
        })
    } catch (err: any) {
        console.error("SendGrid error:", err)
        return {
            statusCode: 500,
            body: JSON.stringify({ success: false, error: err.message }),
        }
    }

    // 4) Return success to the client
    return {
        statusCode: 200,
        body: JSON.stringify({ success: true }),
    }
}
