import React from 'react'
import { ScrollArea } from './ui/scroll-area'
import TableData from './Home/TableData'

const TableContent = () => {
    return (
        <ScrollArea className="w-full sm:h-[300px] h-[400px] text-[#ffff]">
            <TableData />
        </ScrollArea>
    )
}

export default TableContent