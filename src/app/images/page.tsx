import NavigationCard from '@/components/custom/NavigationCard'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ImageNavLinks } from '@/constants'
import Image from 'next/image'
import { FC } from 'react'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return <div
  className='flex gap-4 flex-wrap'
  >
    {ImageNavLinks.map(card => (
      <NavigationCard 
        href={card.href}
        image={card.image}
        title={card.title}
        description={card.description}
        key={card.title + "-Image-card"}
      />
    ))}
  </div>
}

export default page