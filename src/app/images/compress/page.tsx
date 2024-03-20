"use client"
import { ChangeEvent, FC, useState } from 'react'
import Compressor from 'compressorjs';
import Image from 'next/image';
import Compare from './Compare';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Input } from '@/components/ui/input';

interface pageProps {
  
}

const CompressPage: FC<pageProps> = ({}) => {
    const [compressedFile, setCompressedFile] = useState<null | File | Blob>(null);
    const [originalFile, setOriginalFile] = useState<null | File>(null);
    const [view, setView] = useState(0)

    const handleCompressedUpload = (e: ChangeEvent<HTMLInputElement>) => {
        if(!e.target.files) return null

        console.log(e.target.files[0]);
        
        setOriginalFile(e.target.files[0])
        const image = e.target.files[0];
        new Compressor(image, {
          quality: 0.6, // 0.6 can also be used, but its not recommended to go below.
          success: (compressedResult) => {
            // compressedResult has the compressed file.
            // Use the compressed file to upload the images to your server.        
            setCompressedFile(compressedResult)
            
          },
        });
    };
    console.log(compressedFile);
    

  return <div>
    <div
    className='flex justify-between items-end border-b pb-2'
    >
        <h2
        className='text-3xl font-bold'
        >
            Compress image
        </h2>
        <label>
            <Input 
            id='picture'
            type='file'
            onChange={(event) => handleCompressedUpload(event)}
            />

        </label>
    </div>

    {/* toolbar */}
    <div
    className='flex justify-between items-center select-none'
    >
        <ul
        className='flex gap-2 py-2'
        >
            <li
            className={cn("py-2 px-4", {
                'border-2 border-dashed rounded-sm text-border font-semibold hover:bg-card/40 cursor-pointer': view === 1
            }, {
                'bg-primary text-black rounded-sm font-semibold cursor-pointer': view === 0
            })}
            onClick={() => setView(0)}
            >
                Difference
            </li> 
            <li
            className={cn("py-2 px-4", {
                'border-2 border-dashed rounded-sm text-border font-semibold hover:bg-card/40 cursor-pointer': view === 0
            }, {
                'bg-primary text-black rounded-sm font-semibold cursor-pointer': view === 1
            })}
            onClick={() => setView(1)}
            >
                Compare
            </li> 
        </ul>

        {compressedFile && <Link
            href={URL.createObjectURL(compressedFile)}
            target='_blank'
            // @ts-ignore
            download={compressedFile.name}
            className='hover:text-foreground/60'
            >
                Download
        </Link>}
    </div>
    {/* toolbar */}

    {/* images */}
    {compressedFile && originalFile ? (
        <>
            {view === 0 ? (
                <div
                className='max-w-[600px]'
                >
                    <Compare 
                    firstImage={URL.createObjectURL(originalFile)}
                    lastImage={URL.createObjectURL(compressedFile)}
                    />
                </div>
            ) : (
                <div
                className='py-4 flex gap-2'
                >
                    {originalFile && (
                        <div
                        className='relative w-full aspect-square'
                        >
                            <Image 
                            src={URL.createObjectURL(originalFile)}
                            alt='lol'
                            className='object-cover rounded-md'
                            fill
                            />
                        </div>
                    )}
                    {compressedFile && (
                        <div
                        className='relative w-full aspect-square'
                        >
                            <Image 
                            src={URL.createObjectURL(compressedFile)}
                            alt='Compressed'
                            className='object-cover rounded-md'
                            fill
                            />
                        </div>
                    )}
                </div>
            )}
        </>
    ) : (
        <div
        className='h-[30vh] grid place-content-center border-dashed border-2 rounded-sm mt-2'
        >
            <h3
            className='text-2xl font-semibold text-muted'
            >
                Missing image
            </h3>
        </div>
    )}
    {/* images */}

    {/* image info */}
    <table
    className='mt-5 w-full'
    >
        <tbody>
            <tr
            >
                <td
                className='border p-2'
                >
                    Original File Size
                </td>
                <td
                className='border p-2'
                >
                    {originalFile ? originalFile.size : 0}
                </td>
            </tr>
            <tr
            >
                <td
                className='border p-2'
                >
                    Compressed File size
                </td>
                <td
                className='border p-2'
                >
                    {compressedFile ? compressedFile.size : 0}
                </td>
            </tr>
            <tr
            >
                <td
                className='border p-2'
                >
                    Difference
                </td>
                <td
                className='border p-2'
                >
                    {originalFile && compressedFile ? (originalFile.size - compressedFile.size) : 0}
                </td>
            </tr>
            <tr>
                <td
                className='border p-2'
                >
                    Compressed 
                </td>
                <td
                className='border p-2'
                >
                    {originalFile && compressedFile ?(((originalFile.size - compressedFile.size) / originalFile.size) * 100).toFixed(2) : 0}%
                </td>
            </tr>
        </tbody>
    </table>
    {/* image info */}

  </div>
}

export default CompressPage