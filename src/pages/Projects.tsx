import { Faders, ArrowUp, ArrowDown } from "phosphor-react"

import { Card } from "../components/Card"
import { Header } from "../components/Global/Header"
import { Footer } from "../components/Global/Footer"

export function Projects() {
  return (
    <>
      <Header />
      <section className="max-w-[1120px] m-auto items-center justify-center my-20">
        <header className="flex items-center justify-between">
          <div className="flex flex-col items-start justify-start w-fit">
            <h1 className="text-white font-bold text-4xl">Meus projetos</h1>
            <div className="mt-3 w-[50%] h-[1.5px] bg-gradient-to-r from-violet-500 to-transparent" />
          </div>
          <div className="bg-zinc-800/80 px-4 py-3 rounded-lg flex items-center justify-center gap-3 border border-rifas-border-line">
            <button className="bg-zinc-900 border border-rifas-border-line p-2 rounded-lg hover:bg-violet-500 transition-all">
              <ArrowUp size={18} color="#fff" />
            </button>
            <button className="bg-zinc-900 border border-rifas-border-line p-2 rounded-lg hover:bg-violet-500 transition-all">
              <ArrowDown size={18} color="#fff" />
            </button>
            <button className="bg-zinc-900 border border-rifas-border-line p-2 rounded-lg hover:bg-violet-500 transition-all">
              <Faders size={18} color="#fff" />
            </button>
          </div>
        </header>
        <main className="mt-10 grid grid-cols-4 gap-4">
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
        </main>
      </section>
      <Footer />
    </>
  )
}
