import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import truck from "../assets/truck-icon.png"
import shop from "../assets/icon-shop.png"
import wallet from "../assets/wallet-icon.png"
import "../styles/InfoSection.css";


function InfoSection() {
  const InfoSlide = ({ icon, title, description }) => (
    <div className="info-slide">
      <div className="info-content">
        <div className="info-icon">
          <img src={icon} className="custom-icon" />
        </div>
        <h3 className="info-title ">{title}</h3>
        <p className="info-description ">{description}</p>
      </div>
    </div>
  );
  const infoData = [
    {
      icon: shop,
      title: "Elegí los productos que vas a comprar",
      description: "Si querés más de uno, sumalos a tu carrito.",
    },
    {
      icon: wallet,
      title: "Pagá con el medio de pago que quieras",
      description:
        "Comprá con seguridad: usamos la tecnología de Mercado Pago.",
    },
    {
      icon: truck,
      title: "Recibí el producto que esperás",
      description:
        "Elegí la forma de entrega que prefieras ¡y listo! Aseguramos tu entrega con Mercado Envíos.",
    },
  ];

  const sliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: window.innerWidth > 1000 ? 3 : 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    
  };

  if (window.innerWidth < 1000) {
    return (
      <>
     <Slider {...sliderSettings} className="slider">
              {infoData.map((item, index) => (
                <InfoSlide key={index} {...item} />
              ))}
            </Slider>
      </>
    );
  } else {	
    return (<>
    <div className="info-container">
      {infoData.map((item, index) => <InfoSlide key={index} {...item} />)}
    </div>
    </>)
    
   
  }
 
}

export default InfoSection;
