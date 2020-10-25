import React from "react";
import Modal from "react-modal";
import LoginForm from "./LogInForm";

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modalIsOpen: false,
		};
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	// OPEN TAB MODAL
	openModal() {
		this.setState({
			modalIsOpen: true,
		});
	}

	// CLOSE TAB MODAL
	closeModal() {
		this.setState({
			modalIsOpen: false,
		});
	}
	render() {
		return (
			<>
				{/* LOGIN OPEN MODAL BUTTON */}
				<button
					className="modal__button modal__button__login"
					onClick={this.openModal}
				>
					LOG IN
				</button>

				{/* LOGIN MODAL */}
				<Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal}>
					{/* LOGIN CLOSE MODAL BUTTON */}
					<button
						className="modal__button  modal__button__close"
						onClick={this.closeModal}
					>
						<i className="fas fa-times"></i>
					</button>

					<div className="form__flexwrapper">
						{/* LOGIN FORM COMPONENT */}
						<LoginForm
							setUser={this.props.setUser}
							fetchFirebase={this.props.fetchFirebase}
							openModal={this.props.openModal}
							closeModal={this.props.closeModal}
							modalIsOpen={this.props.modalIsOpen}
							firebase={this.props.firebase}
							user={this.props.user}
						/>
					</div>
				</Modal>
			</>
		);
	}
}

export default Login;
