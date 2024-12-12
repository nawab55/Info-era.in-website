// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { useMediaQuery } from "react-responsive";

const TeamSlider = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  return (
    <Swiper
      style={{
        width: "70%",
        display: "flex",
        justifyContent: "center",
        padding: "2rem 0rem",
      }}
      spaceBetween={10}
      slidesPerView={isDesktopOrLaptop ? 3 : 1}
      autoplay={{
        delay: 3000,
      }}
      modules={[Autoplay, Navigation, Pagination]}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
    >
      <SwiperSlide>
        <div
          className="card swiper-slide swiper-slide-duplicate"
          data-swiper-slide-index={5}
          role="group"
          aria-label="6 / 8"
        >
          <div className="image-content">
            <span className="overlay" />
            <div className="card-image">
              <img
                src="assets/teamSlider/images/rohitkumar.png"
                alt=""
                className="card-img"
              />
            </div>
          </div>
          <div className="card-content">
            <h2 className="name">Rohit Kumar</h2>
            <p className="description">Digital Marketing Executive</p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="card swiper-slide swiper-slide-duplicate"
          data-swiper-slide-index={6}
          role="group"
          aria-label="7 / 8"
        >
          <div className="image-content">
            <span className="overlay" />
            <div className="card-image">
              <img
                src="assets/teamSlider/images/nawab.jpg"
                alt=""
                className="card-img"
              />
            </div>
          </div>
          <div className="card-content">
            <h2 className="name">Md Nawab</h2>
            <p className="description">Software Engineer</p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="card swiper-slide swiper-slide-duplicate swiper-slide-prev"
          data-swiper-slide-index={7}
          role="group"
          aria-label="8 / 8"
        >
          <div className="image-content">
            <span className="overlay" />
            <div className="card-image">
              <img
                src="assets/teamSlider/images/soni.png"
                alt=""
                className="card-img"
              />
            </div>
          </div>
          <div className="card-content">
            <h2 className="name">Soni Kumari</h2>
            <p className="description">BOE</p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="card swiper-slide swiper-slide-active"
          data-swiper-slide-index={0}
          role="group"
          aria-label="1 / 8"
        >
          <div className="image-content">
            <span className="overlay" />
            <div className="card-image">
              <img
                src="assets/teamSlider/images/aman.png"
                alt=""
                className="card-img"
              />
            </div>
          </div>
          <div className="card-content">
            <h2 className="name">Aman Soben</h2>
            <p className="description">Software Developer</p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="card swiper-slide swiper-slide-next"
          data-swiper-slide-index={1}
          role="group"
          aria-label="2 / 8"
        >
          <div className="image-content">
            <span className="overlay" />
            <div className="card-image">
              <img
                src="assets/teamSlider/images/kunal.png"
                alt=""
                className="card-img"
              />
            </div>
          </div>
          <div className="card-content">
            <h2 className="name">Kishan Kunal</h2>
            <p className="description">Software Engineer</p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="card swiper-slide"
          data-swiper-slide-index={2}
          role="group"
          aria-label="3 / 8"
        >
          <div className="image-content">
            <span className="overlay" />
            <div className="card-image">
              <img
                src="assets/teamSlider/images/himanshu.jpg"
                alt=""
                className="card-img"
              />
            </div>
          </div>
          <div className="card-content">
            <h2 className="name">Himanshu Shekhar</h2>
            <p className="description">Software Engineer</p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="card swiper-slide"
          data-swiper-slide-index={3}
          role="group"
          aria-label="4 / 8"
        >
          <div className="image-content">
            <span className="overlay" />
            <div className="card-image">
              <img
                src="assets/teamSlider/images/gauravverma.png"
                alt=""
                className="card-img"
              />
            </div>
          </div>
          <div className="card-content">
            <h2 className="name">Gaurav Verma</h2>
            <p className="description">Software Engineer</p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="card swiper-slide"
          data-swiper-slide-index={4}
          role="group"
          aria-label="5 / 8"
        >
          <div className="image-content">
            <span className="overlay" />
            <div className="card-image">
              <img
                src="assets/teamSlider/images/samir.png"
                alt=""
                className="card-img"
              />
            </div>
          </div>
          <div className="card-content">
            <h2 className="name">Samir Ansari</h2>
            <p className="description">Software Developer</p>
          </div>
        </div>
      </SwiperSlide>
      <div className="custom-pagination" />
    </Swiper>
  );
};

export default TeamSlider;
