import React from "react";
import "./FeaturedIcons.scss";
import Img1 from "../../assets/images/featured-logos/logo 01.png";
import Img2 from "../../assets/images/featured-logos/logo 02.png";
import Img3 from "../../assets/images/featured-logos/logo 03.png";
import Img4 from "../../assets/images/featured-logos/logo 04.png";
import Img5 from "../../assets/images/featured-logos/logo 05.png";
import Img6 from "../../assets/images/featured-logos/logo 06.png";

const FeacturedIcons = () => {
  return (
    <div className="featured-icons">
      <img src={Img1}></img>
      <img src={Img2}></img>
      <img src={Img3}></img>
      <img src={Img4}></img>
      <img src={Img5}></img>
      <img src={Img6}></img>
    </div>
  );
};

export default FeacturedIcons;
