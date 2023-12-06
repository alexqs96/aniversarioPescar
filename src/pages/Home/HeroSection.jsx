import { Link } from "react-router-dom";
import { Suspense, lazy } from "react";

const SwiperHero = lazy(() => import("./SwiperHero"))

export default function HeroSection(){
  return (
    <section className="grid grid-cols-1 xl:grid-cols-2 py-10 gap-20 xl:gap-5 items-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl md:text-6xl font-semibold -tracking-wide">¡Fundación Pescar cumple 20 Años! <span className="text-5xl">🥳</span></h1>
        <h2 className="text-xl md:text-2xl font-medium xl:max-w-[85%]">Conoce mas sobre la fundación en esta pagina hecha 💯 por alumnos de Fundación Pescar</h2>

        <Link
          to="/alumnos"
          className="mt-2 button button-pescar text-white block font-semibold py-1.5 px-3.5 rounded-xl w-fit text-lg"
          aria-label="Conocelos Acá"
        >
          Conocelos Acá
        </Link>
      </div>
      
      <Suspense fallback={
        <div className="w-full h-[332px] bg-gray-100 animate-pulse rounded-2xl"></div>
      }>
        <SwiperHero />
      </Suspense>      
    </section>
  )
}