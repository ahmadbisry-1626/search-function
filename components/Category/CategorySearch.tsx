"use client"

import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"



const CategorySearch = () => {
    return (
        <Select>
            <SelectTrigger className="w-1/2 h-full border-2 border-gray-50 px-6 bg-transparent focus-visible:ring-transparent rounded-full focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-gray-50">
                <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
                <RadioGroup defaultValue="default" className='p-4 gap-4'>
                    <div className="flex items-center space-x-3">
                        <RadioGroupItem value="default" id="default" />
                        <Label htmlFor="default">Default</Label>
                    </div>
                    <div className="flex items-center space-x-3">
                        <RadioGroupItem value="name" id="name" />
                        <Label htmlFor="name">Name</Label>
                    </div>
                    <div className="flex items-center space-x-3">
                        <RadioGroupItem value="bio" id="bio" />
                        <Label htmlFor="bio">Bio</Label>
                    </div>
                </RadioGroup>

            </SelectContent>
        </Select>

    )
}

export default CategorySearch