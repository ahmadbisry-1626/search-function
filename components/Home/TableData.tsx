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

const TableData = () => {
  return (
    <Table>
            <TableCaption className="text-gray-200">A list of your client</TableCaption>
            <TableHeader>
              <TableRow className='max-md:text-[12px]'>
                <TableHead className="md:w-[100px] w-[50px] text-gray-200">ID</TableHead>
                <TableHead className="text-gray-200 w-[100px] md:w-[200px]">Name</TableHead>
                <TableHead className="text-gray-200">Description</TableHead>
              </TableRow>
            </TableHeader>
            {listData.sort((a, b) => a.id - b.id).map((data) => (
              <TableBody>
                <TableRow className='max-md:text-[12px]'>
                  <TableCell className="font-medium">{data.id}</TableCell>
                  <TableCell>{data.name}</TableCell>
                  <TableCell>{data.bio}</TableCell>
                </TableRow>
              </TableBody>
            ))}
          </Table>
  )
}

export default TableData