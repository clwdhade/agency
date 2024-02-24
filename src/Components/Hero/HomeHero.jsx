import React from 'react'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// import slide data
import { HomeHeroImages } from '../../Data/DataIndex';

const HomeHero = () => {
    return (
        <div>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {
                    HomeHeroImages.map((slide, index) => {
                        return (
                            <SwiperSlide key={index} className='h-dvh w-full text-center'>
                                <img className='h-full w-full object-cover object-center brightness-50 relative z-0' src={slide.image} alt={slide.title} />
                                <div className="absolute top-[50%] left-[50%] text-white self-center flex flex-col gap-8 z-1">
                                    <h2 className="text-4xl font-bold">{slide.title}</h2>
                                    <p className='text-xl'>{slide.text}</p>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
                ...
            </Swiper>
        </div>
    )
}

export default HomeHero
