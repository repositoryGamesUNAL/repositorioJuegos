import React from "react";
import { layoutProps } from "./layout.type";
import Footer from "../../molecules/footer";
import "./layout.model.scss";
import { Header } from "../../molecules/header";

const Layout: React.FC<layoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Header/>
      <main className="layout__main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
