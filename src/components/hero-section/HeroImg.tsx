import React from "react";
import Hero from "../../assets/images/hero-section/hero.png";
import "./HeroSection.scss";

const HeroImg = () => {
  return (
    <div className="section-hero-right flex">
      <img src={Hero} alt="image of watch,bottle and balls" />
    </div>
  );
};

export default HeroImg;
