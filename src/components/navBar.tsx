import { FC } from "react";
import { Link } from "react-router-dom";

import './navBar.css'

export const NavBar: FC = () => {
	return (
		<nav className="navBar">
			<div className="navBar-div">
				<Link to="/" className="navBar-link">Home</Link>
				<Link to="/events" className="navBar-link">Eventos</Link>
				<Link to="/about" className="navBar-link">Sobre</Link>
				<Link to="/profile" className="navBar-link">Sua Conta</Link>
			</div>
		</nav>
	);
};