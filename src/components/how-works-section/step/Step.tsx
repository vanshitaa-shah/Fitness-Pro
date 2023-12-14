import React from "react";
import "./Step.scss";

interface StepProps {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  step: string;
  title: string;
  desc: string;
  color: string;
}

const Step = ({ Icon, step, title, desc, color }: StepProps) => {
  return (
    <>
      <div className="section-how-step flex">
        <div className={`icon-container ${color}`}>{<Icon />}</div>
        <p className="section-how-step-number">{step}</p>
        <p className="section-how-step-title">{title}</p>
        <p className="section-how-step-desc">{desc}</p>
      </div>
    </>
  );
};

export default Step;
