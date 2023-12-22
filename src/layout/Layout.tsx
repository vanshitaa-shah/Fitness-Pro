import React, { ReactNode } from "react";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import { LayoutProps } from "../types/types";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBar />
      {children}

      <Footer />
    </>
  );
};

export default Layout;
