import { characterType } from '@/types/character'
import Image from 'next/image'
import MaxWidthWrapper from './MaxWidthWrapper';
import Loading from './Loading';
import { useQuery } from '@tanstack/react-query';
import { createCharacterByIdQueryOptions } from '@/api/rickAndMortyAPI';
import Error from './Error';
import Link from 'next/link';
import { ArrowLeft, Dna, Globe, Heart, MapPin, Search, User } from 'lucide-react';
import { Card } from './ui/card';
import CharacterInfoCard from './CharacterInfoCard';
export default function CharacterDetail({ id } : { id: string | undefined }) {
    const { data:character , isLoading, error } = useQuery(createCharacterByIdQueryOptions(id));

  if (isLoading) return <Loading/>;
  if(error) return <Error message='Failed to load character details The character may not exist.'/>
  console.log(id) 


  const getStatusColor =(status : string) : string=> {
    switch(status){
      case 'Alive' :
        return "text-green-400"
        break;
      case 'Dead' : 
        return 'text-red-500'
        break;
      default : 
      return 'text-gray-400'
    }
  }

  const getStatusBg = (status : string) :string=> {
    switch(status){
      case 'Alive' :
        return "bg-green-500/20"
        break;
      case 'Dead' : 
        return 'bg-red-500/20'
        break;
      default : 
      return 'bg-gray-400/20'
    }
  } 

  const infoItems = [
    {icon:Heart,label:'Status',value:character.status,colorValue:getStatusColor(character.status)},
    {icon:Dna,label:'Species',value:character.species,colorValue:'text-indigo-600'},
    {icon:User,label:'Gender',value:character.gender,colorValue:'text-blue-400'},
    {icon:Globe,label:'Origin',value:character.origin.name,colorValue:'text-gray-400'},
    {icon:MapPin,label:'Location',value:character.location.name,colorValue:'text-gray-400'},
  ]

  return (
    <MaxWidthWrapper className='relative'>
          <div className='flex flex-col items-center lg:flex-row lg:items-start lg:justify-center gap-6 mt-16'>
        <div
  className="
    w-full max-w-md h-[400px] relative
    hover:shadow-[0_0_40px_rgba(0,255,255,0.3)]
    ring-1 ring-cyan-400/50 rounded-xl transition-all  duration-300 ease-in-out">
          <Image
            src={character.image}
            alt={character.name}
            fill
            className=' rounded-xl aspect-square object-cover'
          />
        </div>
      <div className=''>
        <div className='p-2 flex flex-col'>
          <h1 className='text-4xl lg:text-6xl tracking-tight font-bold text-white mb-2'>{character.name}</h1>
          <div className="flex items-center gap-2 ml-1 mb-8 ">
            <p className="text-indigo-600 text-xl">{character.species}</p>
            <span className="rounded-full w-2 h-2 bg-gray-400"/>
            <p className="text-gray-500 text-xl">{character.gender}</p>
          </div>
          <div>
        </div>
          <div className='grid sm:grid-cols-2 gap-6'>
            {infoItems.map((info) => {
              return (
                <CharacterInfoCard
                key={info.label}
                icon={info.icon}
                label={info.label}
                value={info.value}
                colorValue={info.colorValue}
                />
              )
            })}
          </div>
        </div>
        
      </div>
    </div>
    </MaxWidthWrapper>
  )
}
