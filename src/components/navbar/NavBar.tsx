import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import "./NavBar.scss";
import { ReactComponent as LogoImg } from "../../assets/images/logo.svg";
import { ReactComponent as LogoIcon } from "../../assets/images/logo-icon.svg";
import { ReactComponent as BurgerIcon } from "../../assets/images/hamburger.svg";
import NavMenu from "./NavMenu";
import SocialLinks from "./SocialLinks";

const NavBar = () => {
  const toggleNavMenu = () => {
    const navMenu = document.querySelector(".header-menu");
    navMenu?.classList.toggle("side-menu");
    console.log("he");
  };
  return (
    <header>
      <div className="header container flex">
        <Link to={"/"} className="header-logo-link">
          <div className="header-logo flex ">
            <LogoIcon />
            <LogoImg />
          </div>
        </Link>
        <NavMenu />
        <SocialLinks />
        <Button className="header-btn">Get free trial</Button>

        <div className="header-toggle-icon" onClick={toggleNavMenu}>
          <BurgerIcon />
        </div>
      </div>
    </header>
  );
};

export default React.memo(NavBar);
