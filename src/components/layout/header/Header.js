import React from "react";
import logo from "../../../assets/icons/black-dot.png";
import "./header.css";

// import LogIn from "../auth/Login";
import SignUp from "../../authentification/SignUp";
// import LogOut from "../auth/LogOut";

function Header(props) {
	return (
		<header className="Header">
			<img className="header__img" src={logo} alt="logo" />
			<h1 className="header__h1">Clean Code</h1>

			<SignUp
				fetchFirebase={props.fetchFirebase}
				openModal={props.openModal}
				closeModal={props.closeModal}
				modalIsOpen={props.modalIsOpen}
				setUser={props.setUser}
			/>

			{/* HEADER DIV RIGHT */}
			{/* HEADER LOGOUT OR LOGIN/SIGN UP*/}
			{/* <div className="header-sub-div header-sub-div-right">
				{props.user ? (
					<>
						<LogOut setUser={props.setUser} />
					</>
				) : (
					<>
						<LogIn
							setUser={props.setUser}
							fetchFirebase={props.fetchFirebase}
						/>
						<SignUp
							setUser={props.setUser}
							fetchFirebase={props.fetchFirebase}
						/>
					</>
				)}
			</div> */}
		</header>
	);
}

export default Header;
