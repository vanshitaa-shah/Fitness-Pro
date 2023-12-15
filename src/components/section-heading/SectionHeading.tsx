import React from "react";
import "./SectionHeading.scss";

interface SectionHeadingProps {
  title?: string;
  heading: string;
  tagline?: string;
}

const SectionHeading = ({ title, heading, tagline }: SectionHeadingProps) => {
  return (
    <div className="section-heading">
      {title && <p className="section-title small-bold">{title}</p>}
      <h2 className="section-headline">{heading}</h2>
      {tagline && <p className="section-tagline">{tagline}</p>}
    </div>
  );
};

export default SectionHeading;
