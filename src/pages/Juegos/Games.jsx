import { Link } from "react-router-dom";

export default function Games(){
  return (
    <section className="">
    <h1 className="text-3xl font-semibold max-w-[20ch]">Juga a nuestros juegos creados por nuestros alumnos 🕹️</h1>
    <div className="flex items-center gap-2 my-4">
      <Link
        to="memotest"
        className="block font-semibold py-1.5 px-3 button button-pescar text-white rounded-lg w-fit"
        aria-label="Conocelos Acá"
      >
      Jugar al Memo Test
      </Link>
      
      <Link
        to="trivia"
        className="block font-semibold py-1.5 px-3 button button-pescar text-white rounded-lg w-fit"
        aria-label="Conocelos Acá"
      >
      Jugar a la Trivia
      </Link>
    </div>
    </section>
  )
}