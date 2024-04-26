import React from "react";
import "../styles/CategoriaPop.css";
import ZapasResponsive from "../assets/zapatilla-responsive.png"
import Zapatillas from "../assets/zapatillas.png";
import Calzas from "../assets/Rectanglecalzas.png";
import Pelota from "../assets/Rectanglepelotas.png";
import Futbol from "../assets/Rectanglefutbol.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CategoriaPop = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 0,
    slidesToScroll: 0,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <section>
      <h2 className="h2-visit-responsive">Visitá las categorías más populares</h2>

      <Slider {...settings} className="slider-responsive-category">
        <div className="gallery-container-mobile">
          <img src={ZapasResponsive} alt="zapatillas" />
          <span className="h4-text-responsive">ZAPATILLAS</span>
        </div>

        <div className="gallery-container-mobile">
          <img src={ZapasResponsive} alt="zapatillas" />
          <span className="h4-text-responsive">ZAPATILLAS</span>
        </div>

        <div className="gallery-container-mobile">
          <img src={ZapasResponsive} alt="zapatillas" />
          <span className="h4-text-responsive">ZAPATILLAS</span>
        </div>
      </Slider>

      <div className="container-category">
        <h2 className="h2-visit">Visitá las categorías más populares</h2>
        <div className="gallery-container">
          <div className="gallery-img">
            <img src={Zapatillas} alt="zapatillas" />
            <span className="h4-text">ZAPATILLAS</span>
          </div>

          <div className="center-double-container">
            <div className="gallery-img rectangulo">
              <img src={Futbol} alt="futbol" />
              <span className="h4-text-calza">FÚTBOL</span>
            </div>
            <div className="gallery-img rectangulo">
              <img src={Calzas} alt="calzas" />
              <span className="h4-text-calza">CALZAS</span>
            </div>
          </div>

          <div className="gallery-img pelota">
            <img src={Pelota} alt="pelota" />
            <span className="h4-text-ball">PELOTA</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriaPop;
