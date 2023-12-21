import React from "react";
import { Button } from "antd";
import { ReactComponent as Check } from "../../assets/images/track-workouts/check.svg";
import "./SectionStyles.scss";

interface SectionContentProps {
  title?: string;
  heading: string;
  tagline: string;
  btnPrimary: string;
  btnDefault?: string;
  list?: string[];
}

const SectionContent = ({
  title,
  heading,
  tagline,
  btnPrimary,
  btnDefault,
  list,
}: SectionContentProps) => {
  return (
    <div className="section-left">
      {title && <p className="section-title bold">{title}</p>}
      <h1 className="section-heading">{heading}</h1>
      <p className="section-tagline">{tagline}</p>

      {list && (
        <div className="section-list flex">
          {list.map((item, idx) => (
            <div key={idx} className="section-list-item flex">
              <Check />
              <p className="normal">{item}</p>
            </div>
          ))}
        </div>
      )}
      <div className="section-actions">
        <Button type="primary">{btnPrimary}</Button>
        {btnDefault && <Button>{btnDefault}</Button>}
      </div>
    </div>
  );
};

export default SectionContent;
