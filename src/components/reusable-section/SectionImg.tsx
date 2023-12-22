import React from "react";
import { SectionImgProps } from "../../types/types";
import "./SectionStyles.scss";

const SectionImg = ({ src, alt }: SectionImgProps) => {
  return (
    <div className="section-right flex">
      <img src={src} alt={alt} />
    </div>
  );
};

export default SectionImg;
