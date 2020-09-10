import React from "react";
import Modal from "react-modal";
import "./signUp.css";
import SignUpForm from "./SignUpForm";

function SignUp(props) {
	return (
		<>
			{/* OPEN SIGNUP MODAL BUTTON*/}
			<button
				className="modal-button modal-button-login"
				onClick={props.openModal}
			>
				SIGN UP
			</button>

			{/* SIGNUP MODAL*/}
			<Modal isOpen={props.modalIsOpen} onRequestClose={props.closeModal}>
				{/* CLOSE SIGNUP MODAL BUTTON*/}
				<button
					className="modal-button  modal-button-close"
					onClick={props.closeModal}
				>
					x
				</button>

				{/* SIGNUP FORM COMPONENT*/}
				<SignUpForm
					setUser={props.setUser}
					fetchFirebase={props.fetchFirebase}
				/>
			</Modal>
		</>
	);
}

export default SignUp;
