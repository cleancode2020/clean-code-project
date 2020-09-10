import React from "react";
import logo from "../../../assets/icons/black-dot.png";
import "./footer.css";
import DataProtection from "./dataprotection/DataProtection";
import Impressum from "./impressum/Impressum";


function Footer() {
    return (
        <footer className="Footer">
            <img className="footer__img" src={logo} alt="logo" />
            <h2 className="footer__h1">Clean Code Footer</h2>
            <nav>
            <ul>
                <li>About</li>
                <li>Contact</li>
                <li>Data protection</li>
                <li>Impression</li>
            </ul>
            </nav>
        </footer>
    );
}

export default Footer;