"use client"
import { FC, useState } from 'react'
import CodeEditor from '@uiw/react-textarea-code-editor';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useMutation } from 'react-query';
import axios from 'axios';
import { JetBrains_Mono } from "next/font/google"
import { ChatCompletion } from 'openai/resources/index.mjs';
import { cn } from '@/lib/utils';

interface pageProps {
  
}

const jetbrains = JetBrains_Mono({subsets: ["latin"]})

const AiJsonPage: FC<pageProps> = ({}) => {
    const [prompt, setPrompt] = useState(`Create 10 people response has to be json in following type Response`)
    const [code, setCode] = useState(
        `type Response = {\n\tname: string,\n\tgender: "male" | "female" \n}[]`
    );

    const {mutate, data} = useMutation({
        mutationFn: async () => {
            const { data } = await axios.post("/api/ai/json", {
                prompt,
                type: code,
            })
            const completion: ChatCompletion = data

            return completion.choices[0].message.content
        },
        onSuccess: (data) => {
            console.log(data);
        },
        onError: (err) => {
            console.log(err);
            console.log("Error");
        }
    })

  return (
    <div>
        <h2
        className='text-2xl font-semibold'
        >
            Get json response
        </h2>

        <div
        className='mt-5'
        >
            <div
            className='lg:grid lg:grid-cols-2 lg:gap-4'
            >
                <label
                className='flex flex-col'
                >
                    <span>
                        Prompt
                    </span>
                    <Textarea 
                    className='resize-none my-4 lg:mt-4 lg:mb-0 flex-grow'
                    value={prompt}
                    onChange={(e) => setPrompt(e.currentTarget.value)}
                    />
                </label>
                <label
                className='flex flex-col'
                >
                    <span>
                        Response type
                    </span>
                    <CodeEditor
                    value={code}
                    language="ts"
                    data-color-mode='dark'
                    className={cn('my-4 lg:mt-4 lg:mb-0 border', jetbrains.className)}
                    placeholder="Please enter JS code."
                    onChange={(evn) => setCode(evn.target.value)}
                    padding={15}
                    style={{
                        backgroundColor: "transparent",
                        fontSize: 14,
                        borderRadius: 16
                    }}
                    />
                </label>
            </div>

            <Button
            className='mt-3 mb-4'
            variant="default"
            onClick={() => mutate()}
            >
                Submit
            </Button>
            <CodeEditor
            value={JSON.stringify(data ? JSON.parse(data) : "Submit to view result", null, 2)}
            className={jetbrains.className}
            language="json"
            data-color-mode='dark'
            onChange={(evn) => setCode(evn.target.value)}
            padding={15}
            style={{
                backgroundColor: "#1a1a1a",
                fontSize: 14,
                borderRadius: 16
            }}
            disabled
            />
        </div>
    </div>
  )
}

export default AiJsonPage