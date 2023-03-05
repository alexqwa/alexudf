import { Link } from "react-router-dom"
import { ArrowRight } from "phosphor-react"

import avatarImg from "../assets/avatar.jpg"

import { Header } from "../components/Global/Header"
import { Footer } from "../components/Global/Footer"

export function Home() {
  return (
    <>
      <Header />

      <main className="max-w-[1120px] m-auto flex flex-col items-center justify-center">
        <section className="w-full flex items-start justify-center pt-20 gap-16">
          <div className="max-w-[540px] flex flex-col gap-4">
            <h1 className="text-white font-extrabold text-4xl">
              Olá, eu sou Alexandre
            </h1>
            <p className="text-white/80 font-light text-base">
              um profissional apaixonado por criar soluções criativas e
              impactantes, buscando sempre a excelência em cada projeto que me
              envolvo.
            </p>
            <Link
              to="/projects"
              className="rounded-[5px] w-fit flex items-center gap-2 hover:bg-violet-500 transition-colors uppercase border-[1px] border-violet-500 text-xs text-white px-6 py-3 font-bold"
            >
              Acesse meus projetos
              <ArrowRight size={20} color="#fff" />
            </Link>
          </div>
          <img className="w-80 rounded-3xl" src={avatarImg} alt="" />
        </section>
        <div className="mt-20 w-[1.5px] h-20 bg-gradient-to-b from-violet-500 to-zinc-900" />
        <section className="pt-10">
          <h1 className="text-white font-extrabold text-5xl text-center">
            Veja alguns dos projetos que
            <br />
            foram desenvolvidos
          </h1>
          <div className="flex gap-4 mt-8">
            <div className="bg-zinc-900 border border-rifas-border-line w-52 h-52 rounded-2xl flex items-center justify-center text-white uppercase font-bold">
              1
            </div>
            <div className="bg-zinc-900 border border-rifas-border-line w-52 h-52 rounded-2xl flex items-center justify-center text-white uppercase font-bold">
              2
            </div>
            <div className="bg-zinc-900 border border-rifas-border-line w-52 h-52 rounded-2xl flex items-center justify-center text-white uppercase font-bold">
              3
            </div>
            <div className="bg-zinc-900 border border-rifas-border-line w-52 h-52 rounded-2xl flex items-center justify-center text-white uppercase font-bold">
              4
            </div>
            <div className="bg-zinc-900 border border-rifas-border-line w-52 h-52 rounded-2xl flex items-center justify-center text-white uppercase font-bold">
              5
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
