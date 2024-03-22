"use client"
import convert from 'color-convert'
import { Input } from '@/components/ui/input'
import { ChangeEvent, FC, useState } from 'react'

interface pageProps {
  
}

const ColorPage: FC<pageProps> = ({}) => {
    const [colors, setColors] = useState({
        hex: "#D6FF42",
        rgb: "rgb(214,255,66)",
        hsl: "hsl(73,100%,66%)"
    })
    
    const handleChange = (c: {
        hex?: string;
        rgb?: string;
        hsl?: string;
    }) => {
        setColors({
            ...colors,
            ...c
        })
    }

    const handleHex = (e: ChangeEvent<HTMLInputElement>) => {
        if(!e.currentTarget.value || e.currentTarget.value.length === 8) return
            console.log(e.currentTarget.value);
            const rgb = convert.hex.rgb(e.currentTarget.value)
            const hsl = convert.hex.hsl(e.currentTarget.value)
            const updatedColors = {
                hex: e.currentTarget.value,
                rgb: `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`,
                hsl: `hsl(${hsl[0]},${hsl[1]}%,${rgb[2]}%)`
            }
            
            handleChange(updatedColors)
            return   

    }

    const handleRgb = (e: ChangeEvent<HTMLInputElement>) => {
        const rgb = e.currentTarget.value.replace("rgb(", "").replace(")", "").split(",")
        if(rgb.length !== 3) return
        console.log(rgb);
        // @ts-ignore
        const hex = convert.rgb.hex(rgb.map(color => parseInt(color)))
        // @ts-ignore
        const hsl = convert.rgb.hsl(rgb.map(color => parseInt(color)))
        const updatedColors = {
            hex: `#${hex}`,
            rgb: e.currentTarget.value,
            hsl: `hsl(${hsl[0]},${hsl[1]}%,${rgb[2]}%)`
        }
        
        
        handleChange(updatedColors)
    }

    const handleHsl = (e: ChangeEvent<HTMLInputElement>) => {
        const hsl = e.currentTarget.value.replace("hsl(", "").replace(")", "").split(",")
        if(hsl.length !== 3) return
        // @ts-ignore
        const hex = convert.hsl.hex(hsl.map(color => parseInt(color)))
        // @ts-ignore
        const rgb = convert.hsl.rgb(hsl.map(color => parseInt(color)))
        const updatedColors = {
            hex: `#${hex}`,
            rgb: `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`,
            hsl: e.currentTarget.value
        }
        
        
        handleChange(updatedColors)
    }

  return (
    <div>
        <h2
        className='text-3xl font-semibold'
        >
            Convert color
        </h2>
        <div
        className='max-w-[600px] flex flex-col gap-4 mt-5'
        >
            <label>
                <span
                className='pb-2 inline-block'
                >
                    HEX
                </span>
                <Input 
                value={colors.hex}
                onChange={handleHex}
                />
            </label>
            <label>
                <span
                className='pb-2 inline-block'
                >
                    RGB
                </span>
                <Input 
                value={colors.rgb}
                onChange={handleRgb}
                />
            </label>
            <label>
                <span
                className='pb-2 inline-block'
                >
                    HSL
                </span>
                <Input 
                value={colors.hsl}
                onChange={handleHsl}
                />
            </label>
        </div>
        <div 
        className='w-full aspect-video rounded-sm mt-5 max-w-[600px]'
        style={{
            background: colors.hex
        }}
        />
    </div>
  )
}

export default ColorPage