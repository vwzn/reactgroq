import { Groq } from 'groq-sdk'

export const requestToGroqAI = async (content, apiKey) => {
    const groq = new Groq({
        apiKey: apiKey,
        dangerouslyAllowBrowser: true,
    });

    const reply = await groq.chat.completions.create({
        messages: [
            {
                role: "user",
                content,
            }
        ],
        model: "llama3-8b-8192",
    });
    return reply.choices[0].message.content;
};