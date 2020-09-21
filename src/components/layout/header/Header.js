import React from "react";
import logo from "../../../assets/icons/black-dot.png";
import "./header.css";
import { Link } from "react-router-dom";
import LogIn from "../../authentification/LogIn";
import SignUp from "../../authentification/SignUp";
import LogOut from "../../authentification/LogOut";

function Header(props) {
  return (
    <header className="Header">
      {/* HAMBURGER LOGO */}
      <ul className="nav__logo">
        <li className="nav__li">
          <Link className="nav__link" to="/">
            <img className="header__img" src={logo} alt="logo" />
            <h1 className="header__h1">cleancode</h1>
          </Link>
        </li>
      </ul>
      {/* HEADER NAV LEFT */}
      <nav className="nav__tag">
        <input type="checkbox" id="menuCheckbox" />
        <label htmlFor="menuCheckbox">
          <div></div>
          <div></div>
          <div></div>
        </label>
        <ul className="nav__ul">
          <li className="nav__li">
            <Link className="nav__link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="nav__li">
            <Link className="nav__link" to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <div className="header__left">
        {/* HEADER DIV RIGHT */}
        {/* HEADER LOGOUT OR LOGIN/SIGN UP*/}
        {props.user ? (
          <LogOut setUser={props.setUser} />
        ) : (
          <>
            <LogIn
              fetchFirebase={props.fetchFirebase}
              setUser={props.setUser}
            />

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
      </div>
    </header>
  );
}

export default Header;
