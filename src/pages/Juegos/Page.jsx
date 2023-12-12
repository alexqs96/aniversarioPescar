import { Link } from "react-router-dom";

export default function Games(){
  return (
    <section className="flex flex-col h-[40dvh] items-center justify-center my-20 gap-5 bg_grad">
    <h1 className="-tracking-wide text-4xl sm:text-6xl font-bold mx-auto max-w-[95%] lg:max-w-[70%] text-center ">Juga a los juegos creados por nuestros alumnos 🕹️</h1>
    <div className="flex items-center gap-5 my-4 mx-auto sm:text-xl">
      <Link
        to="memotest"
        className="block font-semibold py-1.5 px-3 button button-pescar text-white rounded-lg w-fit"
        aria-label="Conocelos Acá"
      >
      Memo Test
      </Link>
      
      <Link
        to="trivia"
        className="block font-semibold py-1.5 px-3 button button-pescar text-white rounded-lg w-fit"
        aria-label="Conocelos Acá"
      >
      Trivia Pescar
      </Link>
    </div>
    </section>
  )
}