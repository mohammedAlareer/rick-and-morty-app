"use client"

import React, { useState } from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'





export default function CharechatersList( ) {

    const [searchInput,setSearchInput]=useState("");
    


  return (
    <MaxWidthWrapper>
        <div>
            <div className='flex flex-col gap-2 items-center mt-18'>
                <h1 className="text-4xl md:text-5xl text-white">Welcome to the <span className="text-green-500 text-6xl">Rick & Morty</span> Universe</h1>
                <p className="text-gray-400 mt-3 text-xl">Find your favorite characters and dive into their adventures</p>
                <input 
                type='text'
                placeholder='Search character...'
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className='w-full max-w-md mt-10 rounded px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 text-white/90'/>
            </div>
            <div>

            </div>
        </div>
    </MaxWidthWrapper>
  )
}
