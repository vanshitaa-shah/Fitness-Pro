import React from "react";
import "./Footer.scss";

import { ReactComponent as LogoIcon } from "../../assets/images/logo-icon.svg";
import { Link } from "react-router-dom";
import { Button, Collapse, Input } from "antd";
import CopyrightSection from "./copyright-section/CopyrightSection";
import Logo from "../navbar/Logo";

const footerLinks = [
  {
    name: "Lifestyle",
    link: "/lifestyle",
  },
  {
    name: "Pricing",
    link: "/pricing",
  },
  {
    name: "Class",
    link: "/",
  },
  {
    name: "Features",
    link: "/features",
  },
  {
    name: "Download",
    link: "/download",
  },
];

const items = [
  {
    key: "1",
    label: (
      <>
        <p className="small-bold">footer nav</p>
      </>
    ),
    children: (
      <>
        <div className="section-mobile-nav flex">
          {footerLinks.map((item) => (
            <Link className="bold" key={item.name} to={item.link}>
              {item.name}
            </Link>
          ))}
        </div>
      </>
    ),
  },
];

const Footer = () => {
  return (
    <>
      <footer>
        <div className="section-footer-container">
          <div className="container section-footer ">
            <div className="section-footer-logo">
              <LogoIcon />
            </div>

            <div className="mobile-logo">
              <Logo />
            </div>
            <div className="section-footer-lifestyle flex">
              {footerLinks.map((item) => (
                <Link className="bold" key={item.name} to={item.link}>
                  {item.name}
                </Link>
              ))}
            </div>

            <Collapse
              className="mobile-footer-nav"
              defaultActiveKey={["0"]}
              expandIconPosition="end"
              items={items}
            ></Collapse>

            <div className="section-footer-contact flex">
              <p className="small-bold">contact</p>
              <div className="contact-info flex">
                <p className="small-light">43252 Borer Mountains</p>
                <p className="small-light">Zackerychester</p>
                <p className="small-light">Bahamas</p>
                <p className="small-light">732-528-4945</p>
              </div>
            </div>

            <div className="section-footer-newsletter flex">
              <p className="small-bold">newsletter</p>
              <div className="newsletter-info">
                <p className="small-light">
                  Subscribe our newsletter to get more free design course and
                  resource.
                </p>

                <Input
                  placeholder="Enter your email"
                  className="search"
                  size="large"
                  suffix={
                    <Button className="search-btn" type="primary">
                      <span className="">&rarr;</span>
                    </Button>
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <CopyrightSection />
      </footer>
    </>
  );
};

export default Footer;
