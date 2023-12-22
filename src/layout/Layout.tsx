import React, { ReactNode } from "react";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";

interface LayoutProps {
  children: ReactNode;
}

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
