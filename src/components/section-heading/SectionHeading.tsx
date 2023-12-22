import React from "react";
import { SectionHeadingProps } from "../../types/types";
import "./SectionHeading.scss";

const SectionHeading = ({
  TitleLogo,
  title,
  heading,
  tagline,
}: SectionHeadingProps) => {
  return (
    <div className="section-heading">
      {TitleLogo && (
        <p className="section-title small-bold">
          <img src={TitleLogo} />
        </p>
      )}
      {title && <p className="section-title small-bold">{title}</p>}
      <div className="section-heading-main">
        <h2 className="section-headline">{heading}</h2>
        {tagline && <p className="section-tagline">{tagline}</p>}
      </div>
    </div>
  );
};

export default SectionHeading;
