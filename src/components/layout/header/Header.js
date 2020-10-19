import React from "react";
import logo from "../../../assets/icons/logo.png";
import "./header.css";
import { Link } from "react-router-dom";
import LogIn from "../../authentification/LogIn";
import SignUp from "../../authentification/SignUp";
import LogOut from "../../authentification/LogOut";
import Searchbar from "./Searchbar";
import Modal from "react-modal";
import imgInfo from "../../../assets/info.png";

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
      {/* <ul className="nav__logo">
				<li className="nav__li">
					<Link className="nav__link" to="/">
						<img className="header__img" src={logo} alt="logo" />
						<h1 className="header__h1">Cleancode</h1>
					</Link>
				</li>
				
			</ul> */}
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
            <Link className="nav__link" to="/">
              <img className="header__img" src={logo} alt="logo" />
              <h1 className="header__h1">Cleancode</h1>
            </Link>
          </li>
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

      <div className="nav__search">
        <div className="nav__searchbar">
          <Searchbar
            searchInput={props.searchInput}
            inputHandleChange={props.inputHandleChange}
            onBtnSubmit={props.onBtnSubmit}
          />

          {/* HEADER INFO */}

          <div className="header__info">
            <span onClick={() => openInfoModal()}>
              <i className="far fa-question-circle"></i>
            </span>
            <Modal
              className="modal__info"
              isOpen={isInfoActive}
              onRequestClose={closeInfoModal}
            >
              <button className="close__info" onClick={closeInfoModal}>
                x
              </button>
              <div className="info__text">
                <p>
                  Cleancode is a web platform to exchange about clean coding and
                  everything around it.
                </p>
                <p>
                  Register, post working code and ask anything you want about
                  clean coding, conventions, naming, refactoring or related
                  topic. Or respond to existing posts and exchange with the
                  community.
                </p>
                <img className="info__imgcodes" src={imgInfo} alt="info" />
              </div>
            </Modal>
          </div>
        </div>
      </div>

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
