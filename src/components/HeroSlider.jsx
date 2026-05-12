// src/components/HeroSlider.jsx

import {
  Swiper,
  SwiperSlide,
} from 'swiper/react'

import {
  Autoplay,
  Pagination,
} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

const HeroSlider = () => {

  const slides = [
    {
      image:
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
      title: 'Latest Sneakers',
    },
    {
      image:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
      title: 'Premium Headphones',
    },
    {
      image:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
      title: 'Smart Gadgets',
    },
  ]

  return (

    <Swiper

      modules={[
        Autoplay,
        Pagination,
      ]}

      autoplay={{
        delay: 3000,
      }}

      pagination={{
        clickable: true,
      }}

      loop={true}

      className="h-[500px]"
    >

      {slides.map((slide, index) => (

        <SwiperSlide key={index}>

          <div className="relative h-[500px]">

            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">

              <h1 className="text-white text-5xl md:text-7xl font-bold text-center">
                {slide.title}
              </h1>

            </div>

          </div>

        </SwiperSlide>

      ))}

    </Swiper>

  )
}

export default HeroSlider