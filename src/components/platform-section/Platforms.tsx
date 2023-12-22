import React from "react";
import { Button, Tag } from "antd";
import "./Platforms.scss";
import { ReactComponent as Apple } from "../../assets/images/download-page/platform-section/apple.svg";
import { ReactComponent as Windows } from "../../assets/images/download-page/platform-section/windows.svg";
import { ReactComponent as Mac } from "../../assets/images/download-page/platform-section/mac.svg";
import { ReactComponent as Android } from "../../assets/images/download-page/platform-section/android.svg";
import Platform from "./platform/Platform";
import ScrollArrows from "../scroll-arrows/ScrollArrows";

const platformData = [
  { Icon: Apple, tag: "updated", color: "orange", hasAction: false },
  { Icon: Windows, tag: "coming soon", color: "green", hasAction: false },
  { Icon: Mac, tag: "coming soon", color: "pink", hasAction: false },
  { Icon: Apple, tag: "coming soon", color: "blue", hasAction: true },
  { Icon: Android, color: "purple", hasAction: false },
];

const platformList = document.getElementsByClassName("platforms");
const Platforms = () => {
  return (
    <>
      <div className="platforms">
        {platformData.map((data, idx) => (
          <Platform key={idx} {...data} />
        ))}
      </div>
      <ScrollArrows list={platformList} />
    </>
  );
};

export default Platforms;
