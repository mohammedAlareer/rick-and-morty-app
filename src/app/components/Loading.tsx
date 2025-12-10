'use client';
import React from 'react';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] space-y-4">
      
      <div className="w-16 h-16 border-4 border-green-500 border-t-transparent border-b-transparent rounded-full animate-spin"/>

      <p className="text-white text-lg md:text-xl font-semibold animate-pulse">
        Loading data, please wait...
      </p>
    </div>
  );
}
