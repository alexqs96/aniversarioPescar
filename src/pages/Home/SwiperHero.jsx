import 'swiper/css';
import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { pescarHeroImages } from '../../consts';

export default function SwiperHero() {
  return (
    <>
      <div className=" relative h-fit w-full sm:max-w-[80%] xl:max-w-full xl:w-full mx-auto max-md:text-sm">
        <Swiper
          spaceBetween={25}
          effect={'fade'}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".image-swiper-button-next",
            prevEl: ".image-swiper-button-prev",
            disabledClass: "swiper-button-disabled"
          }}
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
          className='grid'
        >
          <button aria-label='Ver foto anterior' className="image-swiper-button-prev absolute left-[0.8em] md:max-lg:left-[1.5em] lg:max-xl:left-[2em] bottom-[0.9em] p-2 sm:p-4 bg-white border rounded-full z-10 active:scale-75 duration-300 transition-transform">
            <FaChevronLeft size={"1.3em"} />
          </button>
          {
            pescarHeroImages.map(e => (
            <SwiperSlide key={e} className="mask max-h-[332px] w-full cursor-grab overflow-hidden">
              <img src={"/pescar/"+e} alt={e} className='aspect-video bg-white border' loading='lazy'/>
            </SwiperSlide>
            ))
          }
          <button aria-label='Ver foto siguiente' className="image-swiper-button-next absolute right-[0.8em] md:max-lg:right-[1.5em] lg:max-xl:right-[2em] top-[0.9em] p-2 sm:p-4 bg-white border rounded-full z-10 active:scale-75 duration-300 transition-transform">
            <FaChevronRight size={"1.3em"} />
          </button>
        </Swiper>
      </div>
    </>
  )
}