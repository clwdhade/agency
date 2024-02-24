import React from 'react'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

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
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {
                    HomeHeroImages.map((slide, index) => {
                        return (
                            <SwiperSlide key={index} className='h-dvh w-full text-center'>
                                <img src={slide.image} alt={slide.title} />
                                <h2 className="text-2xl ">{slide.title}</h2>
                                <p className='text-base'>{slide.text}</p>
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
