'use client'

import Image, { StaticImageData } from "next/image"

interface ProjetoProp {
    stack: string;
    titulo: string;
    descricao: string;
    tecnologias: string[];
    github: string;
    deploy?: string;
    imagePath: StaticImageData;
}

export default function Projeto({stack, titulo, descricao, tecnologias, github, deploy, imagePath} : ProjetoProp) {

    return(
        
        <div className="group relative overflow-hidden bg-card/70 border border-border rounded-[2rem] backdrop-blur-xl hover:border-primary transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]">

                {/* Imagem */}
                <div className="relative overflow-hidden">

                    <Image
                        src={imagePath}
                        width={1000}
                        alt="Foto Projeto"
                        className="w-full h-[260px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />

                    {/* Badge */}
                    <span className="absolute top-5 left-5 bg-primary/90 text-white text-xs font-medium px-4 py-2 rounded-full backdrop-blur-md">
                        {stack}
                    </span>

                </div>

                {/* Conteúdo */}
                <div className="p-8 space-y-6">

                    <div className="space-y-4">

                        <h1 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                            {titulo}
                        </h1>

                        <p className="text-muted leading-relaxed text-lg">
                            {descricao}
                        </p>

                    </div>

                    {/* Tecnologias */}
                    <div className="flex flex-wrap gap-3">

                        {tecnologias.map((tech) => (

                            <span
                                key={tech}
                                className="bg-background border border-border px-4 py-2 rounded-xl text-sm text-foreground"
                            >
                                {tech}
                            </span>

                        ))}

                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">

                        <span className="text-sm text-primary font-medium">
                            Projeto Acadêmico
                        </span>

                        <div className="flex items-center gap-6">

                            <a href={github} className="flex items-center gap-2 text-muted hover:text-foreground transition-all duration-300 hover:-translate-y-0.5">
                                GitHub
                            </a>

                            {deploy != null ? 
                                <a href={deploy} className="flex items-center gap-2 text-foreground hover:text-primary transition-all duration-300 group">
                                    Deploy
                                    <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                    ↗
                                    </span>
                                </a> : ''
                            }

                        </div>

                    </div>

                </div>

            </div>

    )

}