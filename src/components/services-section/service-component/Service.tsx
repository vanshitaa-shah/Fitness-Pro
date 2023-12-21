import React from "react";
import "./Service.scss"

interface ServiceProps{
    number:string,
    title:string,
    tagline:string,
    color:string
}
const Service = ({number,title,tagline,color}:ServiceProps) => {
  return (
    <div className="service">
      <div className={`number-container ${color} flex`}>{number}</div>
      <p className="title normal">{title}</p>
      <p className="tagline small-light">
        {tagline}
      </p>
    </div>
  );
};

export default Service;
