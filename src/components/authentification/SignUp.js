import React from "react";
import Modal from "react-modal";
import "./signUp.css";
import SignUpForm from "./SignUpForm";

function SignUp(props) {
  return (
    <>
      {/* OPEN SIGNUP MODAL BUTTON*/}
      <button
        className="modal__button modal__button__login"
        onClick={props.openModal}
      >
        SIGN UP
      </button>

      {/* SIGNUP MODAL*/}
      <Modal isOpen={props.modalIsOpen} onRequestClose={props.closeModal}>
        {/* CLOSE SIGNUP MODAL BUTTON*/}
        <button
          className="modal__button  modal__button__close"
          onClick={props.closeModal}
        >
          x
        </button>

        {/* SIGNUP FORM COMPONENT*/}
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
