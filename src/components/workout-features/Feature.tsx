import React from "react";
import { FeatureProps } from "../../types/types";
import "./WorkoutFeatureSection.scss";

const Feature = ({ Icon, title, tagline }: FeatureProps) => {
  return (
    <div className="new-feature flex">
      {<Icon />}
      <p className=" new-feature-title normal">{title}</p>
      <p className="new-feature-tagline small-light">{tagline}</p>
    </div>
  );
};

export default Feature;
