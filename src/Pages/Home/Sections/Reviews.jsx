import React from "react";
import { reviews } from "../../../Data/DataIndex";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import { FaQuoteLeft } from "react-icons/fa";

// swiper
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Reviews = () => {
  const isMobile = window.innerWidth < 768;

  return (
    <div className="py-12">
      <h1 className="text-3xl text-center pb-8 font-bold text-yellow-500">
        What Our <span className="font-light text-black">Customers Say</span> About Us
      </h1>

      {isMobile ? (
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            prevEl: ".prevReview",
            nextEl: ".nextReview",
          }}
          autoplay={{ delay: 6000, disableOnInteraction: true }}
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {reviews.map((review, index) => {
            return (
              <SwiperSlide key={index} className="w-full flex justify-center">
                <div className="card w-full md:w-[300px] h-[300px] border rounded-md shadow-lg shadow-yellow-500 p-4  flex flex-col justify-between">
                  <FaQuoteLeft className="text-yellow-500 text-2xl " />
                  <p className="review text-base ">{review.review}</p>
                  <div className="reviewer flex flex-row items-center gap-4 pt-4">
                    <img
                      src={review.reviewerImage}
                      alt={review.reviewerName}
                      className="rounded-full w-[50px] h-[50px]"
                    />
                    <div className="reviewer_info">
                      <p className="font-light text-base text-slate-900">
                        {review.reviewerName}
                      </p>
                      <p className="text-xs font-bold text-yellow-400">
                      &mdash; {review.company}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={4}
          navigation={{
            prevEl: ".prevReview",
            nextEl: ".nextReview",
          }}
          autoplay={{ delay: 6000, disableOnInteraction: true }}
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {reviews.map((review, index) => {
            return (
              <SwiperSlide key={index} className="w-full flex justify-center">
                <div className="card w-full md:w-[300px] h-[300px] border rounded-md shadow-lg shadow-yellow-500 p-4  flex flex-col justify-between">
                  <FaQuoteLeft className="text-yellow-500 text-2xl " />
                  <p className="review text-base ">{review.review}</p>
                  <div className="reviewer flex flex-row items-center gap-4 pt-4">
                    <img
                      src={review.reviewerImage}
                      alt={review.reviewerName}
                      className="rounded-full w-[50px] h-[50px]"
                    />
                    <div className="reviewer_info">
                      <p className="font-light text-base text-slate-900">
                        {review.reviewerName}
                      </p>
                      <p className="text-xs font-bold text-yellow-400">
                        &mdash; {review.company}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
      {/* Custom Navigation Icons */}
      <div className="flex flex-row justify-center gap-20 py-8">
        <BsArrowLeftCircle className="prevReview text-4xl cursor-pointer text-yellow-500 hover:text-slate-700" />
        <BsArrowRightCircle className="nextReview text-4xl cursor-pointer text-yellow-500 hover:text-slate-700" />
      </div>
    </div>
  );
};

export default Reviews;
