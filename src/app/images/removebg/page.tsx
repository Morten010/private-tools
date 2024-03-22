"use client"
import { ChangeEvent, FC, useState } from 'react'
import imglyRemoveBackground from "@imgly/background-removal"
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import Spinner from '@/components/custom/Spinner'
import Compare from '../compress/Compare'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

interface pageProps {
  
}

const RemoveBgPage: FC<pageProps> = ({}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [image, setImage] = useState<{originalImage: File | null, imageRemove: Blob | null}>({
        originalImage: null,
        imageRemove: null
    })

    const handleRemoveBg = (e: ChangeEvent<HTMLInputElement>) => {
        if(!e.currentTarget.files) return
        const ogImage = e.currentTarget.files[0]
        setImage({
            originalImage: ogImage,
            imageRemove: null
        })
        imglyRemoveBackground(e.currentTarget.files[0], {
            output: {
                format: "image/webp",
                quality: 1
            }
        }).then(blob => {
            // const url = URL.createObjectURL(blob)
            setImage({
                originalImage: ogImage,
                imageRemove: blob
            })
        })
    }

  return (
    <div>
        <div
        className='flex justify-between'
        >
            <h2
            className='text-2xl font-semibold'
            >
                Convert to webp
            </h2>
            <Input 
            type='file'
            accept='images/**'
            onChange={handleRemoveBg}
            className='max-w-[150px]'
            />
        </div>

        {image.imageRemove && image.originalImage && (
            <div
            className='max-w-[600px]'
            >
                <Compare 
                firstImage={URL.createObjectURL(image.originalImage)}
                lastImage={URL.createObjectURL(image.imageRemove)}
                />
            </div>
        )}
        
        <div
        className='grid grid-cols-2 gap-4 max-w-[600px]'
        >
            {!!image.originalImage && <div
            className='relative w-full max-w-[300px] aspect-square border rounded-sm mt-4 overflow-hidden'
            >
                <Image 
                alt="Original image"
                src={URL.createObjectURL(image.originalImage)}
                fill
                />
                {!image.imageRemove && <div
                className='relative z-20 w-full h-full grid place-content-center backdrop-blur-md'
                >
                    <Spinner 
                    width={50}
                    height={50}
                    />
                </div>}
            </div>}
            {!!image.imageRemove && <div
            className='relative w-full max-w-[300px] aspect-square border rounded-sm mt-4 overflow-hidden'
            >
                <Image 
                alt="Image without background"
                src={URL.createObjectURL(image.imageRemove)}
                fill
                />
            </div>}
            {!!image.imageRemove && <a 
            href={URL.createObjectURL(image.imageRemove)}
            download={image.originalImage?.name}
            className={cn(buttonVariants({
                variant: "default",
            }))}
            >
                download
            </a>}
        </div>
    </div>
  )
}

export default RemoveBgPage