'use client'

import Card from "@/components/card";
import { motion } from "framer-motion"

export default function About () {

    return (

        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-32">

            {/* Fundo Glow */}
            <div className="absolute bottom-70 right-0 w-[400px] h-[400px] bg-primary opacity-10 blur-[120px] rounded-full" />

            <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-20 items-start z-10">

                {/* Texto */}
                <div className="space-y-8">

                    <div className="space-y-4">
                        <span className="text-primary font-medium tracking-widest uppercase text-sm">Sobre Mim</span>

                        <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">Minha Jornada</h1>
                    </div>

                    <div className="space-y-6 text-lg text-muted leading-relaxed">

                        <p>
                            Sou estudante de Ciência da Computação e desenvolvedor apaixonado e movido pela criação de soluções digitais 
                            para problemas reais.
                        </p>

                        <p>
                            Minha jornada na tecnologia começou há cerca de 5 anos, quando entrei no ensino médio integrado ao técnico em 
                            Tecnologia da Informação. Desde então, venho evoluindo constantemente através da produção de projetos práticos, 
                            estudos independentes e experiências acadêmicas.
                        </p>

                        <p>
                            Meu foco é o desenvolvimento Full Stack, sendo aplicações web, mobile 
                            e sistemas que unem modernidade, usabilidade e experiência.
                        </p>

                    </div>

                </div>

                {/* Cards */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.3 }}
                    className="grid gap-6"
                >

                    <Card
                        data="2022 - 2024"
                        tipo="Técnico"
                        instituicao="Colégio ENIAC"
                        texto="Formação integrada ao Ensino Médio Técnico em Tecnologia da Informação, com foco em lógica, programação e desenvolvimento de sistemas."
                    />
              
                    <Card
                        data="2025 - 2028"
                        tipo="Cursando"
                        instituicao="Instituto Federal de São Paulo"
                        texto="Bacharelado em Ciência da Computação com foco em engenharia de software, algoritmos, arquitetura de sistemas e desenvolvimento Full Stack."
                    />

                </motion.div>

            </div>
        </section>

    )

}