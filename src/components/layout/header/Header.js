import React from "react";
import logo from "../../../assets/icons/logo.png";
import "./header.css";
import { Link } from "react-router-dom";
import LogIn from "../../authentification/LogIn";
import SignUp from "../../authentification/SignUp";
import LogOut from "../../authentification/LogOut";
import Searchbar from "./Searchbar";
import Modal from "react-modal";
// import imgInfo from "../../../assets/info.png"

function Header(props) {
  const [isInfoActive, setIsInfoActive] = React.useState(false);
  const openInfoModal = () => {
    setIsInfoActive(true);
  };
  const closeInfoModal = () => {
    setIsInfoActive(false);
  };
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
        <label className="burger__label" htmlFor="menuCheckbox">
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
      {/* SEARCH BAR */}
      <Searchbar
        // allPostsObject={props.allPostsObject}
        // result={props.result}
        // loading={props.loading}
        // message={props.message}
        searchInput={props.searchInput}
        inputHandleChange={props.inputHandleChange}
        onBtnSubmit={props.onBtnSubmit}
      />

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
            <div className="nav__stroke"></div>
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
