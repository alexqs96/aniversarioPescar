import { Suspense, lazy } from "react";
import HeroSection from "./HeroSection";

const Carousel = lazy(() => import("./Carousel"))

export default function Home() {
  return (
    <>
    <HeroSection />
    <Suspense fallback={
      <div className="w-full h-[156px] bg-gray-100 animate-pulse rounded-2xl"></div>
    }>
      <Carousel />
    </Suspense>
    </>
  )
}
