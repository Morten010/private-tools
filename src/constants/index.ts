import { NavigationCardProps } from "@/components/custom/NavigationCard"

export const NavLinks: {
    title: string,
    href: string
}[] = [
    {
        title: "Image tools",
        href: "/images"
    },
    {
        title: "Color tools",
        href: "/colors"
    },
    {
        title: "Ai Generation",
        href: "/ai"
    },
]

export const ImageNavLinks: NavigationCardProps[] = [
    {
        image: {
            src: "/compress.webp",
            alt: "Compress image"
        },
        title: "Compress image",
        description: "Compress image for faster Image load time",
        href: "/images/compress"
    },
    {
        image: {
            src: "/convert.webp",
            alt: "Convert image"
        },
        title: "Image conversion",
        description: "Convert image types from one to another",
        href: "/images/convert"
    }
] 

export const aiNavLinks: NavigationCardProps[] = [
    {
        image: {
            src: "/json.webp",
            alt: "Ai to json"
        },
        title: "Ai generate json",
        description: "Generate json easily with json, some dummy json or something else.",
        href: "/ai/json"
    },
    
] 

