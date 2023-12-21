import React, { ReactNode } from "react";
import { Button } from "antd";
import { ReactComponent as Check } from "../../assets/images/track-workouts/check.svg";
import "./SectionStyles.scss";

interface SectionContentProps {
  title?: string;
  heading: string;
  tagline: string;
  btnPrimary?: string;
  btnDefault?: string;
  list?: string[];
  input?: ReactNode;
  hr?: boolean;
}

const SectionContent = ({
  title,
  heading,
  tagline,
  btnPrimary,
  btnDefault,
  list,
  input,
  hr,
}: SectionContentProps) => {
  return (
    <div className="section-left">
      {title && <p className="section-title bold">{title}</p>}
      <h1 className="section-heading">{heading}</h1>
      {hr && (
        <div className="horizontal-line">
          <hr />
        </div>
      )}
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
        {btnPrimary && <Button type="primary">{btnPrimary}</Button>}
        {btnDefault && <Button>{btnDefault}</Button>}
      </div>

      {input && input}
    </div>
  );
};

export default SectionContent;
