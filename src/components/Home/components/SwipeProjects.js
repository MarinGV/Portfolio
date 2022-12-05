import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Mousewheel } from "swiper";
import Card from "./Card";
import pic from "../pictures/comingSoon.jpg";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/swiper.css";

const SwipeProjects = () => {
  return (
    <Swiper
      modules={[EffectCoverflow, Navigation, Mousewheel]}
      slidesPerView={1}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      breakpoints={{
        1000: {
          slidesPerView: 3,
        },
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      navigation={true}
      mousewheel={true}
      setWrapperSize={true}
      className="mySwiper"
    >
      <SwiperSlide>
        <Card
          title="UI Kit"
          pic={pic}
          alt="some text"
          summary="A set of reusable components such as buttons, inputs, cards, modals..."
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card
          title="Error Tracking"
          pic={pic}
          alt="some text"
          summary="A tool to report errors on websites or applications."
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card
          title="Web Analytics"
          pic={pic}
          alt="some text"
          summary="An analytics tool that uses fake data."
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwipeProjects;
