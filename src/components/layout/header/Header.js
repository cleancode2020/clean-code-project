import React from "react";
import logo from "../../../assets/icons/black-dot.png";
import "./header.css";

function Header() {
	return (
        <header className="Header">
            <img className="header__img" src={logo} alt="logo"/>
			<h1 className="header__h1">Clean Code</h1>
		</header>
	);
}

export default Header;
