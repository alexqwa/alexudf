import { Link } from "react-router-dom"
import {
  ArrowRight,
  Code,
  FileCode,
  Globe,
  Package,
  PaintBrushBroad,
  Shield,
  CaretLeft,
  CaretRight,
} from "phosphor-react"

import avatarImg from "../assets/avatar.jpg"

import { Header } from "../components/Global/Header"
import { Footer } from "../components/Global/Footer"
import { Card } from "../components/Card"

export function Home() {
  return (
    <>
      <Header />

      <main className="flex flex-col items-center justify-center">
        <section className="w-full flex items-start justify-center pt-20 gap-16">
          <div className="max-w-[540px] flex flex-col gap-4">
            <h1 className="text-white font-extrabold text-4xl">
              Olá, eu sou Alexandre
            </h1>
            <p className="text-white/80 font-light text-base">
              Um profissional apaixonado por criar soluções criativas e
              impactantes, buscando sempre a excelência em cada projeto que me
              envolvo.
            </p>
            <Link
              to="/projects"
              className="rounded-md bg-violet-500 w-fit px-6 py-3 flex items-center justify-between gap-6 hover:bg-violet-600 transition-all group"
            >
              <span className="text-white font-bold text-xs uppercase">
                Acesse meus projetos
              </span>
              <div className="bg-violet-600 p-3 rounded-md group-hover:translate-x-3 transition-all">
                <ArrowRight size={20} color="#fff" />
              </div>
            </Link>
          </div>
          <img className="w-80 rounded-3xl" src={avatarImg} alt="" />
        </section>
        <div className="mt-20 w-[1.5px] h-20 bg-gradient-to-b from-violet-500 to-zinc-900" />
        <section className="max-w-[1120px] m-auto mt-10 flex flex-col items-center justify-center">
          <h1 className="text-white font-extrabold text-5xl text-center">
            Porque me escolher para o seu time?
          </h1>
          <div className="grid grid-cols-3 mt-14">
            <div className="border-b border-r border-rifas-border-line pb-[52px] pr-[52px] gap-[6px] flex flex-col justify-center">
              <div className="relative mb-4 bg-violet-500 border border-violet-300 w-[75px] h-[75px] mt-2 rounded-2xl flex items-center justify-center before:content-[''] before:absolute before:bottom-2 before:left-2 before:border before:border-violet-300 before:rounded-2xl before:w-[75px] before:h-[75px]">
                <Globe size={28} color="#fff" />
              </div>
              <h1 className="text-white font-medium text-xl">Idiomas</h1>
              <p className="text-white/80 font-light leading-6">
                Tenho conhecimento avançado em Inglês e intermediário em
                Espanhol.
              </p>
            </div>
            <div className="border-b border-r border-rifas-border-line pb-[52px] pl-[52px] pr-[52px] gap-[6px] flex flex-col justify-center">
              <div className="relative mb-4 bg-violet-500 border border-violet-300 w-[75px] h-[75px] mt-2 rounded-2xl flex items-center justify-center before:content-[''] before:absolute before:bottom-2 before:left-2 before:border before:border-violet-300 before:rounded-2xl before:w-[75px] before:h-[75px]">
                <PaintBrushBroad size={28} color="#fff" />
              </div>
              <h1 className="text-white font-medium text-xl">Aparência</h1>
              <p className="text-white/80 font-light leading-6">
                Utilizo as melhores ferramentas para estilização de páginas web.
              </p>
            </div>
            <div className="border-b border-rifas-border-line pb-[52px] pl-[52px] pr-[52px] gap-[6px] flex flex-col justify-center">
              <div className="relative mb-4 bg-violet-500 border border-violet-300 w-[75px] h-[75px] mt-2 rounded-2xl flex items-center justify-center before:content-[''] before:absolute before:bottom-2 before:left-2 before:border before:border-violet-300 before:rounded-2xl before:w-[75px] before:h-[75px]">
                <Code size={28} color="#fff" />
              </div>
              <h1 className="text-white font-medium text-xl">Código</h1>
              <p className="text-white/80 font-light leading-6">
                Projetos 100% automatizados e de código limpo para fácil
                entendimento.
              </p>
            </div>
            <div className="border-r border-rifas-border-line pt-[52px] pr-[52px] pb-[52px] gap-[6px] flex flex-col justify-center">
              <div className="relative mb-4 bg-violet-500 border border-violet-300 w-[75px] h-[75px] mt-2 rounded-2xl flex items-center justify-center before:content-[''] before:absolute before:bottom-2 before:left-2 before:border before:border-violet-300 before:rounded-2xl before:w-[75px] before:h-[75px]">
                <Shield size={28} color="#fff" />
              </div>
              <h1 className="text-white font-medium text-xl">Segurança</h1>
              <p className="text-white/80 font-light leading-6">
                Desenvolvo aplicações de alto nível e com códigos altamente
                criptografados.
              </p>
            </div>
            <div className="border-r border-rifas-border-line p-[52px] gap-[6px] flex flex-col justify-center">
              <div className="relative mb-4 bg-violet-500 border border-violet-300 w-[75px] h-[75px] mt-2 rounded-2xl flex items-center justify-center before:content-[''] before:absolute before:bottom-2 before:left-2 before:border before:border-violet-300 before:rounded-2xl before:w-[75px] before:h-[75px]">
                <Package size={28} color="#fff" />
              </div>
              <h1 className="text-white font-medium text-xl">Entrega</h1>
              <p className="text-white/80 font-light leading-6">
                Construo as aplicações com velocidade e praticidade.
              </p>
            </div>
            <div className="p-[52px] gap-[6px] flex flex-col justify-center">
              <div className="relative mb-4 bg-violet-500 border border-violet-300 w-[75px] h-[75px] mt-2 rounded-2xl flex items-center justify-center before:content-[''] before:absolute before:bottom-2 before:left-2 before:border before:border-violet-300 before:rounded-2xl before:w-[75px] before:h-[75px]">
                <FileCode size={28} color="#fff" />
              </div>
              <h1 className="text-white font-medium text-xl">Linguagens</h1>
              <p className="text-white/80 font-light leading-6">
                Uso diversas línguagens como: ReactJS, React Native, JavaScript,
                C# e MySQL.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full bg-zinc-800/50 border-y border-rifas-border-line mt-20 pt-10 pb-6 flex flex-col items-center justify-center">
          <div className="max-w-[1120px] w-full m-auto flex flex-col items-start">
            <div className="flex flex-col items-start justify-start">
              <h1 className="text-white font-bold text-3xl">
                Projetos recentes
              </h1>
              <div className="mt-3 w-[50%] h-[1.5px] bg-gradient-to-r from-violet-500 to-transparent" />
            </div>
            <div className="grid grid-cols-4 gap-4 mt-8 relative mb-8">
              <button className="p-4 bg-zinc-800/80 hover:bg-zinc-800 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-rifas-border-line rounded-full w-fit h-fit absolute shadow-md shadow-black/30 transition-all">
                <CaretLeft size={24} color="#fff" />
              </button>
              <Card
                url="https://blog.rocketseat.com.br/content/images/2019/03/React-Hooks-Comoutilizar--motivac-o-es-eexemplos-pra-ticos.png"
                title="Projeto: Rifas Green"
                subtitle="Site feito para sorteio e venda de rifas."
              />
              <Card
                url="https://blog.rocketseat.com.br/content/images/2019/03/React-Hooks-Comoutilizar--motivac-o-es-eexemplos-pra-ticos.png"
                title="Projeto: Rifas Green"
                subtitle="Site feito para sorteio e venda de rifas."
              />
              <Card
                url="https://blog.rocketseat.com.br/content/images/2019/03/React-Hooks-Comoutilizar--motivac-o-es-eexemplos-pra-ticos.png"
                title="Projeto: Rifas Green"
                subtitle="Site feito para sorteio e venda de rifas."
              />
              <Card
                url="https://blog.rocketseat.com.br/content/images/2019/03/React-Hooks-Comoutilizar--motivac-o-es-eexemplos-pra-ticos.png"
                title="Projeto: Rifas Green"
                subtitle="Site feito para sorteio e venda de rifas."
              />
              <button className="p-4 bg-zinc-800/80 hover:bg-zinc-800 top-1/2 right-0 translate-x-1/2 -translate-y-1/2 border border-rifas-border-line rounded-full w-fit h-fit absolute shadow-md shadow-black/30 transition-all">
                <CaretRight size={24} color="#fff" />
              </button>
            </div>
            <div className="flex items-center justify-center gap-3 self-center">
              <div className="w-2 h-2 bg-slate-400 border border-slate-200 rounded-full" />
              <div className="w-2 h-2 bg-zinc-800/50 border border-rifas-border-line rounded-full" />
              <div className="w-2 h-2 bg-zinc-800/50 border border-rifas-border-line rounded-full" />
              <div className="w-2 h-2 bg-zinc-800/50 border border-rifas-border-line rounded-full" />
            </div>
          </div>
        </section>
        <section className="max-w-[1120px] w-full m-auto flex flex-col items-start justify-center mt-10">
          <h1 className="text-white font-bold text-3xl">Formação</h1>
          <p className="font-light text-white/80 text-sm mt-2 mb-4">
            Aqui está toda a trajetória da minha formação.
          </p>
          <div className="bg-violet-500 w-[4px] h-[200px] rounded-full relative mt-6">
            <div className="space-y-12 w-full">
              <div className="flex items-center justify-center relative ">
                <div className="absolute -translate-x-1/2 left-1/2 w-4 h-4 rounded-full bg-violet-500 border border-violet-300 flex items-center" />
                <span className="text-white font-bold text-xs uppercase absolute left-6">
                  UDF
                </span>
              </div>
              <div className="flex items-center justify-center relative">
                <div className="absolute -translate-x-1/2 left-1/2 w-4 h-4 rounded-full bg-violet-500 border border-violet-300 flex items-center" />
                <span className="text-white font-bold text-xs uppercase absolute left-6">
                  UDF
                </span>
              </div>
              <div className="flex items-center justify-center relative">
                <div className="absolute -translate-x-1/2 left-1/2 w-4 h-4 rounded-full bg-violet-500 border border-violet-300 flex items-center" />
                <span className="text-white font-bold text-xs uppercase absolute left-6">
                  UDF
                </span>
              </div>
              <div className="flex items-center justify-center relative">
                <div className="absolute -translate-x-1/2 left-1/2 w-4 h-4 rounded-full bg-violet-500 border border-violet-300 flex items-center" />
                <span className="text-white font-bold text-xs uppercase absolute left-6">
                  UDF
                </span>
              </div>
              <div className="flex items-center justify-center relative">
                <div className="absolute -translate-x-1/2 left-1/2 w-4 h-4 rounded-full bg-violet-500 border border-violet-300 flex items-center" />
                <span className="text-white font-bold text-xs uppercase absolute left-6">
                  UDF
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
