import React from "react";
import Slider from "react-slick";
import bannerImage from "../assets/bannerPc.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/BannerSlider.css";

const BannerSlider = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite:true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="banner-container">
       <Slider {...settings} className="cards-banner">
        <div className="banner-container">
          <img src={bannerImage} alt="banner"/>
        </div>
        <div>
          <img src={bannerImage}  alt="banner" />
        </div>
        <div>
          <img src={bannerImage} alt="banner"/>
        </div>
        <div>
          <img src={bannerImage} alt="banner"/>
        </div>
      </Slider>
    </div>
  );
};

export default BannerSlider;
