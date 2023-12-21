import React from "react";
import Service from "./service-component/Service";
import "./ServiceSection.scss"

const Services = () => {
  return (
    <div className="services-container">
      <div className="services">

      <Service number="01" title="Intuitive and clean design" 
      tagline="Track your workouts, get better results, and be the best version of you." color="purple"/>
      <Service number="02" title="An exercise in simplicity" 
      tagline="Track your workouts, get better results, and be the best version of you." color="pink"/>
      <Service number="03" title="The most popular workouts" 
      tagline="Track your workouts, get better results, and be the best version of you." color="green"/>
      </div>

    </div>
  );
};

export default Services;
