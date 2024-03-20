import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import Image from 'next/image'
import { FC } from 'react'

interface CompareProps {
  firstImage: string
  lastImage: string
}

const Compare: FC<CompareProps> = ({
  firstImage,
  lastImage
}) => {
  return (
    <div
    className='relative w-full aspect-square my-5 rounded-sm overflow-hidden'
    >
      <div 
      className='bg-red-500 h-full aspect-square -z-10 absolute'
      >
        <Image 
        src={lastImage}
        alt='Compress image'
        className='object-cover'
        fill
        />
      </div>
      <ResizablePanelGroup
      direction='horizontal'
      className='relative w-full h-full border-r-2 z-20'
      >
        <ResizablePanel>
          <div
          className='relative h-full aspect-square'
          >
            <Image 
            src={firstImage}
            alt='Original image'
            className='object-cover'
            fill
            />
          </div>
        </ResizablePanel>

        <ResizableHandle withHandle />

        <ResizablePanel>
          <div></div>
        </ResizablePanel>
        
      </ResizablePanelGroup>
    </div>
  )
}

export default Compare