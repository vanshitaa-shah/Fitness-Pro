import React from "react";
import { Button } from "antd";
import "./NavBar.scss";

import { ReactComponent as BurgerIcon } from "../../assets/images/hamburger.svg";

import NavMenu from "./NavMenu";
import SocialLinks from "./SocialLinks";
import { ThemeMode } from "./theme-mode/ThemeMode";
import Logo from "./Logo";

const NavBar = () => {
  const toggleNavMenu = () => {
    const navMenu = document.querySelector(".header-menu");
    navMenu?.classList.toggle("side-menu");
  };
  return (
    <header>
      <div className="header container flex">
        <Logo />
        <NavMenu />
        <SocialLinks />
        <Button className="header-btn">Get free trial</Button>

        <ThemeMode />
        <div className="header-toggle-icon" onClick={toggleNavMenu}>
          <BurgerIcon />
        </div>
      </div>
    </header>
  );
};

export default React.memo(NavBar);
