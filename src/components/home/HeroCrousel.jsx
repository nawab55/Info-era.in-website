// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

function HeroCrousel() {
  return (
    <Swiper
      loop={true}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 3000, // Adjust the delay in milliseconds as needed
        disableOnInteraction: false, // Continue autoplay after user interaction
      }}
      modules={[Autoplay, Pagination]}
      pagination={{ clickable: true }}
      thumbs={{ slideThumbActiveClass: "white" }}
      style={{ padding: "30px 0px" }}
    >
      <SwiperSlide className="item">
        <img
          src="image/slider-1.jpg"
          alt="Web Application"
          title="Web Application - Info Era Software Services"
        />
      </SwiperSlide>
      <SwiperSlide className="item">
        <img
          src="image/slider-2.jpg"
          alt="Website Designing and Development-Info Era Software Services"
          title="Website Designing and Development-Info Era Software Services"
        />
      </SwiperSlide>
      <SwiperSlide className="item">
        <img src="/image/slider-3.jpg" alt="Info Era Software Services" />
      </SwiperSlide>
      <SwiperSlide className="item">
        <img src="/image/slider-4.jpg" alt="Info Era Software Services" />
      </SwiperSlide>
      <SwiperSlide className="item">
        <img src="/image/slider-5.jpg" alt="Info Era Software Services" />
      </SwiperSlide>
    </Swiper>
  );
}

export default HeroCrousel;
