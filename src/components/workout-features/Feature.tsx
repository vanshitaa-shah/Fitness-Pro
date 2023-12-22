import React from "react";
import "./WorkoutFeatureSection.scss";

interface FeatureProps {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
  tagline: string;
}

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
