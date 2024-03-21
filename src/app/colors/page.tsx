import NavigationCard from '@/components/custom/NavigationCard'
import { colorsNavLinks } from '@/constants'
import { FC } from 'react'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return (
    <div>
      <h2
      className={'mb-4 text-3xl font-semibold'}
      >
        Color tools
      </h2>
      <div>
        {colorsNavLinks.map(link => (
          <NavigationCard
          {...link}
          key={link.title + "color-link"}
          />
        ))}
      </div>
    </div>
  )
}

export default page