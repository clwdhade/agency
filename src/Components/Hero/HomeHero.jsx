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

// import icons
import { BsArrowLeftCircle, BsArrowRightCircle, BsBoxArrowInUpRight } from "react-icons/bs";


const HomeHero = () => {
    return (
        <div>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={{
                    pprevEl: '.custom_prev',
                    nextEl: '.custom_next',
                }}
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
                                [<div className="absolute top-[25%] md:top-[40%] left-[12dvw] md:left-[25dvw] w-[75%] md:w-[50%] text-white items-center flex flex-col gap-8 z-1">
                                    <h2 className="text-4xl font-bold">{slide.title}</h2>
                                    <p className='text-xl'>{slide.text}</p>
                                    <button className=" w-[75%] md:w-[10dvw] flex flex-row gap-2 justify-center items-center py-2 rounded  text-white text-base cursor-pointer border bg-transparent hover:border hover:border-[#072e33] hover:bg-[#072e33] hover:translate-x-2 transition-all">Get Started <BsBoxArrowInUpRight /></button>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>

            {/* Custom Navigation Icons */}
            <BsArrowLeftCircle className="custom_prev text-white text-2xl absolute z-10" />
            <BsArrowRightCircle className="custom_next text-white text-2xl absolute z-10" />

            
        </div>
    )
}

export default HomeHero
