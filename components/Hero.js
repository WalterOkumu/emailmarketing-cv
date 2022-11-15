import Image from "next/image";
import ContactForm from "./ContactForm";
import heroImage from '/public/black-friday.png'

export default function Hero() {

    //const heroImage = '/black-friday.png';

    return(
        <div className="mx-auto max-w-6xl">
            <div className="flex md:flex-row flex-col-reverse gap-4 md:gap-18 md:mt-20 text-[#f8f8ff] items-center">
                <div className="md:w-1/2 w-full items-center pb-10 md:pb-0">
                    <h3 className="text-3xl md:pl-10 md:text-4xl mb-8 md:w-[100%] font-bold md:text-left text-center">
                        Preencha os campos abaixo para obter a informação desejada gratuitamente.
                    </h3>
                <ContactForm />
                </div>
                <div className="md:w-1/2 w-full self-center">
                    {/*<h1 className="text-5xl font-bold bg-[#FBED04] md:inline-block p-2 rounded-md text-[#070707]">E-mail Marketing</h1>
                    <h2 className="text-4xl md:text-left italic font-light pt-3">Faça o seu negócio chegar a <span className="font-bold">mais de 4000 clientes</span> com um único email!</h2>
                    <div className="pt-8">
                        <p className="leading-relaxed text-justify">
                            O marketing por email é o uso do email para promover
                            produtos ou serviços. Mas não se limita apenas a isso.
                            Você pode usar o marketing por e-mail para desenvolver
                            relações com os clientes atuais e / ou para chegar a
                            clientes em potencial. O marketing por email permite que
                            as empresas mantenham seus clientes informados e
                            personalizem as suas mensagens de marketing. Veja nisso
                            como uma das formas de marketing digital mais
                            económicas e ricas em conversões da atualidade.
                        </p>
                </div>*/}
                <Image src={heroImage} width={30} height={30} alt="Black Friday" layout="responsive"/>
                </div>
            </div>
        </div>
    );
}