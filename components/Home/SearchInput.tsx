"use client"

import React from 'react'
import { Input } from "@/components/ui/input";
import { BiSearchAlt } from "react-icons/bi";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

const SearchInput = () => {
    const searchParams = useSearchParams()
    const pathnname = usePathname()
    const { replace } = useRouter()

    const handleSearch = useDebouncedCallback((searchTerm: string) => {
        const params = new URLSearchParams(searchParams)
        if (searchTerm) {
            params.set("query", searchTerm)
        } else {
            params.delete("query")
        }
        replace(`${pathnname}?${params.toString()}`)
    }, 300)

    return (
        <div className="flex items-center border-2 border-[#ffff] md:p-3 py-1 rounded-full w-full px-4 md:px-6">
            <BiSearchAlt className="text-gray-50 md:w-8 md:h-8 w-6 h-6" />
            <Input
                placeholder="Search..."
                onChange={(e) => handleSearch(e.target.value)}
                defaultValue={searchParams.get('query')?.toString()}
                className="bg-transparent border-none focus-visible:ring-transparent rounded-full focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-50 text-gray-50 w-full" />
        </div>
    )
}

export default SearchInput