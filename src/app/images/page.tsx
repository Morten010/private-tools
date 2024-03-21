import NavigationCard from '@/components/custom/NavigationCard'
import { ImageNavLinks } from '@/constants'
import { FC } from 'react'
import { cn } from '@/lib/utils'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return (
    <div>
      <h2
      className={cn('mb-4 text-3xl font-semibold')}
      >
        Image tools
      </h2>
      <div
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
    </div>
  )
}

export default page