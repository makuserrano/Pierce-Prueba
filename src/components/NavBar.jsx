import React, { useState } from "react";
import "../styles/NavBar.css";

import { FaSearch } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthAmericas,
  faUser,
  faShoppingCart,
  faTimes,
  faSearch,
  faBars
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function NavBar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
    <nav>
    <div className="nav-container">
        <div className="nav">
          <h1>Mi Tienda</h1>
          <div className="search-input">
            <input type="text" />
            <div className="search-icon">{<FaSearch />}</div>
          </div>

          <div className="icon">
            <FontAwesomeIcon icon={faUser} className="iconUser" />
            <div className="iconText">
                <p className="miCuenta">Mi cuenta</p>
              </div>
            <div>
    
             
            </div>

            <div className="iconShop">
              <FontAwesomeIcon icon={faShoppingCart} className="iconLight" />
            </div>
          </div>
        </div>
        <div className="small-navbar">
          <ul className="small-nav-links">
            <li className="small-nav-item">Muebles</li>
            <li className="small-nav-item">Calzado</li>
            <li className="small-nav-item">Colchones</li>
            <li className="small-nav-item">Herramientas</li>
            <li className="small-nav-item ofertas">Ofertas</li>
          </ul>
        </div>
      </div>

    	{/* /*        Nav mobile       */}


      <div className="mobile-nav">
        <div className="mobile-nav-top">
          <div className="burger-icon" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </div>
          <h1>
            <Link to="/">Mi Tienda</Link>
          </h1>
          <div className="nav-icons">
            <div className="user">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="cart">
              <FontAwesomeIcon icon={faShoppingCart} />
            </div>
          </div>
        </div>
        <div
          className={`mobile-menu ${
            isMobileMenuOpen ? "mobile-menu-open" : ""
          }`}
        >
          <span className="close-icon close-menu" onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
          <div className="mobile-menu-content">
            <div className="mobile-menu-content-span">
              <span>Mi Tienda</span>
              <div className="line"></div>
            </div>
            <div className="mobile-menu-content-link">
              <Link to="/" className="mobile-menu-content-link-a">
                Muebles
              </Link>
              <div className="line-link"></div>
              <Link to="/calzados" className="mobile-menu-content-link-a">
                Calzados
              </Link>
              <div className="line-link"></div>
              <Link to="/colchones" className="mobile-menu-content-link-a">
                Colchones
              </Link>
              <div className="line-link"></div>
              <Link to="/herramientas" className="mobile-menu-content-link-a">
                Herramientas
              </Link>
              <div className="line-link"></div>
              <div className="link-Ofertas-container">
                <Link to="/ofertas" className="link-Ofertas">
                  Ofertas
                </Link>
                <FontAwesomeIcon
                  className="icon-earth"
                  icon={faEarthAmericas}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="search-bar-container">
          <div className="search-bar">
            <input className="search-bar-input" type="text" />
            <FontAwesomeIcon className="search-icon-mobile" icon={faSearch} />
          </div>
        </div>
      </div>

    </nav>



      
    </>
  );
}

export default NavBar;
