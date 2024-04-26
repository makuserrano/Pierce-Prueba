import React from "react";
import "../styles/Footer.css";
import Vtex from "../assets/vtex-footer.png";
import Pirce from "../assets/pierce-footer.png";
import DataFiscal from "../assets/data-fiscal-footer.png";
import Location from "../assets/location-footer.png";
const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <div className="footer-section first">
          <ul className="footer-list">
            <li>condiciones</li>
            <li>trabaja con nosotros</li>
            <li>medios de pago</li>
            <li>preguntas frecuentes</li>
          </ul>

          <button className="footer-button">Botón de arrepentimiento</button>
          <div className="footer-list Powered">
            <p>Powered by Pierce commerce</p>
            <img src={Pirce} alt="pirce" className="PoweredPirce" />
            <img src={Vtex} alt="vtex" className="PoweredVtex" />
          </div>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Mi Tienda</h3>
        </div>
        <div className="footer-section Sucursales">
          <div className="Sucursales-h3">
            <img src={Location} alt="Location" className="iconLocation" />
            <h3>SUCURSALES</h3>
          </div>
          <ul className="sucursal-list">
            <li>Whatsapp 2215137270</li>
            <li>ecommerce@mateu.com.ar</li>
            <li>La Plata 1900, Buenos Aires, Argentina</li>
          </ul>
          <p className="footer-copyright">© 2023 MateuSports</p>
          <img src={DataFiscal} alt="DataFiscal" className="DataFiscal" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
