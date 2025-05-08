// netlify/functions/contact.ts
import type { Handler } from '@netlify/functions'

export const handler: Handler = async (event, context) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' }
    }
    // …
    return {
        statusCode: 200,
        body: JSON.stringify({ success: true }),
    }
}
