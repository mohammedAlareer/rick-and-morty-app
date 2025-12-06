import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'

export default function Navbar() {
     return (
    <nav className='sticky top-0 z-50 shadow-lg bg-indigo-950/90 text-white backdrop-blur-xl border-b border-white/10'>
      <MaxWidthWrapper>
        <div className='flex items-center py-4'>
          <Link href='/' className='text-xl font-bold '>
            My Ecommerce
          </Link>
          </div>
        </MaxWidthWrapper>
    </nav>
  )
}
