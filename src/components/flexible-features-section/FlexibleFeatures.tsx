import React from "react";
import Handle from "../../assets/images/flexible-features/handle.png";
import Gloves from "../../assets/images/flexible-features/gloves.png";
import Bottle from "../../assets/images/flexible-features/bottle.png";
import "./FlexibleFeatures.scss";
import ScrollArrows from "../scroll-arrows/ScrollArrows";
import FlexibleFeature, { FeatureProps } from "./FlexibleFeature";

const list = document.getElementsByClassName("flexible-features");

const featureData: FeatureProps[] = [
  {
    img: Handle,
    tagline: "Intuitive and clean design",
  },
  {
    img: Gloves,
    tagline: "Track your progress easily",
    direction: "left",
  },
  {
    img: Bottle,
    tagline: "Syncs with Apple Health",
  },
];

const FlexibleFeatures = () => {
  return (
    <>
      <div className="flexible-features flex">
        {featureData.map((feature, idx) => (
          <FlexibleFeature
            key={idx}
            img={feature.img}
            tagline={feature.tagline}
            direction={feature.direction}
          />
        ))}
      </div>

      <ScrollArrows list={list} />
    </>
  );
};

export default FlexibleFeatures;
