import { Button } from "antd";
import React from "react";
import "./HeroSection.scss";

const HeroContent = () => {
  return (
    <div className="section-hero-left">
      <p className="hero-title">Train smarter. get stronger</p>
      <h1 className="hero-heading">Simple fitness experience for everyone.</h1>
      <p className="hero-tagline">
        Track your workouts, get better results, and be the best version of you.
        Less thinking, more lifting.
      </p>

      <div className="hero-actions">
        <Button type="primary">Download App</Button>
        <Button>Book a Class</Button>
      </div>
    </div>
  );
};

export default HeroContent;
