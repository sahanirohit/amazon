import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute w-full z-20 h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 " />

      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}>
        <img
          loading="lazy"
          src="https://links.papareact.com/gi1"
          alt=""
          className=""
        />
        <img
          loading="lazy"
          src="https://links.papareact.com/6ff"
          alt=""
          className=""
        />
        <img
          loading="lazy"
          src="https://links.papareact.com/7ma"
          alt=""
          className=""
        />
      </Carousel>
    </div>
  );
};

export default Banner;
