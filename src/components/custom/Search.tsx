'use client'
import { FC, FormEvent, useState } from 'react'
import { Input } from '../ui/input'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'
import { SearchIcon } from 'lucide-react'

interface SearchProps {
  
}

const Search: FC<SearchProps> = ({}) => {
    const [search, setSearch] = useState("")
    const navigation = useRouter()
    // https://www.google.com/search?q=

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        navigation.push(`https://www.google.com/search?q=${search}`)
    }

  return (
    <form
    onSubmit={handleSubmit}
    className='absolute right-12 top-8 z-50'
    >
        <Input 
        type='text'
        className='z-50'
        value={search}
        placeholder='Search on google'
        onChange={(e) => setSearch(e.currentTarget.value)}
        />
        <Button
        size="icon"
        variant="outline"
        className='absolute right-1 top-2/4 -translate-y-2/4 h-8 w-8 '
        >
            <SearchIcon 
            height={16}
            width={16}
            />
        </Button>
    </form>
  )
}

export default Search