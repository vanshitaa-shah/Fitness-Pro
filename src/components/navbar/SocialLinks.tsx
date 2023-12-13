import React from "react";
import { ReactComponent as FacebookIcon } from "../../assets/images/social-logos/facebook.svg";
import { ReactComponent as TwitterIcon } from "../../assets/images/social-logos/twitter.svg";
import { ReactComponent as InstaIcon } from "../../assets/images/social-logos/instagram.svg";

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
