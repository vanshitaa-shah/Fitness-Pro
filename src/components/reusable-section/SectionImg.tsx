import React from "react";
import "./SectionStyles.scss";
interface SectionImgProps {
  src: string;
  alt: string;
}
const SectionImg = ({ src, alt }: SectionImgProps) => {
  return (
    <div className="section-right flex">
      <img src={src} alt={alt} />
    </div>
  );
};

export default SectionImg;
