import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

export default function App() {
  const swiperStyle = {
    width: "100%",
    height: "100%", // Assuming this should fill the entire container
  };

  const swiperSlideStyle = {
    textAlign: "center",
    fontSize: "18px",
    background: "gray",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    /* Removing fixed height to allow dynamic content height */
  };

  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={Pagination} // Remove the square brackets
        className="mySwiper"
        style={swiperStyle} // Applying the swiperStyle
      >
        <SwiperSlide className="w-[500px] h-[500px]" style={swiperSlideStyle}>
          Slide 1
        </SwiperSlide>

        <SwiperSlide style={swiperSlideStyle}>Slide 2</SwiperSlide>
        <SwiperSlide style={swiperSlideStyle}>Slide 3</SwiperSlide>
        <SwiperSlide style={swiperSlideStyle}>Slide 4</SwiperSlide>
        <SwiperSlide style={swiperSlideStyle}>Slide 5</SwiperSlide>
        <SwiperSlide style={swiperSlideStyle}>Slide 6</SwiperSlide>
        <SwiperSlide style={swiperSlideStyle}>Slide 7</SwiperSlide>
        <SwiperSlide style={swiperSlideStyle}>Slide 8</SwiperSlide>
        <SwiperSlide style={swiperSlideStyle}>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
