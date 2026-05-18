import foto from "@/assets/images/foto.jpg"
import Image from "next/image"

export default function Hero () {

    return(
        <div className="pt-50 flex items-center justify-center text-center">
            {/* Breve descrição e tecnologias */}
            <div>
                <h1 className="p-6">Olá, seja bem-vindo!</h1>
                <p className="max-w-100 text-justify p-6">Me chamo Brenno Gaspar Pinto, tenho 19 anos e atualmente estou cursando o 3° período de Ciência da Computação no Instituto Federal de São Paulo (IFSP), campus São João da Boa Vista e tenho certificado técnico pelo Colégio ENIAC em Tecnologia da Informação. Estou na área há 5 anos e sou completamente apaixonado e movido por programação, desafios e inovação.</p>
            </div>

            {/* Foto */}
            <div> 
                <Image src={foto} alt="Foto Pessoal" width={500}/>
            </div>
        </div>
    )

}