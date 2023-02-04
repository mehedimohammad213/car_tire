import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/images/1.jpg";
import ava02 from "../../../assets/images/index3.jpg";
import ava03 from "../../../assets/images/index.jpg";
import ava04 from "../../../assets/images/index2.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>

        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src={ava01} alt="avatar" className=" rounded" />

        </div>
      </div>
      <div>

        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava02} alt="avatar" className=" rounded" />

        </div>
      </div>
      <div>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava03} alt="avatar" className=" rounded" />

        </div>
      </div>

      <div>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava04} alt="avatar" className=" rounded" />

        </div>
      </div>

    </Slider>
  );
};

export default TestimonialSlider;
