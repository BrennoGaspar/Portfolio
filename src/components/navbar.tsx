"use client"

import logo from "@/assets/logo/Brenno_Gaspar_logo.png"
import Image from 'next/image'
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function NavBar () {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        
       <nav className="bg-background/80 backdrop-blur-md fixed w-full top-0 z-50 border-b border-border">
            
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                <a href="#" className="flex items-center gap-3">
                    <Image
                        src={logo}
                        width={70}
                        height={70}
                        alt="Logo Brenno Gaspar"
                    />
                    <span className="text-xl font-semibold text-foreground">Brenno Gaspar</span>
                </a>

                {/* Desktop */}
                <ul className="hidden md:flex items-center gap-20 text-l font-medium text-muted">
                    <li>
                        <a href="#sobre" className="hover:text-primary transition-colors duration-300">Sobre</a>
                    </li>

                    <li>
                        <a href="#formacao" className="hover:text-primary transition-colors duration-300">Formação</a>
                    </li>

                    <li>
                        <a href="#projetos" className="hover:text-primary transition-colors duration-300">Projetos</a>
                    </li>

                    <li>
                        <a href="#contato" className="hover:text-primary transition-colors duration-300">Contato</a>
                    </li>
                </ul>

                {/* Mobile Button */}
                <button
                    className="md:hidden text-foreground"
                    onClick={() => setMenuOpen(!menuOpen)} // Troca o valor (true -> false || false -> true)
                >
                    {menuOpen ? <X size={30} /> : <Menu size={25} />}
                </button>

            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden px-6 pb-6">
                    <ul className="flex flex-col gap-6 text-lg font-medium text-muted">
                        <li>
                            <a href="#sobre" className="hover:text-primary transition-colors duration-300">Sobre</a>
                        </li>

                        <li>
                            <a href="#formacao" className="hover:text-primary transition-colors duration-300">Formação</a>
                        </li>

                        <li>
                            <a href="#projetos" className="hover:text-primary transition-colors duration-300">Projetos</a>
                        </li>

                        <li>
                            <a href="#contato" className="hover:text-primary transition-colors duration-300">Contato</a>
                        </li>
                    </ul>
                </div>
            )}

        </nav>

    )

}