import { FC } from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'
import Link from 'next/link'

export interface NavigationCardProps {
  image: {
    src: string
    alt: string
  },
  title: string,
  description: string
  href: string
}

const NavigationCard: FC<NavigationCardProps> = ({description, href, image, title}) => {

  return (
    <Link
    className='max-w-[250px]'
    href={href}
    >
      <Card
      className='overflow-hidden max-w-[300px]'
      >
        <div
        className='relative w-full aspect-square'
        >
          <Image
          src={image.src}
          alt={image.alt}
          fill
          />
        </div>
        <CardHeader>
          <CardTitle>
            {title}
          </CardTitle>
          <CardDescription>
            {description}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  )
}

export default NavigationCard