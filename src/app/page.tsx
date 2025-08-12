import Link from "next/link";
import React from 'react';

export default async function Home() {
  

  return (
    <div>
      <div>
      <div className="flex justify-center items-center flex-col h-screen bg-blue-400">
        
        <h1 className="text-2xl font-bold ">Welcome to Recruit</h1>
        <p className="mt-4">
        This is a simple recruitment application built with Next.js and tRPC.
        </p>
      
        <p className="mt-2 bg-white p-2 rounded-lg shadow-md">
        <Link href="/home">Go to Home</Link>
      </p>    
        <p className="mt-2 bg-white p-2 rounded-lg shadow-md">
        <Link href="/dashboard">Go to dashboard</Link>
      </p> 
      </div>
      </div>
    </div>
  );
}
