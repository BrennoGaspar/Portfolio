import Projeto from "@/components/cardProject";
import { motion } from "framer-motion"

export default function Projetos () {

    return (

        <section className="relative min-h-screen overflow-hidden px-6 pt-32 md:pt-24 pb-20">

            <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.3 }}
                    className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
            >
                
                <Projeto
                    stack="Full Stack"
                    titulo="Atletica-Shop"
                    descricao="Sistema Full Stack desenvolvido para centralizar a venda de produtos e melhorar a administração de pedidos da Atlética Arthur Chiodi (A.A.A.A.C.H)"
                    tecnologias={[ "Next.js", "TypeScript", "Tailwind", "PostgreSQL" ]}
                    github="oi"
                    deploy="oi"
                    imagePath="@/assets/images/projects/HomeBoard.png"
                />

                <Projeto
                    stack="Full Stack"
                    titulo="Home Board"
                    descricao="Sistema Full Stack desenvolvido para centralizar a venda de produtos e melhorar a administração de pedidos da Atlética Arthur Chiodi (A.A.A.A.C.H)"
                    tecnologias={[ "Next.js", "TypeScript", "Tailwind", "PostgreSQL" ]}
                    github="oi"
                    deploy="oi"
                    imagePath="@/assets/images/projects/HomeBoard.png"
                />

                <Projeto
                    stack="Full Stack"
                    titulo="E-Commerce Application"
                    descricao="Sistema Full Stack desenvolvido para centralizar a venda de produtos e melhorar a administração de pedidos da Atlética Arthur Chiodi (A.A.A.A.C.H)"
                    tecnologias={[ "Next.js", "TypeScript", "Tailwind", "PostgreSQL" ]}
                    github="oi"
                    imagePath="@/assets/images/projects/HomeBoard.png"
                />

            </motion.div>

            <motion.div
                    initial={{ opacity: 0, y: 90 }}
                    whileInView={{ opacity: 1, y: 30 }}
                    transition={{ duration: 1.3 }}
                    className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
            >

                <Projeto
                    stack="Full Stack"
                    titulo="EcoGru"
                    descricao="Sistema Full Stack desenvolvido para centralizar a venda de produtos e melhorar a administração de pedidos da Atlética Arthur Chiodi (A.A.A.A.C.H)"
                    tecnologias={[ "Next.js", "TypeScript", "Tailwind", "PostgreSQL" ]}
                    github="oi"
                    imagePath="@/assets/images/projects/HomeBoard.png"
                />
                
                <Projeto
                    stack="Full Stack"
                    titulo="IAKAP - Educa Nóis"
                    descricao="Sistema Full Stack desenvolvido para centralizar a venda de produtos e melhorar a administração de pedidos da Atlética Arthur Chiodi (A.A.A.A.C.H)"
                    tecnologias={[ "Next.js", "TypeScript", "Tailwind", "PostgreSQL" ]}
                    github="oi"
                    imagePath="@/assets/images/projects/HomeBoard.png"
                />

                <Projeto
                    stack="Full Stack"
                    titulo="Clash Royale Project"
                    descricao="Sistema Full Stack desenvolvido para centralizar a venda de produtos e melhorar a administração de pedidos da Atlética Arthur Chiodi (A.A.A.A.C.H)"
                    tecnologias={[ "Next.js", "TypeScript", "Tailwind", "PostgreSQL" ]}
                    github="oi"
                    imagePath="@/assets/images/projects/HomeBoard.png"
                />

            </motion.div>

            <motion.div
                    initial={{ opacity: 0, y: 120 }}
                    whileInView={{ opacity: 1, y: 60 }}
                    transition={{ duration: 1.3 }}
                    className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
            >

                <Projeto
                    stack="Full Stack"
                    titulo="Ocean Guardians"
                    descricao="Sistema Full Stack desenvolvido para centralizar a venda de produtos e melhorar a administração de pedidos da Atlética Arthur Chiodi (A.A.A.A.C.H)"
                    tecnologias={[ "Next.js", "TypeScript", "Tailwind", "PostgreSQL" ]}
                    github="oi"
                    imagePath="@/assets/images/projects/HomeBoard.png"
                />

                <Projeto
                    stack="Full Stack"
                    titulo="Monitoramento de Preços"
                    descricao="Sistema Full Stack desenvolvido para centralizar a venda de produtos e melhorar a administração de pedidos da Atlética Arthur Chiodi (A.A.A.A.C.H)"
                    tecnologias={[ "Next.js", "TypeScript", "Tailwind", "PostgreSQL" ]}
                    github="oi"
                    imagePath="@/assets/images/projects/HomeBoard.png"
                />

                <Projeto
                    stack="Full Stack"
                    titulo="Verificar Nota no Portal"
                    descricao="Sistema Full Stack desenvolvido para centralizar a venda de produtos e melhorar a administração de pedidos da Atlética Arthur Chiodi (A.A.A.A.C.H)"
                    tecnologias={[ "Next.js", "TypeScript", "Tailwind", "PostgreSQL" ]}
                    github="oi"
                    imagePath="@/assets/images/projects/HomeBoard.png"
                />
                
            </motion.div>

        </section>

    )

}