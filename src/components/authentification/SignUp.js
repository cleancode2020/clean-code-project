import React from "react";
import Modal from "react-modal";
import "./signUp.css";
import SignUpForm from "./SignUpForm";

function SignUp(props) {
  return (
    <>
      {/* OPEN SIGN UP MODAL BUTTON*/}
      <button
        className="modal__button modal__button__login"
        onClick={props.openModal}
      >
        SIGN UP
      </button>

      {/* SIGN UP MODAL*/}
      <Modal isOpen={props.modalIsOpen} onRequestClose={props.closeModal}>
        {/* CLOSE SIGNUP MODAL BUTTON*/}
        <button
          className="modal__button  modal__button__close"
          onClick={props.closeModal}
        >
          x
        </button>

        {/* SIGN UP FORM COMPONENT*/}
        <SignUpForm
          firebase={props.firebase}
          setUser={props.setUser}
          fetchFirebase={props.fetchFirebase}
          user={props.user}
          closeModal={props.closeModal}
        />
      </Modal>
    </>
  );
}

export default SignUp;
