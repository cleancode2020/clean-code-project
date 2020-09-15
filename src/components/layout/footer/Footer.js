import React from "react";
import { Link } from 'react-router-dom'
import logo from "../../../assets/icons/black-dot.png";
import "./footer.css";

function Footer() {
	return (
		<footer className="Footer">
			<Link className="footer__main" to="/">
				<img className="footer__img" src={logo} alt="logo" />
				<h2 className="footer__h1">cleancode</h2>
			</Link>
			<nav className="footer__nav">
				<ul className="footer__ul">
					<li><Link className="footer__name" to="/about">About</Link></li>
					<li><Link className="footer__name" to="/contact">Contact</Link></li>
					<li><Link className="footer__name" to="/privacy">Privacy</Link></li>
					<li><Link className="footer__name" to="/impressum">Impressum</Link></li>
				</ul>
			</nav>

		</footer>
	);
}

export default Footer;
