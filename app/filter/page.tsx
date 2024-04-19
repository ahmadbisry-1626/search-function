import CategorySearch from '@/components/Category/CategorySearch'
import Header from '@/components/Header'
import SearchInput from '@/components/Home/SearchInput'
import TableContent from '@/components/Home/TableContent'
import React from 'react'

const page = ({ searchParams }: { searchParams?: { query?: string } }) => {
  const query = searchParams?.query || ''

  return (
    <main className="sm:wrapper flex min-h-screen items-center justify-center bg-[#ffff]">
      <div className="flex flex-col items-center justify-center gap-10 bg-gradient-to-r from-violet-600 to-indigo-600 sm:rounded-[24px] md:w-[800px] md:h-[600px] w-full h-screen sm:w-[550px] sm:h-[500px] md:p-12 p-4 shadow-[inset_0px_0px_9px_2px_#00000024]">
        <Header title="Filtering Function." />

        <div className="flex flex-col gap-4">
          <div className='flex gap-2 items-center'>
            <SearchInput />
            <CategorySearch />
          </div>

          <TableContent query={query} />
        </div>

      </div>
    </main>
  )
}

export default page