import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.module.scss';

const Navbar: React.FC = () => {
  return (
    <nav>
		<ul>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/about">About</Link>
			</li>
			<li>
				<Link to="/contact">Contact</Link>
			</li>
			<li>
				<Link to="/game/create">Game form</Link>
			</li>
		</ul>
    </nav>
  );
};

export default Navbar;