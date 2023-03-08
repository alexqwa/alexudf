import {
  Code,
  FileCode,
  Globe,
  Package,
  PaintBrushBroad,
  Shield,
} from "phosphor-react"

export function Abilities() {
  return (
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
            Tenho conhecimento avançado em Inglês e intermediário em Espanhol.
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
            Uso diversas línguagens como: ReactJS, React Native, JavaScript, C#
            e MySQL.
          </p>
        </div>
      </div>
    </section>
  )
}
