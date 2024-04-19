"use client"

import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { listData } from '@/constants'

const TableData = ({ query }: { query: string }) => {
  const data = listData

  const filteredData = data.filter((newData) => {
    return newData.name.toLowerCase().includes(query.toLowerCase())
  })

  return (
    <>
      {filteredData.length === 0 ?
        <div className='w-[704px] sm:h-[300px] h-[400px] text-[#ffff] flex items-center justify-center'>
          <span className='text-gray-200 text-[24px]'>
            "{query}" not found
          </span>
        </div>
        :
        <Table>
          <TableCaption className="text-gray-200">A list of your client</TableCaption>
          <TableHeader>
            <TableRow className='max-md:text-[12px]'>
              <TableHead className="md:w-[100px] w-[50px] text-gray-200">ID</TableHead>
              <TableHead className="text-gray-200 w-[100px] md:w-[200px]">Name</TableHead>
              <TableHead className="text-gray-200">Description</TableHead>
            </TableRow>
          </TableHeader>
          {filteredData.sort((a, b) => a.id - b.id).map((newData) => (
            <TableBody key={newData.id} className=''>
              <TableRow className='max-md:text-[12px]'>
                <TableCell className="font-medium">{newData.id}</TableCell>
                <TableCell>{newData.name}</TableCell>
                <TableCell>{newData.bio}</TableCell>
              </TableRow>
            </TableBody>
          )
          )}
        </Table>
      }
    </>
  )
}

export default TableData