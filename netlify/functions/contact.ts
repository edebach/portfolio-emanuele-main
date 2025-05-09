// netlify/functions/contact.ts
import type { Handler } from '@netlify/functions'
import { createClient } from '@supabase/supabase-js'

// Inizializza Supabase una sola volta
const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_KEY!
)

export const handler: Handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' }
    }

    // Parsifica i dati inviati dal form
    const { name, email, subject, message } = JSON.parse(event.body)

    // Inserisci nella tabella "contacts"
    const { error } = await supabase
        .from('contacts')
        .insert([{ name, email, subject, message }])

    if (error) {
        console.error('Supabase insert error:', error)
        return {
            statusCode: 500,
            body: JSON.stringify({ success: false, error: error.message }),
        }
    }

    return {
        statusCode: 200,
        body: JSON.stringify({ success: true }),
    }
}
