import React, { useEffect, useState } from "react";
import "./SectionTrainers.scss";
import TrainerCategory from "./trainer-category/TrainerCategory";
import Trainer1 from "../../assets/images/trainers-section/trainer-1.png";
import Trainer2 from "../../assets/images/trainers-section/trainer-2.png";
import Trainer3 from "../../assets/images/trainers-section/trainer-3.png";
import Trainer4 from "../../assets/images/trainers-section/trainer-4.png";
import Trainer5 from "../../assets/images/trainers-section/trainer-5.png";
import Trainer6 from "../../assets/images/trainers-section/trainer-6.png";
import Trainer from "./trainer/Trainer";
import ScrollArrows from "../scroll-arrows/ScrollArrows";

interface Trainer {
  img: string;
  name: string;
  role: string;
}

const trainers: Trainer[] = [
  { img: Trainer1, name: "Baron Toy", role: "Yoga Master" },
  { img: Trainer2, name: "Kacie Kiehn", role: "Personal Trainer" },
  { img: Trainer3, name: "Marcelino Hettinger", role: "Boxer" },
  { img: Trainer4, name: "Rosemarie Hintz", role: "Business Analytic" },
  { img: Trainer5, name: "Syble Prohaska", role: "Business Analytic" },
  { img: Trainer6, name: "Ila Reinger", role: "Business Analytic" },
];
const list = document.getElementsByClassName("section-trainers-grid");

const SectionTrainers = () => {
  return (
    <>
      <TrainerCategory />
      <div className="section-trainers-grid">
        {trainers.map((trainer, index) => (
          <Trainer
            key={index}
            img={trainer.img}
            name={trainer.name}
            role={trainer.role}
          />
        ))}
      </div>

      <ScrollArrows list={list} />
    </>
  );
};

export default SectionTrainers;
