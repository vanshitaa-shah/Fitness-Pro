import React from "react";
import { ReactComponent as FacebookIcon } from "../../assets/images/facebook.svg";
import { ReactComponent as TwitterIcon } from "../../assets/images/twitter.svg";
import { ReactComponent as InstaIcon } from "../../assets/images/instagram.svg";

const SocialLinks = () => {
  return (
    <div className="header-links flex">
      <FacebookIcon />
      <TwitterIcon />
      <InstaIcon />
    </div>
  );
};

export default SocialLinks;
