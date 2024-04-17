"use client"

import { navbar } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import { BiSolidDownArrow } from 'react-icons/bi';

const MobileNav = () => {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className={`fixed w-full h-[100px] bg-white rounded-b-[24px] sm:hidden flex items-center justify-center ${isOpen ? 'translate-y-0' : '-translate-y-[80px]'} shadow-[inset_0px_0px_9px_2px_#00000024] transition-all duration-500`}>
            <div className='flex gap-6 items-center'>
                {navbar.map((nav) => {
                    const isActive = pathname === nav.route;

                    return (
                        <Link
                            key={nav.name}
                            href={nav.route}
                            className={`p-3 bg-transparent border-2 rounded-full ${isActive && '!bg-gradient-to-t from-violet-600 to-indigo-600'} focus:scale-105 transition-all duration-300`}>
                            <nav.icon className={`w-6 h-6 text-indigo-600 ${isActive && '!text-gray-50'}`} onClick={() => setIsOpen(false)} />
                        </Link>
                    )
                })}
            </div>

            {isOpen ?
                <button className='bg-gradient-to-b from-violet-600 to-indigo-600 p-2 w-[80px] rounded-full fixed bottom-0 translate-y-5 flex items-center justify-center'
                    onClick={() => setIsOpen(false)}>
                    <BiSolidDownArrow className='h-4 w-4 text-gray-50 rotate-180' />
                </button>
                :
                <button className='bg-gradient-to-b from-violet-600 to-indigo-600 p-2 w-[80px] rounded-full fixed bottom-0 translate-y-5 flex items-center justify-center'
                    onClick={() => setIsOpen(true)}>
                    <BiSolidDownArrow className='h-4 w-4 text-gray-50' />
                </button>
            }
        </nav>
    )
}

export default MobileNav