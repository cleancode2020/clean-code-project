import React from "react";
import { Link } from "react-router-dom";
// import logo from "../../../assets/icons/black-dot.png";
import "./footer.css";

function Footer() {
	return (
		<footer className="Footer">
			<nav>
				<ul>
					<li>
						<Link className="footer__name" to={`/about`}>
							<i className="fas fa-users icon"></i> About
						</Link>
					</li>
					<li>
						<Link className="footer__name" to="/contact">
							<i className="far fa-envelope icon"></i> Contact
						</Link>
					</li>
					<li>
						<Link className="footer__name" to="/privacy">
							<i className="fas fa-user-shield icon"></i> Privacy
						</Link>
					</li>
					<li>
						<Link className="footer__name" to="/impressum">
							<i className="fas fa-map-marker-alt icon"></i> Impressum
						</Link>
					</li>
				</ul>
			</nav>
		</footer>
	);
}

export default Footer;
