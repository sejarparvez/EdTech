import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Model from "./Model";
import TestimonialsData from "./TestimonialsData";

export default function Testimonials() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-main-300 py-20">
      <div className="flex items-center gap-1">
        <div className="h-0.5 w-10 bg-main-400"></div>
        <div className="text-main-400">Testimonials</div>
      </div>
      <div className="text-center font-philosopher text-4xl md:text-6xl">
        What Our Students <br /> Say About Us
      </div>
      <div className="flex w-screen items-center justify-center gap-10 overflow-hidden px-4 md:px-20">
        <Swiper
          grabCursor={true}
          className=" mt-12 flex w-[100%] items-center justify-center overflow-visible"
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          loop={true}
          spaceBetween={80}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
        >
          {TestimonialsData.map((item, index) => (
            <SwiperSlide className="mb-16 flex" key={index}>
              <Model
                image={item.Image}
                name={item.Name}
                position={item.Position}
                description={item.Description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
