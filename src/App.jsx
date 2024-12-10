import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";

import React from 'react'

const App = () => {
  return (
    <><div className="fixed -z-10 min-h-screen w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div> 
    
    <main className='flex flex-col items-center px-4 md:px-8 lg:px-12'>
      <Navbar />
      <Hero />
      <Tech />
      <Projects />
      <Contacts />

    </main></>
  )
}

export default App
