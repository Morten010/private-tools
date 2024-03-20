import OpenAI from "openai";

export const openai = new OpenAI({
    baseURL: "http://127.0.0.1:1234/v1/",
    apiKey: ""
});

export const chat = async (messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[]) => {
    const res = await openai.chat.completions.create({
    messages,
    model: "mistral-ins-7b-q4",
    temperature: 0.7,
    response_format: {
        type: "json_object"
    }
  })

  return res.choices[0].message
}


export const aiJson = async (prompt: string, type: string) => {
    const res = await openai.chat.completions.create({
    messages: [
        {
            role: "system",
            content: "You are an ai json model which job is to return json from the users requset"
        },
        {
            role: "user",
            content: `
            ${prompt}

            ${type}
            `
        }
    ],
    model: "mistral-ins-7b-q4",
    temperature: 0.7,
    response_format: {
        type: "json_object"
    }
  })

  return res.choices[0].message
}