import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'

export default function Navbar() {
     return (
    <nav className='sticky top-0 z-50 shadow-lg bg-gray-600/70 text-white backdrop-blur-xl border-b border-white/10'>
      <MaxWidthWrapper>
        <div className='flex items-center py-5'>
          <Link href='/' className='text-4xl font-bold animate-float '>
            <span className='shadow-md shadow-green-400  rounded-full px-2 py-2'>Rick & Morty</span>
          </Link>
          </div>
        </MaxWidthWrapper>
    </nav>
  )
}
