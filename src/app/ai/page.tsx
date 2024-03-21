import NavigationCard from '@/components/custom/NavigationCard'
import { aiNavLinks } from '@/constants'
import { FC } from 'react'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return (
    <div>
      {process.env.NEXT_PUBLIC_AI ? (
        <>
        {aiNavLinks.map(link => (
          <NavigationCard 
          {...link}
          key={link.title + "ai-link"}
          />
        ))}
        </>
      ) : (
        <div
        className='w-full h-[40vh] grid place-content-center text-2xl font-semibold'
        >
          Missing ai api key
        </div>
      )}
    </div>
  )
}

export default page