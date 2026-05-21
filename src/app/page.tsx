'use client'

import NavBar from "@/components/navbar";
import About from "@/sections/about";
import Hero from "@/sections/hero";
import Projetos from "@/sections/projects";

export default function Home () {

  return (
    
    <div>
      <NavBar/>
      <Hero/>
      <About/>
      <Projetos/>
    </div>

  )

}
