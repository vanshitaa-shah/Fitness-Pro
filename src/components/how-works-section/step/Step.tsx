import React from "react";
import { StepProps } from "../../../types/types";
import "./Step.scss";

const Step = ({ Icon, step, title, desc, color }: StepProps) => {
  return (
    <>
      <div className="section-how-step flex">
        <div className={`icon-container ${color}`}>{<Icon />}</div>
        <p className="section-how-step-number">{step}</p>
        <p className="section-how-step-title normal">{title}</p>
        <p className="section-how-step-desc small-light">{desc}</p>
      </div>
    </>
  );
};

export default Step;
