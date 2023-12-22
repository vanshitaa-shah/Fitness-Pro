import { Button, Tag } from "antd";
import React from "react";
import "./Platform.scss";

interface PlatformProps {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  tag?: string;
  color: string;
  hasAction: boolean;
}

const Platform = ({ Icon, tag, color, hasAction }: PlatformProps) => {
  const tagColor = tag?.toLowerCase() === "coming soon" ? "success" : "";
  return (
    <div className="platform flex">
      <div className={`icon-container flex ${color}`}>
        <Icon />
      </div>
      <div className="platform-info flex">
        {tag && <Tag className={tagColor}>{tag}</Tag>}
        <p className="large-600">Fitness Pro for Mac OS</p>
        <p className="small-light">We realize ideas from simple.</p>
        {hasAction && (
          <Button type="primary" className="platform-action flex">
            <span>Download</span>
            <span className="arrow">&darr;</span>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Platform;
