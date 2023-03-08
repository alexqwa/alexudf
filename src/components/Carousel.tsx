import { CaretLeft, CaretRight } from "phosphor-react"

import { Card } from "./Card"
import { Title } from "./Global/Title"

export function Carousel() {
  return (
    <section className="w-full bg-zinc-800/50 border-y border-rifas-border-line my-20 pt-10 pb-6 flex flex-col items-center justify-center">
      <div className="max-w-[1120px] w-full m-auto flex flex-col items-start">
        <Title title="Projetos recentes" />
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
  )
}
