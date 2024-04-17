"use client"

import React from 'react'

const Header = ({title}: {title: string}) => {
    return (
        <h1 className="font-semibold text-[24px] md:text-[42px] bg-gradient-to-r from-slate-50 via-zinc-100 to-zinc-100 bg-clip-text text-transparent">
            {title}
        </h1>
    )
}

export default Header