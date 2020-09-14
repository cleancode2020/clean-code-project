import React from "react";
import { NavLink } from 'react-router-dom'
import logo from "../../../assets/icons/black-dot.png";
import "./footer.css";

function Footer() {
	return (
		<footer className="Footer">
			<img className="footer__img" src={logo} alt="logo" />
			<h2 className="footer__h1">Clean Code Footer</h2>
			<nav>
				<ul>
					<li><NavLink to="/about" exact activeClassName="footer__active">About</NavLink></li>
					<li><NavLink to="/contact" exact activeClassName="footer__active">Contact</NavLink></li>
					<li><NavLink to="/dataprotection" exact activeClassName="footer__active">Data protection</NavLink></li>
					<li><NavLink to="/impressum" exact activeClassName="footer__active">Impressum</NavLink></li>
				</ul>
			</nav>
		</footer>
	);
}

export default Footer;
