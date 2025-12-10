'use client';

import React from 'react'
import { AlertTriangle } from 'lucide-react';

interface Props { 
    message:string;
}

export default function Error({message} : Props) {
  return (
    <div className="flex flex-col items-center justify-center py-40 animate-fade-in">
      <div className="relative">
        <div className="absolute inset-0 bg-red-800 rounded-full blur-xl animate-pulse" />
        <div className="relative  rounded-full p-6 border border-red-500/30">
          <AlertTriangle className="w-12 h-12 text-red-600" />
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-white mt-6">
        Dimension Error
      </h3>
      
      <p className="text-center max-w-md mt-2 text-white">
        {message}
      </p>
      </div>
  )
}
