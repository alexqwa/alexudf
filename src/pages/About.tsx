import { Footer } from "../components/Global/Footer"
import { Header } from "../components/Global/Header"

export function About() {
  return (
    <>
      <Header />
      <main className="max-w-[1120px] m-auto my-20">
        <div className="flex flex-col items-start justify-start w-fit">
          <h1 className="text-white font-bold text-4xl">Sobre mim</h1>
          <div className="mt-3 w-[50%] h-[1.5px] bg-gradient-to-r from-violet-500 to-transparent" />
        </div>
        <div>
          <h2 className="text-white/70 font-normal mt-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus assumenda eligendi iusto recusandae ex corporis, odit
            quibusdam totam dignissimos in esse, ab necessitatibus iste modi a
            fugiat natus. Quod, eum! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Natus ipsa et unde aut quis consectetur, officiis
            accusantium asperiores minus reiciendis aliquam eligendi corrupti
            modi, exercitationem enim itaque nam error aliquid? Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Dignissimos a, harum
            itaque assumenda id unde aut. Alias ea, reprehenderit nobis, tenetur
            incidunt assumenda itaque placeat odit, magnam omnis nemo laborum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus incidunt nam natus cum error voluptas provident iusto
            blanditiis corporis, qui sequi expedita dolorem quaerat dolor atque
            tempora obcaecati at distinctio.
          </h2>
        </div>
      </main>
    </>
  )
}
