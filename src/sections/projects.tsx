import Projeto from "@/components/cardProject";
import { motion } from "framer-motion"

// Imagens
import atleticashop from "@/assets/images/projects/AtleticaShop.png"
import homeboard from "@/assets/images/projects/HomeBoard.png"
import ecommerce from "@/assets/images/projects/e-commerce.png"
import iakap from "@/assets/images/projects/IAKAP.png"
import ecogru from "@/assets/images/projects/EcoGru.png"
import clashroyale from "@/assets/images/projects/clashroyale.png"
import oceanguardians from "@/assets/images/projects/oceanguardians.png"
import monitoramento from "@/assets/images/projects/monitoramento.png"
import biblioteca from "@/assets/images/projects/biblioteca.png"

export default function Projetos () {

    return (

        <section id="projetos" className="relative min-h-screen overflow-hidden px-6 pt-32 md:pt-24 pb-20">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 10 }}
                    transition={{ duration: 1.3 }}
                    className="space-y-6 text-center"
                >

                    <span className="text-primary font-medium tracking-[0.3em] uppercase text-sm">Portfólio</span>

                    <h1 className="text-5xl md:text-6xl font-bold text-foreground">Projetos em Destaque</h1>

                    <p className="max-w-3xl mx-auto text-lg text-muted leading-relaxed">
                        Os principais projetos que desenvolvi ao longo da minha jornada na tecnologia,
                        envolvendo aplicações web, mobile, automações, jogos digitais e soluções para problemas reais.
                    </p>

                </motion.div>

            <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 50 }}
                    transition={{ duration: 1.3 }}
                    className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
            >
                
                <Projeto
                    stack="Full Stack"
                    titulo="Atletica-Shop"
                    descricao="Sistema Full Stack desenvolvido para centralizar a venda de produtos e otimizar o gerenciamento de pedidos da Atlética Arthur Chiodi (A.A.A.A.C.H)."
                    tecnologias={[ "TypeScript", "Next.js", "React.js", "Tailwind CSS", "Mercado Pago SDK", "Supabase" ]}
                    github="https://github.com/BrennoGaspar/Atletica-Shop"
                    deploy="https://atletica-shop.vercel.app/"
                    imagePath={atleticashop}
                />

                <Projeto
                    stack="Full Stack"
                    titulo="Home Board"
                    descricao="Sistema Full Stack desenvolvido para solucionar problemas cotidianos e otimizar a organização de tarefas e aumentar a produtividade através de uma interface intuitiva, responsiva e focada na experiência do usuário."
                    tecnologias={[ "TypeScript", "Next.js", "React.js", "Tailwind CSS", "Supabase" ]}
                    github="https://github.com/BrennoGaspar/HomeBoard"
                    deploy="https://home-board-todo.vercel.app/"
                    imagePath={homeboard}
                />

                <Projeto
                    stack="Full Stack"
                    titulo="E-Commerce Application"
                    descricao="Projeto Full Stack com o objetivo de simular uma plataforma completa de e-commerce, incluindo experiência do usuário, gerenciamento de produtos e fluxo de navegação."
                    tecnologias={[ "HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL" ]}
                    github="https://github.com/BrennoGaspar/E-Commerce-Application"
                    imagePath={ecommerce}
                />

            </motion.div>

            <motion.div
                    initial={{ opacity: 0, y: 130 }}
                    whileInView={{ opacity: 1, y: 80 }}
                    transition={{ duration: 1.3 }}
                    className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
            >

                <Projeto
                    stack="Full Stack"
                    titulo="IAKAP - Educa Nóis"
                    descricao="Sistema de gestão educacional desenvolvido para modernizar e simplificar processos escolares da ONG IAKAP através de uma plataforma web intuitiva, centralizada e focada na organização acadêmica."
                    tecnologias={[ "HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL" ]}
                    github="https://github.com/BrennoGaspar/IAKAP-Educa-Nois"
                    imagePath={iakap}
                />

                <Projeto
                    stack="Mobile"
                    titulo="EcoGru"
                    descricao="Aplicação mobile desenvolvida para localizar EcoPontos próximos ao usuário através de geolocalização, incentivando práticas sustentáveis, conscientização ambiental e descarte correto de resíduos."
                    tecnologias={[ "JavaScript", "React Native", "React Native Maps" ]}
                    github="https://github.com/BrennoGaspar/ReactNativeApk__EcoGru"
                    imagePath={ecogru}
                />

                <Projeto
                    stack="Java + JavaFX"
                    titulo="Clash Royale Project"
                    descricao="Aplicação desktop inspirada no Clash Royale desenvolvida em Java utilizando JavaFX, com interface gráfica moderna e interativa para gerenciamento de cartas e decks, incluindo funcionalidades de criação, edição, exclusão e visualização dinâmica."
                    tecnologias={[ "Java", "JavaFX" ]}
                    github="https://github.com/BrennoGaspar/Clash-Royale-Project"
                    imagePath={clashroyale}
                />

            </motion.div>

            <motion.div
                    initial={{ opacity: 0, y: 160 }}
                    whileInView={{ opacity: 1, y: 110 }}
                    transition={{ duration: 1.3 }}
                    className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
            >

                <Projeto
                    stack="2D Game"
                    titulo="Ocean Guardians"
                    descricao="Jogo desenvolvido em C com a biblioteca Raylib como Projeto de Extensão, unindo tecnologia e conscientização ambiental. A aplicação busca sensibilizar a sociedade sobre os impactos da poluição marinha, promovendo práticas sustentáveis alinhadas à ODS 14 — Vida na Água."
                    tecnologias={[ "C", "Raylib" ]}
                    github="https://github.com/BrennoGaspar/OceanGuardians"
                    imagePath={oceanguardians}
                />

                <Projeto
                    stack="Automação"
                    titulo="Monitoramento de Preços"
                    descricao="Sistema desenvolvido em Python para automação e monitoramento de preços de produtos na Kabum, utilizando coleta automatizada de dados para acompanhar variações de valores em tempo real através do console."
                    tecnologias={[ "Python" ]}
                    github="https://github.com/BrennoGaspar/MonitoramentoDePrecos"
                    imagePath={monitoramento}
                />

                <Projeto
                    stack="Java | POO"
                    titulo="Biblioteca em Java"
                    descricao="Aplicação desenvolvida em Java para simular o funcionamento de um sistema de biblioteca, com foco na implementação prática dos pilares da Programação Orientada a Objetos (POO), como encapsulamento, herança, polimorfismo e associação."
                    tecnologias={[ "Java" ]}
                    github="https://github.com/BrennoGaspar/Biblioteca-em-Java"
                    imagePath={biblioteca}
                />
                
            </motion.div>

        </section>

    )

}