import { Link } from "react-router-dom"

interface CardProps {
  url: string
  title: string
  subtitle: string
}

export function Card({ url, title, subtitle }: CardProps) {
  return (
    <div className="overflow-hidden bg-zinc-800 border border-rifas-border-line rounded-2xl flex flex-col items-center justify-between">
      <img src={url} alt={url} />

      <footer className="max-w-[80%] w-full my-6">
        <h1 className="text-white text-base">{title}</h1>
        <p className="text-white/80 text-xs mb-4">{subtitle}</p>
        <Link
          to="/projects/daoidawdi"
          className="w-full rounded-[5px] flex items-center justify-center hover:bg-violet-500 transition-colors uppercase border-[1px] border-violet-500 text-xs text-white px-6 py-3 font-bold"
        >
          Visualizar projeto
        </Link>
      </footer>
    </div>
  )
}
