"use client"
import Spinner from '@/components/custom/Spinner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from 'react'
import { createPortal } from 'react-dom'
import { toast } from 'sonner'

interface pageProps {
  
}

type FileProps = {
    file: File,
    downloadLink: string,
    status: boolean
}

const ConverPage: FC<pageProps> = ({}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [files, setFiles] = useState<FileProps[] | null>(null)

    const handleFiles = (e: ChangeEvent<HTMLInputElement>) => {
        if(!e.target.files) return
        setIsLoading(true)
        const fileArr: FileProps[] = []

        for(let i = 0; i <= e.target.files["length"]; i++){
            
            if(e.target.files[i]){
                fileArr.push({
                    file: e.target.files[i],
                    downloadLink: "",
                    status: false,
                })
                console.log(e.target.files);
                console.log(e.target.files[i]);
                
            }
        }

        setFiles(fileArr)
        setIsLoading(false)
    }

    const handleConvert = async () => {
        if(!files) return toast.error("No files to convert")
        setIsLoading(true)
        for(const file of files){
            convertImage(file, setFiles)
        }
        toast.success("Successfully converted images to webp", {
            className: "bg-card text-foreground border-border"
        })
        setIsLoading(false)
    }

    const handleDownloads = () => {
        files?.map(file => {
            const link = document.createElement('a')
            link.href = file.downloadLink
            link.download = `${file.file.name.split(".")[0]}.webp`
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        })
    }

  return <div>
    <div>
        {/* top */}
        <div
        className='flex justify-between items-center'
        >
            <h2
            className='text-2xl font-semibold'
            >
                Convert to webp
            </h2>
            <Input 
            type='file'
            accept='image/**'
            className='max-w-[150px]'
            onChange={(e) => handleFiles(e)}
            multiple
            />
        </div>
        {/* top */}

        {/* selected files */}
        {!!files ? <table
        className='mt-5 rounded-sm inline-block w-full'
        >
            <thead
            className='w-full'
            >
                <tr
                className='w-full'
                >
                    <td
                    className='p-2 border'
                    >
                        File name
                    </td>
                    <td
                    className='p-2 border'
                    >
                        Size
                    </td>
                    <td
                    className='p-2 border'
                    >
                        Type
                    </td>
                    <td
                    className='p-2 border'
                    >
                        Status
                    </td>
                </tr>
            </thead>
            <tbody
            className='w-full'
            >
                {files && files.map((file, index) => (
                    <tr
                    key={file.file.name + "-index"}
                    className='w-full'
                    >
                        <td
                        className='p-2 border'
                        >
                            {file.file.name}
                        </td>
                        <td
                        className='p-2 border'
                        >
                            {file.file.size}
                        </td>
                        <td
                        className='p-2 border'
                        >
                            {file.file.type}
                        </td>
                        <td
                        className='p-2 border'
                        >
                            {file.status ? (
                                <a
                                href={file.downloadLink}
                                download={`${file.file.name.split(".")[0]}.webp`}
                                className='px-1 py-0.5 border bg-green-800 border-green-700 rounded-md mr-auto text-green-300'
                                >
                                    Download
                                </a>
                            ) : (
                                <p
                                className='px-1 py-0.5 border bg-red-800 border-red-700 rounded-md mr-auto text-red-300 inline cursor-not-allowed'
                                >
                                    Not converted
                                </p>
                            )}
                        </td>
                    </tr>
                ))} 
            </tbody>
        </table> : (
            <div
            className='text-center h-[30vh] grid place-content-center'
            >
                <p
                className='text-muted-foreground'
                >
                    Choose some files
                </p>
            </div>
        )}
        {/* selected files */}
        
        {/* actions */}
            <div
            className='mt-2 flex gap-2'
            >
                <Button
                onClick={handleConvert}
                disabled={!files}
                >
                    Convert all
                </Button>
                <Button
                variant="secondary"
                onClick={handleDownloads}
                disabled={!!files ? !files[0]?.status : true}
                >
                    Download all
                </Button>
            </div>
        {/* actions */}

    </div>

    {/* loading state */}
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
    {/* loading state */}

  </div>
}

function convertImage(file: FileProps, setFiles:  Dispatch<SetStateAction<FileProps[] | null>>){
    // get user image
    const src = URL.createObjectURL(file.file)

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
        console.log(webpImage);

        setFiles((prevFiles) => ([...prevFiles!.map(f => {
            if(file.file.name === f.file.name){
                return {
                    ...f,
                    downloadLink: webpImage,
                    status: true
                }
            }else {
                return f
            }
        })]))
    }
}

export default ConverPage