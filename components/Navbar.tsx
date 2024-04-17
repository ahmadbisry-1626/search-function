"use client"

import { navbar, sosmed } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { BiSolidLeftArrow } from 'react-icons/bi'
import MobileNav from './MobileNav'

const Navbar = () => {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <nav className={`w-[120px] h-[250px] fixed left-0 rounded-tr-[24px] rounded-br-[24px] bg-gradient-to-b from-violet-600 to-indigo-600 top-1/2 transform -translate-y-1/2 flex items-center justify-center z-[99] ${isOpen ? '-translate-x-4' : '-translate-x-[90px]'} transition-all duration-500 shadow-[inset_0px_0px_9px_2px_#00000024] max-sm:hidden`}>

                <div className='flex flex-col gap-6 items-center'>
                    {navbar.map((nav) => {
                        const isActive = pathname === nav.route;

                        return (
                            <Link
                                key={nav.name}
                                href={nav.route}
                                className={`p-3 bg-transparent border-2 rounded-full ${isActive && '!bg-[#ffff]'} focus:scale-105 transition-all duration-300`}>
                                <nav.icon className={`w-6 h-6 text-gray-50 ${isActive && 'text-indigo-600'}`} />
                            </Link>
                        )
                    })}
                </div>

                {isOpen ?
                    <button className='bg-white p-2 h-[80px] rounded-full fixed top-1/2 transform -translate-y-1/2 right-0 translate-x-4'
                        onClick={() => setIsOpen(false)}>
                        <BiSolidLeftArrow className='h-4 w-4 text-indigio-600 text-indigo-600' />
                    </button>
                    :
                    <button className='bg-white p-2 h-[80px] rounded-full fixed top-1/2 transform -translate-y-1/2 right-0 translate-x-4'
                        onClick={() => setIsOpen(true)}>
                        <BiSolidLeftArrow className='h-4 w-4 text-indigio-600 text-indigo-600 rotate-180 transition-all duration-500' />
                    </button>
                }

            </nav>

            <nav className={`w-[120px] h-[160px] fixed left-0 rounded-tr-[24px] rounded-br-[24px] bg-gradient-to-t from-violet-600 to-indigo-600 top-1/2 transform translate-y-[175px] flex items-center justify-center z-[99] ${isOpen ? '-translate-x-4' : '-translate-x-[120px]'} transition-all duration-500 shadow-[inset_0px_0px_9px_2px_#00000024] max-sm:hidden`}>
                <div className='flex flex-col gap-6'>
                    {sosmed.map((item) => (
                        <Link href={item.path} key={item.name} className='group p-2 rounded-full border-2 bg-[#ffff] hover:bg-transparent hover:border-2 transition-all duration-300' target='blank'>
                            <item.icon className='w-7 h-7 text-indigo-600 group-hover:text-gray-50 transition duration-300' />
                        </Link>
                    ))}
                </div>

            </nav>

            <MobileNav />
        </>
    )
}

export default Navbar