import React, { ReactNode } from "react";
import NavBar from "../components/navbar/NavBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default Layout;
