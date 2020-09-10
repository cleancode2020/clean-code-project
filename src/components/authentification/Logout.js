import React from "react";

class LogOut extends React.Component {
	constructor(props) {
		super(props);
		this.logoutFirebase = this.logoutFirebase.bind(this);
	}

	// LOGOUT FIREBASE
	logoutFirebase() {
		this.props.setUser(null);
	}

	render() {
		return (
			<>
				{/* LOGOUT BUTTON */}
				<button
					className="modal-button modal-button-login"
					onClick={this.logoutFirebase}
				>
					LOG OUT
				</button>
			</>
		);
	}
}

export default LogOut;
