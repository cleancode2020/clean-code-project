import React from "react";
import logo from "../../../assets/icons/black-dot.png";
import "./header.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import LogIn from "../../authentification/LogIn";
import SignUp from "../../authentification/SignUp";
import LogOut from "../../authentification/LogOut";

function Header(props) {
	return (
		<header className="Header">
			<img className="header__img" src={logo} alt="logo" />
			<h1 className="header__h1">Clean Code</h1>

			{/* HEADER DIV RIGHT */}
			{/* HEADER LOGOUT OR LOGIN/SIGN UP*/}
			{props.user ? (
				<LogOut setUser={props.setUser} />
			) : (
				<>
					<LogIn fetchFirebase={props.fetchFirebase} setUser={props.setUser} />

					<SignUp
						fetchFirebase={props.fetchFirebase}
						openModal={props.openModal}
						closeModal={props.closeModal}
						modalIsOpen={props.modalIsOpen}
						setUser={props.setUser}
						firebase={props.firebase}
						user={props.user}
					/>
				</>
			)}
		</header>
	);
}

export default Header;
