import { Button } from "antd";
import React from "react";
import "./SectionStyles.scss";
interface SectionContentProps {
  title?: string;
  heading: string;
  tagline: string;
  btnPrimary: string;
  btnDefault?: string;
}

const SectionContent = ({
  title,
  heading,
  tagline,
  btnPrimary,
  btnDefault,
}: SectionContentProps) => {
  return (
    <div className="section-left">
      {title && <p className="section-title">{title}</p>}
      <h1 className="section-heading">{heading}</h1>
      <p className="section-tagline">{tagline}</p>

      <div className="section-actions">
        <Button type="primary">{btnPrimary}</Button>
        {btnDefault && <Button>{btnDefault}</Button>}
      </div>
    </div>
  );
};

export default SectionContent;
