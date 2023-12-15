import { Button } from "antd";
import React from "react";
import "./SectionCard.scss";
import { ReactComponent as Beginner } from "../../assets/images/book-class-section/beginner.svg";
import { ReactComponent as Advanced } from "../../assets/images/book-class-section/advanced.svg";
import { ReactComponent as Premium } from "../../assets/images/book-class-section/premium.svg";
import FitnessClass from "./fitness-class/FitnessClass";

const SectionCard = () => {
  return (
    <div className="section-card">
      <h2>Book a class</h2>
      <p className="section-card-tagline">
        Track your workouts, get better results, and be the best version of you.
        Less thinking, more lifting.
      </p>

      <div className="fitness-class-types flex">
        <FitnessClass
          Icon={Beginner}
          title="For the beginners"
          tagline="You never workout before, it's now a good start"
          color="green"
          selected={false}
        />
        <FitnessClass
          Icon={Advanced}
          title="Advanced classes"
          tagline="You never workout before, it's now a good start"
          color="purple"
          selected={true}
        />
        <FitnessClass
          Icon={Premium}
          title="Premium (limited)"
          tagline="You never workout before, it's now a good start"
          color="blue"
          selected={false}
        />
      </div>

      <p className="bottom-line  small-light">
        <span className="green">10% Discount</span> if you're already using the{" "}
        <span className="strong">Fitness Pro</span> on App Store
      </p>

      <Button type="primary" className="section-card-action">
        <span>Book a class</span>
        <span className="arrow">&rarr;</span>
      </Button>
    </div>
  );
};

export default SectionCard;
