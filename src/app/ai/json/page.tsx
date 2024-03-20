"use client"
import { FC, useState } from 'react'
import CodeEditor from '@uiw/react-textarea-code-editor';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useMutation } from 'react-query';
import axios from 'axios';
import { useCompletion } from 'ai/react';

interface pageProps {
  
}


const AiJsonPage: FC<pageProps> = ({}) => {
    const [prompt, setPrompt] = useState(`Create 10 people response has to be json in following type Response`)
    const [code, setCode] = useState(
        `type Response = {\n\tname: string,\n\tgender: "male" | "female" \n}[]`
    );

    const {
        completion,
        input,
        stop,
        isLoading,
        handleInputChange,
        handleSubmit,
      } = useCompletion({
        api: '/api/ai/json',
        body: {
            prompt, 
            type: code
        }
      });

    const {mutate, data} = useMutation({
        mutationFn: async () => {
            const { data } = await axios.post("/api/ai/json", {
                prompt,
                type: code,
            })

            return data
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
            <label>
                <span>
                    Prompt
                </span>
                <Textarea 
                className='resize-none my-4'
                value={prompt}
                onChange={(e) => setPrompt(e.currentTarget.value)}
                />
            </label>
            <CodeEditor
            value={code}
            language="ts"
            data-color-mode='dark'
            className='bg-card'
            placeholder="Please enter JS code."
            onChange={(evn) => setCode(evn.target.value)}
            padding={15}
            style={{
                backgroundColor: "#1a1a1a",
                fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                fontSize: 14,
                borderRadius: 16
            }}
            />

            <Button
            className='mt-3 '
            variant="default"
            size={'lg'}
            onClick={() => mutate()}
            >
                Submit
            </Button>
            <p>
                {data}
            </p>
        </div>
    </div>
  )
}

export default AiJsonPage