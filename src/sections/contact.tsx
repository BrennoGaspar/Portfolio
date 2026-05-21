'use client'

import { motion } from "framer-motion"
import { Mail, MapPin, Send } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Contato() {

    return (

        <section id="contato" className="relative min-h-screen overflow-hidden px-6 py-32">

            {/* Glow */}
            <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-primary opacity-10 blur-[140px] rounded-full" />

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start relative z-10">

                {/* Informações */}
                <motion.div
                    initial={{ opacity: 0, x: -50, y: 30 }}
                    whileInView={{ opacity: 1, x: 0, y: 50 }}
                    transition={{ duration: 1 }}
                    className="space-y-10"
                >

                    {/* Header */}
                    <div className="space-y-6">

                        <span className="text-primary font-medium tracking-[0.3em] uppercase text-sm">Contato</span>

                        <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">Vamos conversar?</h1>

                        <p className="text-lg text-muted leading-relaxed max-w-xl">
                            Estou disponível para oportunidades, projetos freelance e novas experiências na área de tecnologia.
                        </p>

                    </div>

                    {/* Informações */}
                    <div className="space-y-5">

                        <a
                            href="mailto:brennogasparpinto@gmail.com"
                            className="group flex items-center gap-5 bg-card/60 border border-border rounded-2xl p-5 backdrop-blur-xl hover:border-primary transition-all duration-300"
                        >

                            <div className="bg-primary/10 p-4 rounded-2xl">
                                <Mail className="text-primary" size={24} />
                            </div>

                            <div>
                                <h3 className="text-foreground font-semibold">Gmail</h3>
                                <p className="text-muted">brennogasparpinto@gmail.com</p>
                            </div>

                        </a>

                        <a
                            href="https://www.linkedin.com/in/brennogasparpinto"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-5 bg-card/60 border border-border rounded-2xl p-5 backdrop-blur-xl hover:border-primary transition-all duration-300"
                        >

                            <div className="bg-primary/10 p-4 rounded-2xl">
                                <FaLinkedin size={24} />
                            </div>

                            <div>
                                <h3 className="text-foreground font-semibold">LinkedIn</h3>

                                <p className="text-muted">linkedin.com/in/brennogasparpinto</p>
                            </div>

                        </a>

                        <a
                            href="https://github.com/BrennoGaspar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-5 bg-card/60 border border-border rounded-2xl p-5 backdrop-blur-xl hover:border-primary transition-all duration-300"
                        >

                            <div className="bg-primary/10 p-4 rounded-2xl">
                                <FaGithub size={24} />
                            </div>

                            <div>
                                <h3 className="text-foreground font-semibold">GitHub</h3>

                                <p className="text-muted">github.com/BrennoGaspar</p>
                            </div>

                        </a>

                    </div>

                    {/* Extra */}
                    <div className="flex flex-wrap gap-6 pt-4 text-muted">

                        <div className="flex items-center gap-2">
                            <MapPin size={18} />
                            São Paulo, Brasil
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            Disponível para oportunidades
                        </div>

                    </div>

                </motion.div>

                {/* Formulário */}
                <motion.div
                    initial={{ opacity: 0, x: 50, y: 30 }}
                    whileInView={{ opacity: 1, x: 0, y: 100 }}
                    transition={{ duration: 1 }}
                    className="bg-card/60 border border-border rounded-[2rem] p-8 backdrop-blur-xl"
                >

                    <form
                        action="https://formsubmit.co/837e0b5a77ab376387d8cb977baab778"
                        method="POST"
                        className="space-y-6"
                    >

                        {/* Anti Spam */}
                        <input type="hidden" name="_captcha" value="false" />

                        <div className="space-y-2">

                            <label className="text-foreground font-medium">Nome</label>

                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="Seu nome"
                                className="w-full bg-background border border-border rounded-2xl px-5 py-4 text-foreground outline-none focus:border-primary transition-colors duration-300"
                            />

                        </div>

                        <div className="space-y-2">

                            <label className="text-foreground font-medium">Email</label>

                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="seuemail@email.com"
                                className="w-full bg-background border border-border rounded-2xl px-5 py-4 text-foreground outline-none focus:border-primary transition-colors duration-300"
                            />

                        </div>

                        <div className="space-y-2">

                            <label className="text-foreground font-medium">Mensagem</label>

                            <textarea
                                name="message"
                                required
                                rows={6}
                                placeholder="Digite sua mensagem..."
                                className="w-full resize-none bg-background border border-border rounded-2xl px-5 py-4 text-foreground outline-none focus:border-primary transition-colors duration-300"
                            />

                        </div>

                        <button type="submit" className="w-full bg-primary hover:bg-hover text-white px-8 py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3">
                            Enviar mensagem
                            <Send size={18} />
                        </button>

                    </form>

                </motion.div>

            </div>

        </section>

    )

}