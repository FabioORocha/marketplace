import React from 'react';
import Slider from "react-slick";

import '../style/banner.css';

import banner from '../assets/images/fullbanner.png';

const Banner = () => {

  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return(
    <div className="banner slider-container container">
      <Slider {...settings}>
        <div className="wrapper-slide">
          <a href="/">
            <img src={banner} alt="Banner" />
          </a>
        </div>
        <div className="wrapper-slide">
          <a href="/">
            <img src={banner} alt="Banner" />
          </a>
        </div>
        <div className="wrapper-slide">
          <a href="/">
            <img src={banner} alt="Banner" />
          </a>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
