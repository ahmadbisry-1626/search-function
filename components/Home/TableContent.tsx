import React from 'react'
import { ScrollArea } from '../ui/scroll-area'
import TableData from './TableData'

const TableContent = ({ query }: { query: string }) => {
    return (
        <ScrollArea className="w-full sm:h-[300px] h-[400px] text-[#ffff]">
            <TableData query={query} />
        </ScrollArea>
    )
}

export default TableContent