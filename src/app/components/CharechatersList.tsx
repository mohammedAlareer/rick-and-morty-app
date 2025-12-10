"use client"

import React, { useEffect, useState } from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { useQuery } from '@tanstack/react-query';
import { createCharactersQueryOptions } from '@/api/rickAndMortyAPI';
import Loading from './Loading';
import { Button } from './ui/button';
import { Search,X,XIcon } from 'lucide-react';
import CharacterCard from './CharacterCard';
import { characterType } from '@/types/character';
import Error from './Error';
export default function CharechatersList( ) {

  const {data,isLoading,isError} = useQuery(createCharactersQueryOptions())
  const [searchInput,setSearchInput]=useState("");
  const [isFoucsed,setIsFoucsed] = useState(false);
  const [debouncedValue,setDebouncedValue] = useState(searchInput)
  const [localValue,setLocalValue] = useState(searchInput)

useEffect(() => {
  const timer = setTimeout(() => {
    setDebouncedValue(searchInput)
  },300)

  return () => clearTimeout(timer)
},[searchInput])

const filteredCharacters = data?.results.filter((character:characterType) => character.name.toLowerCase().includes(debouncedValue.toLowerCase()));

if (isLoading) return <Loading/>


  const handleClear = () => {

  }

  return (
    <MaxWidthWrapper>
        <div>
            <div className='flex flex-col gap-2 items-center mt-18'>
              <h1 className="text-4xl md:text-5xl text-white text-balance text-center">Welcome to the <span className="text-green-500 text-6xl">Rick & Morty</span> Universe</h1>
              <p className="text-gray-400 mt-3 text-xl text-center">Find your favorite characters and dive into their adventures</p>
              <div className='relative group w-full max-w-md'>
                <input 
                type='text'
                placeholder='Search character...'
                value={searchInput}
                onFocus={() => setIsFoucsed(true)}
                onBlur={() => setIsFoucsed(false)}
                onChange={(e) => setSearchInput(e.target.value)}
                className='w-full mt-10 rounded px-12 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 text-white/90'/>
                <Search className='absolute left-5 top-14 text-gray-400 w-5 h-5' />
                <X className='absolute size-4 right-3 top-14'/>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-16'>
              {filteredCharacters?.map((character : characterType) => {
                return <CharacterCard key={character.id} character={character}/>
              })}
              {filteredCharacters.length === 0  ? <div className='col-span-full'><Error message="No characters found with this name"/> </div> : ''}
            </div>
            </div>
        </div>
    </MaxWidthWrapper>
  )
}
