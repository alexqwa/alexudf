import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className="py-6 border-t bg-zinc-800/50 border-rifas-border-line z-[9998]">
      <div className="max-w-[1120px] m-auto items-center justify-between flex">
        <h1 className="text-white/80 text-sm">
          Feito por{" "}
          <Link
            to="https://www.instagram.com/alexandree.qwa/"
            className="no-underline relative w-fit before:content-[''] before:absolute before:-bottom-[2px] before:w-0 before:right-0 before:h-[2px] before:transition-all before:bg-violet-500 hover:before:left-0 hover:before:right-0 hover:before:w-full hover:text-white transition-all"
          >
            Alexandre Ferreira
          </Link>
          . 💚
        </h1>
        <h1 className="text-white/80 text-sm">
          Site desenvolvido para fins estudantis - UDF
        </h1>
      </div>
    </footer>
  )
}
