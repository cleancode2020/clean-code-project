import React from "react";
import logo from "../../../assets/icons/black-dot.png";
import "./footer.css";

function Footer() {
	return (
        <footer className="Footer">
            <img className="footer__img" src={logo} alt="logo"/>
			<h2 className="footer__h1">Clean Code</h2>
		</footer>
	);
}

export default Footer;
