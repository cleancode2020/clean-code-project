import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/icons/black-dot.png";
import "./footer.css";

function Footer() {
	return (
		<footer className="Footer">
			<nav>
				<ul>
				{/*
					<li>
						<Link className="footer__main" to="/">
							<img className="footer__img" src={logo} alt="logo" />
							<h2 className="footer__h1">cleancode</h2>
						</Link>						
					</li>
					*/}
					<li><Link className="footer__name" to="/about"><i class="fas fa-users icon"></i> About</Link></li>
					<li><Link className="footer__name" to="/contact"><i class="far fa-envelope icon"></i> Contact</Link></li>
					<li><Link className="footer__name" to="/privacy"><i class="fas fa-user-shield icon"></i> Privacy</Link></li>
					<li><Link className="footer__name" to="/impressum"><i class="fas fa-map-marker-alt icon"></i> Impressum</Link></li>
				</ul>
			</nav> 
		</footer>
	);
}

export default Footer;
