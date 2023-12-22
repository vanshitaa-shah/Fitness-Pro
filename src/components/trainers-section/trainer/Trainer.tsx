import React from "react";
import { TrainerProps } from "../../../types/types";
import "./Trainer.scss";

const Trainer = ({ img, name, role }: TrainerProps) => {
  return (
    <div className="trainer flex">
      <div className="img-container">
        <img src={img} alt="" />
      </div>
      <p className="strong">{name}</p>
      <p className="small-400">{role}</p>
    </div>
  );
};

export default Trainer;
