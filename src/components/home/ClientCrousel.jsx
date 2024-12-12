// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import { useMediaQuery } from "react-responsive";

const ClientCrousel = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <Swiper
      loop={true}
      spaceBetween={50}
      slidesPerView={isDesktopOrLaptop ? 6 : 2}
      autoplay={{
        delay: 3000, // Adjust the delay in milliseconds as needed
        disableOnInteraction: false, // Continue autoplay after user interaction
      }}
      modules={[Autoplay, Pagination]}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div className="client-slide">
          <img
            src="assets/img/clients/dce.png"
            className="img-fluid"
            alt="Darbhanga Engineering College"
            title="Darbhanga Engineering College - Info Era"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="client-slide">
          <img
            src="assets/img/clients/sce.jpg"
            className="img-fluid"
            alt="Polytechnic College"
            title="Polytechnic College - Info Era"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="client-slide">
          <img
            src="assets/img/clients/bce.png"
            className="img-fluid"
            alt="Bakthiyarpur Engineering College"
            title="Bakthiyarpur En gineering College  - Info Era"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="client-slide">
          <img
            src="assets/img/clients/eleedom-imf.jpg"
            className="img-fluid"
            alt="eleedom-img"
            title="Eleedom - Info Era"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="client-slide">
          <img
            src="assets/img/clients/weavehandlogo.png"
            className="img-fluid"
            alt="weavehand"
            title="Weavehand - Info Era"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="client-slide">
          <img
            src="assets/img/clients/kanishkabuildcon.png"
            className="img-fluid"
            alt="weavehand"
            title="Weavehand - Info Era"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="client-slide">
          <img
            src="assets/img/clients/wecoachai.png"
            className="img-fluid"
            alt="Wecoach"
            title="Wecoach - Info Era"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="client-slide">
          <img
            src="assets/img/clients/hungrella.png"
            className="img-fluid"
            alt="Hungrella"
            title="Hungrella - Info Era"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="client-slide">
          <img
            src="assets/img/clients/gdmemorial.png"
            className="img-fluid"
            alt="G.D. Memorial Homoeopathic Medical College & Hospital"
            title="G.D.Memorial Homoeopathic Media College and Hospital - Info Era"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="client-slide">
          <img
            src="assets/img/clients/ecs.png"
            className="img-fluid"
            alt="ECS Group of Education"
            title="ECS Group of Education - Info Era"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="client-slide">
          <img
            src="assets/img/clients/dryadhuvirsinhahmch.png"
            className="img-fluid"
            alt="Dr. Yadubir Sinha Homoeopathic Medical College & Hospital"
            title="Dr. Yadubir Sinha Homoeopathic Medical College and Hospital - Info Era"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="client-slide">
          <img
            src="assets/img/clients/osscps.png"
            className="img-fluid"
            alt="Om Sri Sai College of Pharmacy"
            title="Om Sri Sai College of Pharmacy - Info Era"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="client-slide">
          <img
            src="assets/img/clients/donbosco.png"
            className="img-fluid"
            alt="Don Bosco School"
            title="Don Bosco School - Info Era Software Services"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="client-slide">
          <img
            src="assets/img/clients/impulse.png"
            className="img-fluid"
            alt="Impulse Kota Darbhanga"
            title="Impulse Kota Darbhanga - Info Era"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="client-slide">
          <img
            src="assets/img/clients/issac.png"
            className="img-fluid"
            alt="Isaac Albert"
            title="Isaac Albert - Info Era"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="client-slide">
          <img
            src="assets/img/clients/wecoachai.png"
            className="img-fluid"
            alt="Wecoach"
            title="Wecoach - Info Era Software Service"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="client-slide">
          <img
            src="assets/img/clients/osspce.png"
            className="img-fluid"
            alt="Om Sri Sai College of Paramedical"
            title="Om Sri Sai College of Paramedical - Info Era"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="client-slide">
          <img
            src="assets/img/clients/mountsummer.jpg"
            className="img-fluid"
            alt="Mount Summer School"
            title="Mount Summer School - Info Era"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default ClientCrousel;
