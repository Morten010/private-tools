import { aiJson, openai } from "@/lib/ai"

export const runtime = 'edge'

export const POST = async (req: Request, res: Response) => {
    const { prompt, type } = await req.json()
    console.log(prompt);
    console.log(type);
    
    const jsonRes = await openai.chat.completions.create({
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
        model: "open-orca_mistral-7b-openorca",
        temperature: 0.7,
        response_format: {
            type: "json_object"
        }
      })
    
    

    return Response.json(jsonRes)
}