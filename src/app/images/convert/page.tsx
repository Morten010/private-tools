"use client"
import Spinner from '@/components/custom/Spinner'
import { Input } from '@/components/ui/input'
import { ChangeEvent, FC, useState } from 'react'
import { createPortal } from 'react-dom'

interface pageProps {
  
}

const ConverPage: FC<pageProps> = ({}) => {
    const [isLoading, setIsLoading] = useState(false)

    const handleFiles = (e :ChangeEvent<HTMLInputElement>) => {
        if(!e.target.files) return
        setIsLoading(true)
        console.log(e.target.files[0]);

        // get user image
        const src = URL.createObjectURL(e.target.files[0])

        // Convert user image to canvas
        let canvas = document.createElement("canvas");
        canvas.style.display = "none";
        let ctx = canvas.getContext("2d")

        let userImage = new Image()
        userImage.src = src;

        userImage.onload = function(){
            canvas.width = userImage.width;
            canvas.height = userImage.height;
            ctx?.drawImage(userImage, 0, 0);

            // convert canvas to webp image
            const webpImage = canvas.toDataURL("image/webp", 1)
            const link = document.createElement('a')
            link.href = webpImage
            link.download = `compressed-image-${e.target.files![0].name.split(".")[0]}.webp`
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
            setIsLoading(false)            
        }
    }
  return <div>
    <div>
        <h2
        className='text-2xl font-semibold'
        >
            Convert image type
        </h2>
        <Input 
        type='file'
        accept='image/**'
        className='mt-4'
        onChange={(e) => handleFiles(e)}
        />
    </div>
    {isLoading && createPortal((
        <div
        className='h-screen w-full bg-background/60 backdrop-blur-md absolute top-0 left-0 grid place-content-center text-center'
        >
            <Spinner 
            height={35}
            width={35}
            className='text-primary mx-auto'
            />
            <p>
                Converting image...
            </p>
        </div>
    ), document.body)}
  </div>
}

export default ConverPage