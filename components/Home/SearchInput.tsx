import React from 'react'
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { BiSearchAlt } from "react-icons/bi";

const SearchInput = () => {
    return (
        <div className="flex items-center border-2 border-[#ffff] md:p-3 py-1 rounded-full w-full px-4 md:px-6">
            <BiSearchAlt className="text-gray-50 md:w-8 md:h-8 w-6 h-6" />
            <Input placeholder="Search..." className="bg-transparent border-none focus-visible:ring-transparent rounded-full focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-50 text-gray-50 w-full" />
        </div>
    )
}

export default SearchInput