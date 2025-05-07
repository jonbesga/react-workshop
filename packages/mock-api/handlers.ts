import { http, HttpResponse } from 'msw'
import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

interface ChatRequest {
  input: string;
}

export const handlers = [
  http.post('/bot-api/v1/chat', async ({ request }) => {
    const { input } = await request.json() as ChatRequest
    const response = await client.chat.completions.create({
        model: 'gpt-4o',
        messages: [{ role: 'user', content: input }],
    });
    return HttpResponse.json(response)
  }),
  
]