import React from "react";
import { Tag } from "antd";
import "./Platforms.scss";

const Platforms = () => {
  return (
    <div className="platforms">
      <div className="platform">
        <div className="platform-icon-container">icon</div>
        <div className="platform-info">
          <Tag>Tag 1</Tag>
        </div>
      </div>
    </div>
  );
};

export default Platforms;
