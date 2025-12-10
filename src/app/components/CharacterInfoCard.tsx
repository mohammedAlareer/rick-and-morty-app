"use client"

import { LucideIcon } from "lucide-react"
import { Card } from "./ui/card";
import { useState } from "react";


interface Props{
    icon:LucideIcon;
    label:string;
    value:string;
    colorValue:string;
}

export default function CharacterInfoCard({icon : Icon,label,value,colorValue} : Props) {

  const [animate,setAnimate] = useState(false);


  const handleMouseEnter = () => { 
    setAnimate(true)
    setTimeout(() => setAnimate(false) , 500)
  }

  return (
        <Card className={`bg-black/40 p-3 border border-gray-500 ${animate ? 'animate-bounceOnce' : ''} `}
        onMouseEnter={handleMouseEnter}
        
        >
        <div className='flex gap-5 items-center '>
          <Icon className={`size-6 ${colorValue}`} />
          <div>
            <p className='text-gray-400 text-xs'>{label}</p>
            <p className={` text-lg font-semibold ${colorValue} `}>{value}</p>
          </div>
          </div>
          </Card>

)
}