import React from "react";
import { Link } from 'react-router-dom'
import logo from "../../../assets/icons/black-dot.png";
import "./footer.css";

function Footer() {
	return (
		<footer className="Footer">
			<Link activeClassName="footer__active" to="/">
				<img className="footer__img" src={logo} alt="logo" />
				<h2 className="footer__h1">Clean Code Footer</h2>
			</Link>
			<nav>
				<ul>
					<li><Link activeClassName="footer__active" to="/about">About</Link></li>
					<li><Link activeClassName="footer__active" to="/contact">Contact</Link></li>
					<li><Link activeClassName="footer__active" to="/privacy">Privacy</Link></li>
					<li><Link activeClassName="footer__active" to="/impressum">Impressum</Link></li>
				</ul>
			</nav>

		</footer>
	);
}

export default Footer;
