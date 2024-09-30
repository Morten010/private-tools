"use client"
import { NavLinks } from '@/constants'
import Link from 'next/link'
import { FC } from 'react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '../ui/button'
import { Paintbrush2 } from 'lucide-react'
import { ResizablePanel } from '../ui/resizable'

interface SideNavProps {
  
}

const SideNav: FC<SideNavProps> = ({}) => {
    const pathname = usePathname();
    
  return (
    <ResizablePanel
    className='h-screen min-w-[250px] p-5 border-r border-border'
    >
        <Link
        href="/"
        className='hover:text-primary transition-colors  inline-block'
        >
            <h1
            className='text-2xl font-bold'
            >
                Tools
            </h1>
        </Link>
        <ul
        className='mt-5 flex flex-col'
        >
            {NavLinks.map(link => {
                if(!process.env.NEXT_PUBLIC_AI?.length) {
                    if(link.href === "/ai"){
                        console.log(link.href);
                        return null
                    }
                }
                return (
                    <li
                    key={link.href + "sidenav"}
                    >
                        <Link
                        href={link.href}
                        className={cn('py-2 rounded-sm w-full font-semibold flex items-center gap-2 opacity-65 hover:opacity-100 transition-all', 
                        {
                            "opacity-100": isLink(link.href, pathname)
                        }
                        )}
                        >
                            <div
                            className={cn(buttonVariants({ size: "icon", variant: isLink(link.href, pathname) ? "default" : "secondary"}), " h-10 w-10 ")}
                            >
                                <link.icon />
                            </div>
    
                            {link.title}
                        </Link>
                    </li>
                )
            })}
        </ul>
    </ResizablePanel>
  )
}

function isLink(href: string, currentLink: string){
    if(href === "/") {
        if(currentLink !== "/"){
            return false
        }
        if(currentLink === "/"){
            return true
        }
    }
    
    return currentLink.includes(href)
}

export default SideNav