import Link from 'next/link'
import { FC } from 'react'
import { ResourceProps} from "../../constants/resources"
import Image from 'next/image'

interface ResourceCardProps {
  resource: ResourceProps
}

const ResourceCard: FC<ResourceCardProps> = ({ resource }) => {
  return (
    <Link
    href={`/resource/slug`}
    className='hover:scale-[102%] transition-transform'
    >
        <div
        key={resource.name + "-resource-link"}
        className="bg-card rounded-sm overflow-hidden w-full min-w-[250px]  max-w-[300px] border h-full"
        >
            <div
            className="aspect-video relative"
            >
            <div
            className="w-full h-[80%] relative"
            >
                <Image
                src={resource.logo} 
                alt={`${resource.name} logo backdrop`} 
                width={200}
                height={200}
                className="-top-[calc(50%+30px)] left-2/4 -translate-x-2/4 absolute !z-0"
                />
                <div 
                className=" w-full h-full z-20 backdrop-blur-md relative"
                />
            </div>
            <div
            className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-24 aspect-square bg-background rounded-full p-2 border z-30"
            >
                <div
                className="relative w-full h-full overflow-hidden rounded-full"
                >
                <Image
                src={resource.logo} 
                alt={`${resource.name} logo`} 
                fill
                />
                </div>
            </div>
            </div>
            <div
            className="p-4"
            >
            <h2
            className="text-2xl font-semibold capitalize"
            >
                {resource.name}
            </h2>
            <p>
                {resource.description.slice(0, 100)}...
            </p>
            </div>
        </div>
    </Link>
  )
}

export default ResourceCard