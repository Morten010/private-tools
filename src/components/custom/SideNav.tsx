"use client"
import { NavLinks } from '@/constants'
import Link from 'next/link'
import { FC } from 'react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface SideNavProps {
  
}

const SideNav: FC<SideNavProps> = ({}) => {
    const pathname = usePathname();
    
  return (
    <div
    className='bg-card h-screen min-w-[250px] p-5 border-r border-border'
    >
        <Link
        href="/"
        className='hover:text-primary transition-colors p-4 inline-block'
        >
            <h1
            className='text-2xl font-bold'
            >
                Tools
            </h1>
        </Link>
        <ul
        className='mt-5 flex flex-col gap-2'
        >
            {NavLinks.map(link => (
                <li
                key={link.href + "sidenav"}
                >
                    <Link
                    href={link.href}
                    className={cn('py-2 px-4 hover:bg-primary inline-block hover:text-background rounded-sm hover:font-bold w-full transition-colors font-semibold', 
                    {
                        "bg-primary text-background font-bold": isLink(link.href, pathname)
                    })}
                    >
                        {link.title}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

function isLink(href: string, currentLink: string){
    
    
    return currentLink.includes(href)
}

export default SideNav