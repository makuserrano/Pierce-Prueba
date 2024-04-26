import React from "react";
import NavBar from "../components/NavBar";
import BannerSlider from "../components/BannerSlider";
import VitrinaSlider from "../components/VitrinaSlider";
import CategoriaPop from "../components/CategoriaPop";
import InfoSection from "../components/InfoSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <NavBar />
      <BannerSlider />
      <VitrinaSlider backgroundColor="#DC1E0F" carouselTitle="Tendencias" titleColor="white"/>
      <CategoriaPop />
      <VitrinaSlider backgroundColor="white"  carouselTitle="Los más vendidos" titleColor="black"/>
      <InfoSection />
      <Footer />
    </>
  );
}

export default Home;
