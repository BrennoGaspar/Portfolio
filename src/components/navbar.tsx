"use client"

import logo from "@/assets/logo/Brenno_Gaspar_logo.png"
import Image from 'next/image'
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function NavBar () {

    const [menuOpen, setMenuOpen] = useState(false)

    const handleScroll = (id: string) => {

        const section = document.getElementById(id)
        if( !section ) return

        const targetPosition = section.getBoundingClientRect().top + window.scrollY
        const startPosition = window.scrollY
        const distance = targetPosition - startPosition
        const duration = 1200

        let start: number | null = null

        function animation(currentTime: number) {

            if (start === null) start = currentTime

            const timeElapsed = currentTime - start
            const progress = Math.min(timeElapsed / duration, 1)
            // Conta gerada com auxílio de IA
            const easeInOut = progress < 0.5 ? 
                2 * progress * progress :
                1 - Math.pow(-2 * progress + 2, 2) / 2

            window.scrollTo( 0, startPosition + distance * easeInOut )

            if (timeElapsed < duration) {
                requestAnimationFrame(animation)
            }

        }

        requestAnimationFrame(animation)
        setMenuOpen(false)

    }

    const header = [
                        { name: "Sobre", href: "sobre" },
                        { name: "Projetos", href: "projetos" },
                        { name: "Contato", href: "contato" }
                    ]

    return (
        
       <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-background/70 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                <button onClick={() => handleScroll("hero")} className="group flex items-center gap-3">

                    <div className="relative">

                        {/* Glow */}
                        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <Image
                            src={logo}
                            width={65}
                            height={65}
                            alt="Logo Brenno Gaspar"
                            className="relative transition-transform duration-500 group-hover:scale-105"
                        />

                    </div>

                    <div className="flex flex-col">

                        <span className="text-xl font-bold text-foreground tracking-wide">Brenno Gaspar</span>
                        <span className="text-xs text-muted tracking-[0.25em] uppercase">Full Stack Developer</span>

                    </div>

                </button>

                {/* Desktop */}
                <ul className="hidden md:flex items-center gap-3 text-sm font-medium">

                    {header.map((item) => (

                        <li key={item.name}>

                            <button onClick={() => handleScroll(item.href)} className="relative px-5 py-3 rounded-2xl text-[15px] font-medium tracking-wide text-muted hover:text-foreground transition-all duration-300 hover:bg-primary/15">
                                {item.name}
                            </button>

                        </li>

                    ))}

                </ul>

                {/* Mobile Button */}
                <button className="md:hidden relative z-50 text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={30} /> : <Menu size={26} />}
                </button>

            </div>

            {/* Mobile Menu */}
            <AnimatePresence>

                {menuOpen && (

                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.25 }}
                        className="md:hidden border-t border-white/10 bg-background/95 backdrop-blur-2xl"
                    >

                        <ul className="flex flex-col px-6 py-8 gap-4 text-lg font-medium">

                            {header.map((item) => (

                                <li key={item.name}>

                                    <button onClick={() => handleScroll(item.href)} className="flex w-full items-center justify-between rounded-2xl border border-border bg-card/40 px-5 py-4 text-foreground hover:border-primary hover:bg-primary/5 transition-all duration-300">
                                        {item.name}
                                        <span className="text-primary">→</span>
                                    </button>

                                </li>

                            ))}

                        </ul>

                    </motion.div>

                )}

            </AnimatePresence>

        </nav>

    )

}