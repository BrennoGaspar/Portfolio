interface CardProps {
    data: string;
    tipo: string;
    instituicao: string;
    texto: string;
}

export default function Card({data, tipo, instituicao, texto}: CardProps) {

    return (

        <div className="bg-card/70 border border-border rounded-3xl p-8 backdrop-blur-xl hover:border-primary transition-all duration-300">
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <span className="text-primary font-semibold">{data}</span>
                    {
                        tipo == "Cursando" ? 
                            <span className="text-sm bg-green-500/10 text-green-400 px-3 py-1 rounded-full">{tipo}</span>  
                        : 
                            <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">{tipo}</span>
                    }
                </div>
                <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">{instituicao}</h3>
                    <p className="text-muted leading-relaxed">{texto}</p>
                </div>
            </div>
        </div>

    )

}