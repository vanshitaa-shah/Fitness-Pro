import React from "react";

export interface FeatureProps {
  img: string;
  tagline: string;
  direction?: string;
}

const FlexibleFeature = ({ img, tagline, direction }: FeatureProps) => {
  return (
    <div className="flexible-feature flex">
      <div className="img-container">
        <img src={img} className={direction} alt="Handle image" />
      </div>
      <p className="tagline">{tagline}</p>
    </div>
  );
};

export default FlexibleFeature;
