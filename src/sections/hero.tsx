"use client"

import Image from "next/image"
import foto from "@/assets/images/foto.jpg"
import {
    SiC,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiReactquery,
    SiTailwindcss,
    SiMysql,
    SiPostgresql,
    SiGit,
    SiGithub
} from "react-icons/si"
import { FaJava } from "react-icons/fa"
import { motion } from "framer-motion"

export default function Hero() {

    const tecnologias = [
        { name: "C", icon: SiC },
        { name: "Java", icon: FaJava },
        { name: "TypeScript", icon: SiTypescript },
        { name: "React.js", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "React Native", icon: SiReactquery },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "MySQL", icon: SiMysql },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: SiGithub }
    ]

    return (

        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-32 md:pt-24">

            {/* Fundo Glow */}
            <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary opacity-20 blur-[120px] rounded-full" />

            <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center z-10">

                {/* Texto */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >

                    {/* "Alerta" */}
                    <div className="inline-flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-full text-sm text-muted">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                        Disponível para oportunidades
                    </div>

                    {/* Título */}
                    <div className="space-y-6">

                        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-foreground">
                            Olá, eu sou{" "}
                            <span className="text-primary">
                                Brenno Gaspar
                            </span>
                        </h1>

                        <p className="text-xl text-muted max-w-2xl leading-relaxed">
                            Desenvolvedor Full Stack apaixonado por criar aplicações
                            web e mobile modernas, automatizações de processos e
                            soluções que resolvem problemas reais.
                        </p>

                    </div>

                    {/* Tecnologias */}
                    <div className="flex flex-wrap gap-4">

                        {tecnologias.map((tech) => {

                            const Icon = tech.icon

                            return (

                                <motion.div
                                    key={tech.name}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.2 }}
                                    whileHover={{ y: -5, scale: 1.05 }}
                                    className="group relative overflow-hidden flex items-center gap-3 bg-card/70 border border-border px-5 py-3 rounded-2xl text-sm font-medium text-foreground backdrop-blur-xl transition-all duration-300 hover:border-primary hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]"
                                >

                                    {/* Glow */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-primary/10 to-hover/10" />

                                    <Icon size={20} className="relative z-10 text-primary"/>

                                    <span className="relative z-10">
                                        {tech.name}
                                    </span>

                                </motion.div>

                            )

                        })}

                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4">

                        <a 
                            href="/Curriculo_Brenno_Gaspar_Pinto.pdf" 
                            className="bg-primary hover:bg-hover text-white px-8 py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105"
                            download
                        >
                            📄 Currículo
                        </a>

                        <a href="https://br.linkedin.com/in/brennogasparpinto" className="border border-border hover:border-primary px-8 py-4 rounded-2xl font-medium transition-all duration-300">
                            LinkedIn ↗
                        </a>

                    </div>

                </motion.div>

                {/* Foto */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative flex justify-center"
                >

                    {/* Glow */}
                    <div className="absolute w-[350px] h-[350px] bg-primary opacity-30 blur-[100px] rounded-full"></div>

                    {/* Card */}
                    <div className="relative bg-card border border-border rounded-[2rem] p-4 backdrop-blur-xl">

                        <Image
                            src={foto}
                            alt="Foto Pessoal"
                            width={420}
                            className="rounded-[1.5rem] object-cover"
                            priority
                        />

                    </div>

                </motion.div>

            </div>

        </section>

    )

}