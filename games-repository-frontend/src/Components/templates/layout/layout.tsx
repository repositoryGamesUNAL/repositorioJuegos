import React from "react";
import { layoutProps } from "./layout.type";
import Navbar from "../../pruebas/navbar/Navbar";
import Footer from "../../molecules/footer";
import "./layout.model.scss";

const Layout: React.FC<layoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main className="layout__main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
