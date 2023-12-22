import React from "react";
import { Link, useLocation } from "react-router-dom";

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
  const pathName = useLocation().pathname;
  console.log(pathName);
  return (
    <div className="header-menu flex">
      {navLinks.map((item) => (
        <Link
          key={item.name}
          className={pathName === item.link ? "active" : ""}
          to={item.link}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default NavMenu;
