import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LogoImg } from "../../assets/images/logo.svg";
import { ReactComponent as LogoIcon } from "../../assets/images/logo-icon.svg";

const Logo = () => {
  return (
    <Link to={"/"} className="header-logo-link">
      <div className="header-logo flex ">
        <LogoIcon />
        <LogoImg />
      </div>
    </Link>
  );
};

export default Logo;
