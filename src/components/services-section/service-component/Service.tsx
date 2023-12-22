import React from "react";
import { ServiceProps } from "../../../types/types";
import "./Service.scss";

const Service = ({ number, title, tagline, color }: ServiceProps) => {
  return (
    <div className="service">
      <div className={`number-container ${color} flex`}>{number}</div>
      <p className="title normal">{title}</p>
      <p className="tagline small-light">{tagline}</p>
    </div>
  );
};

export default Service;
