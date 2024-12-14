import React from "react";
import { layoutProps } from "./layout.type";
import "./layout.scss";

const Layout: React.FC<layoutProps> = ({ children }) => {
	return (
		<>
			<main>
				{children}
			</main>
		</>
	);
};

export default Layout;