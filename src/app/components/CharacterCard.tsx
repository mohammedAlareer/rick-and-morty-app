
import { characterType } from "@/types/character"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { ArrowRight, MapPin } from "lucide-react"

export default function CharacterCard({character} : {character: characterType}) {
  return (
    <Link href={`/character/${character.id}`} className="">
      <Card className="pt-0 overflow-hidden group bg-gray-900 gap-2 w-full h-[450]">
        {character.image && (
          <div className="relative w-80 h-72">
            <Image
            src={character.image}
            alt={character.name}
            fill
            className="aspect-square object-cover 
                  group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        )}
        <CardHeader>
          <CardTitle>
            <h1 className="text-white font-bold text-lg md:text-xl tracking-tight">{character.name}</h1>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3 -mt-2">
          <div className="flex items-center gap-2 ">
            <p className="text-indigo-600">{character.species}</p>
            <span className="rounded-full w-1 h-1 bg-gray-400"/>
            <p className="text-gray-500">{character.gender}</p>
          </div>
          <div className="flex gap-1"> 
            <MapPin className=" text-red-500 w-4 h-4"/>
            <p className="text-gray-400 text-xs">{character.location.name}</p>
          </div>
          <div className="flex gap-1 text-white justify-end mt-4 group items-center ">
          <span className="text-[14px]  rounded-full bg-red-600 px-2 py-1">View Details</span>
        <ArrowRight className="text-green-500 group-hover:mr-2 transition-all duration-300 ease-in-out"/>
        </div>

        </CardContent>
      </Card>
    </Link>
  )
}
