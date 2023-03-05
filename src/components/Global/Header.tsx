import * as Dialog from "@radix-ui/react-dialog"
import { Link } from "react-router-dom"

import logoImg from "../../assets/logo.svg"
import { ModalContact } from "../Modals/ModalContact"

export function Header() {
  return (
    <header className="sticky left-0 top-0 py-6 border-b-[1px] backdrop-blur-md backdrop-saturate-[180%] bg-zinc-900/80 border-rifas-border-line z-[9998]">
      <div className="max-w-[1120px] m-auto flex items-center justify-between">
        <Link to="/">
          <img className="h-11" src={logoImg} alt="Rifas Green" />
        </Link>
        <div className="flex items-center gap-10">
          <Link
            to="/"
            className="text-xs uppercase font-bold text-white no-underline relative w-fit before:content-[''] before:absolute before:-bottom-[2px] before:w-0 before:right-0 before:h-[2px] before:transition-all before:bg-violet-500 hover:before:left-0 hover:before:right-0 hover:before:w-full"
          >
            Início
          </Link>
          <Link
            to="/projects"
            className="text-xs uppercase font-bold text-white no-underline relative w-fit before:content-[''] before:absolute before:-bottom-[2px] before:w-0 before:right-0 before:h-[2px] before:transition-all before:bg-violet-500 hover:before:left-0 hover:before:right-0 hover:before:w-full"
          >
            Projetos
          </Link>
          <Link
            to="/about"
            className="text-xs uppercase font-bold text-white no-underline relative w-fit before:content-[''] before:absolute before:-bottom-[2px] before:w-0 before:right-0 before:h-[2px] before:transition-all before:bg-violet-500 hover:before:left-0 hover:before:right-0 hover:before:w-full"
          >
            Sobre mim
          </Link>
          <Dialog.Root>
            <Dialog.Trigger className="rounded-[5px] flex items-center justify-center hover:bg-violet-500 transition-colors uppercase border-[1px] border-violet-500 text-xs text-white px-6 py-3 font-bold">
              Entrar em contato
            </Dialog.Trigger>
            <ModalContact />
          </Dialog.Root>
        </div>
      </div>
    </header>
  )
}
