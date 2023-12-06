import { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { confetti } from 'tsparticles-confetti';
import { pescarCarouselImages } from '../../lib/images';


export default function Carousel() {
  useEffect(() => {
    const delayedConfetti = setTimeout(async () => {
      await confetti("tsparticles", {
        disableForReducedMotion: true,
        count: 250,
        spread: 500,
      });
    }, 1000);

    return () => clearTimeout(delayedConfetti);
  }, []);


  return (
    <section className='fadeIn flex flex-col gap-5'>
      <h3 className='text-3xl sm:text-4xl font-semibold'>Nuestros Alumnos ❤️</h3>
      <div className='flex relative'>
        <span className='absolute left-0 inset-y-0 z-10 w-5 lg:w-20 min-h-full bg-gradient-to-r from-white to-transparent block' />
        <Swiper
          slidesPerView={2}
          longSwipesMs={700}
          breakpoints={{
            640: {
              slidesPerView: 3
            },
            768: {
              slidesPerView: 4
            },
            1024: {
              slidesPerView: 6
            },
          }}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className='overflow-hidden'
        >
          {
            pescarCarouselImages.map(e => (
              <SwiperSlide key={e + "carousel"}>
                <img src={"/pescar/" + e} alt={e} className='aspect-square object-cover rounded-2xl cursor-grab' loading='lazy' />
              </SwiperSlide>
            ))
          }
        </Swiper>
        <span className='absolute right-0 inset-y-0 z-10 w-5 lg:w-20 min-h-full bg-gradient-to-l from-white to-transparent block' />
      </div>
    </section>
  )
}
