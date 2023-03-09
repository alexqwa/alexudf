import { Link } from "react-router-dom"
import { ArrowRight } from "phosphor-react"

import avatarImg from "../assets/avatar.jpg"

import { Title } from "../components/Global/Title"
import { Header } from "../components/Global/Header"
import { Footer } from "../components/Global/Footer"
import { Abilities } from "../components/Abilities"
import { Carousel } from "../components/Carousel"

export function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center">
        <section className="w-full flex items-start justify-center mt-20 gap-16">
          <div className="max-w-[540px] flex flex-col gap-4">
            <Title title="Olá, eu sou o Alexandre" />
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
        <Abilities />
        <Carousel />
        <section className="max-w-[1120px] w-full m-auto flex flex-col items-start justify-center mb-20">
          <Title title="Formação acadêmica" />
          <p className="font-light text-white/80 text-sm mt-4 mb-4">
            Trajetória completa da minha formação
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
