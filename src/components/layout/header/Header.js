import React from "react";
import logo from "../../../assets/icons/black-dot.png";
import "./header.css";



function Header() {
	return (
        <header className="Header">
			<nav className = "header__navbar">
			{/* LOGO */}
            <img className="header__img" src={logo} alt="logo"/>
			<p className="header__p">Clean Code</p> 
			 
		

			{/* NAVBAR */}
			<ul className ="header__ul">
				<li className="header__about"> About</li>
				<li className="header__contact" >Contact</li>
			</ul>

			{/* SEARCH */}
			
			<form className="header__form">
			<input type="text" value="" placeholder="Search..."/> 	
			<button type="submit" value=""></button>
			</form>
			
			</nav>
				
				{/* LOGIN/LOGOUT */}
				
		</header>
	);
}

export default Header;
