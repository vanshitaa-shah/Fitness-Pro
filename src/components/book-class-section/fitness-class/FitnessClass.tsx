import React from "react";
interface FitnessClassProps {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
  tagline: string;
  color: string;
  selected: boolean;
}

const FitnessClass = ({
  Icon,
  title,
  tagline,
  color,
  selected,
}: FitnessClassProps) => {
  const borderStyles = selected ? "border" : "";
  return (
    <div className={`fitness-class flex ${borderStyles}`}>
      <div className={`icon-container ${color}`}>{<Icon />}</div>
      <div className="fitness-class-content-container">
        <p className="fitness-class-title normal">{title}</p>
        <p>{tagline}</p>
      </div>
    </div>
  );
};

export default FitnessClass;
