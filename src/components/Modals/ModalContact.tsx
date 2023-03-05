import { FormEvent, useState } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { StyledContent, StyledOverlay } from "../../stitches/stitchesModal"
import { X } from "phosphor-react"

export function ModalContact() {
  const [message, setMessage] = useState("")

  function handleSendMessage(event: FormEvent) {
    event.preventDefault()

    if (!message) {
      alert("Você não digitou nenhuma mensagem!")
    } else {
      alert("Mensagem enviada com sucesso!")
    }

    setMessage("")
  }

  return (
    <Dialog.Portal>
      <StyledOverlay className="z-[9999] bg-black/60 inset-0 fixed" />
      <StyledContent className="z-[9999] fixed py-8 px-10 bg-zinc-800 border border-rifas-border-line w-[480px] rounded-lg shadow-black/25 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex items-center justify-between">
          <Dialog.Title className="text-2xl font-bold text-white">
            Entrar em contato
          </Dialog.Title>
          <Dialog.Close className="hover:brightness-75 transition-all">
            <X size={24} color="#fff" />
          </Dialog.Close>
        </div>
        <form
          onSubmit={handleSendMessage}
          className="w-full flex flex-col mt-8"
        >
          <textarea
            className="text-white text-sm bg-zinc-900 rounded-lg p-4 placeholder:text-sm outline-none border-2 border-transparent focus:border-violet-500 transition-all min-h-[80px]"
            placeholder="Digite sua mensagem"
            onChange={(event) => setMessage(event.target.value)}
            value={message}
            required
          />
          <button
            type="submit"
            className="bg-green-500 rounded-lg p-4 text-white uppercase text-xs font-bold mt-4 hover:bg-green-600 transition-all outline-none"
          >
            Enviar mensagem
          </button>
        </form>
      </StyledContent>
    </Dialog.Portal>
  )
}
