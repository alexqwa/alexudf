import { Link } from "react-router-dom"

interface CardProps {
  url: string
  title: string
  subtitle: string
}

export function Card({ url, title, subtitle }: CardProps) {
  return (
    <div className="overflow-hidden bg-zinc-800 border border-rifas-border-line rounded-2xl">
      <img
        src="https://blog.rocketseat.com.br/content/images/2019/03/React-Hooks-Comoutilizar--motivac-o-es-eexemplos-pra-ticos.png"
        alt={title}
      />

      <footer className="max-w-[80%] w-full my-6 flex flex-1 flex-col items-start justify-between m-auto">
        <h1 className="text-white/80 font-normal text-base">
          Projeto: {title}
        </h1>
        <p className="text-slate-400 text-xs font-light mb-4">{subtitle}</p>
        <Link
          to={url}
          className="w-full rounded-[5px] flex items-center justify-center hover:bg-violet-500 transition-colors uppercase border-[1px] border-violet-500 text-xs text-white px-6 py-3 font-bold"
        >
          Visualizar projeto
        </Link>
      </footer>
    </div>
  )
}
