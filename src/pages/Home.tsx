import { Link } from "react-router-dom"
import { ArrowRight } from "phosphor-react"

import logoImg from "../assets/logo.svg"
import avatarImg from "../assets/avatar.jpg"

export function Home() {
  return (
    <>
      <header className="sticky left-0 top-0 py-6 border-b-[1px] backdrop-blur-md backdrop-saturate-[180%] bg-zinc-900/80 border-rifas-border-line z-[9998]">
        <div className="max-w-[1120px] m-auto flex items-center justify-between">
          <Link to="/">
            <img className="h-11" src={logoImg} alt="Rifas Green" />
          </Link>
          <div className="flex items-center gap-10">
            <Link
              to="/signin"
              className="text-xs uppercase font-bold text-white no-underline relative w-fit before:content-[''] before:absolute before:-bottom-[2px] before:w-0 before:right-0 before:h-[2px] before:transition-all before:bg-violet-500 hover:before:left-0 hover:before:right-0 hover:before:w-full"
            >
              Início
            </Link>
            <Link
              to="/signin"
              className="text-xs uppercase font-bold text-white no-underline relative w-fit before:content-[''] before:absolute before:-bottom-[2px] before:w-0 before:right-0 before:h-[2px] before:transition-all before:bg-violet-500 hover:before:left-0 hover:before:right-0 hover:before:w-full"
            >
              Projetos
            </Link>
            <Link
              to="/signin"
              className="text-xs uppercase font-bold text-white no-underline relative w-fit before:content-[''] before:absolute before:-bottom-[2px] before:w-0 before:right-0 before:h-[2px] before:transition-all before:bg-violet-500 hover:before:left-0 hover:before:right-0 hover:before:w-full"
            >
              Sobre mim
            </Link>
            <button className="rounded-[5px] flex items-center hover:bg-violet-500 transition-colors uppercase border-[1px] border-violet-500 text-xs text-white px-6 py-3 font-bold">
              Entrar em contato
            </button>
          </div>
        </div>
      </header>

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
            <button className="rounded-[5px] w-fit flex items-center gap-2 hover:bg-violet-500 transition-colors uppercase border-[1px] border-violet-500 text-xs text-white px-6 py-3 font-bold">
              Acesse meus projetos
              <ArrowRight size={20} color="#fff" />
            </button>
          </div>
          <img className="w-80 rounded-3xl" src={avatarImg} alt="" />
        </section>
        <section className="pt-20">
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
      <footer>
        <h1>footer</h1>
      </footer>
    </>
  )
}
