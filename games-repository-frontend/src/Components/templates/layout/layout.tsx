import React from "react";
import { layoutProps } from "./layout.type";
import Navbar from "../../pruebas/Navbar";
import Footer from "../../pruebas/Footer";
import "./layout.model.scss";


const Layout: React.FC<layoutProps> = ({ children }) => {
	return (
		<>
			<Navbar/>
			<main>
				{children}
			</main>
			<Footer/>
		</>
	);
};

export default Layout;