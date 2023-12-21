import React from "react";
import { Link } from "react-router-dom";

const navLinks = [
  {
    name: "Features",
    link: "/features",
  },
  {
    name: "Pricing",
    link: "/pricing",
  },
  {
    name: "Download",
    link: "/download",
  },
  {
    name: "Lifestyle",
    link: "/lifestyle",
  },
];

const NavMenu = () => {
  console.log("nav-menu");
  return (
    <div className="header-menu flex">
      {navLinks.map((item) => (
        <Link key={item.name} to={item.link}>
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default NavMenu;
