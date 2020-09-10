import React from "react";
import firebase from "../../constants/Firebase";
// import "./form.css";

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			error: null,
		};
		this.input = React.createRef();
		this.handleChangeMail = this.handleChangeMail.bind(this);
		this.handleChangePassword = this.handleChangePassword.bind(this);
		this.submitLogin = this.submitLogin.bind(this);
	}

	// FOCUS IN MODAL
	componentDidMount() {
		this.input.current.focus();
	}

	// MAIL LOGIN SET STATE
	handleChangeMail(event) {
		this.setState({
			email: event.target.value,
		});
	}

	// PASSWORD LOGIN SET STATE
	handleChangePassword(event) {
		this.setState({
			password: event.target.value,
		});
	}

	// // SUBMIT LOGIN
	submitLogin(event) {
		event.preventDefault();
		// POST TO FIREBASE FUNCTION
		this.loginFirebase();
	}

	// FETCH FIREBASE LOGIN
	async loginFirebase() {
		const requestOptions = {
			method: "POST",
			redirect: "follow",
			headers: {
				"Content-Type": "application/json",
			},
			// CONVERT STATE IN JSON STRING
			body: JSON.stringify({
				password: this.state.password,
				email: this.state.email,
				returnSecureToken: true,
			}),
		};
		const response = await fetch(
			`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebase.apiKey}`,
			requestOptions
		).then((response) => response.json());

		// VERIFY FIREBASE ERRORS
		if (response.error) {
			this.setState({
				error: response.error,
			});
			this.props.setUser(null);
			return;
		} else {
			this.setState({
				error: null,
			});
			this.props.setUser(response);

			// FETCH AFTER POST TO REFRESH CONTENT
			this.props.fetchFirebase();
		}
	}

	render() {
		return (
			<form className="form-div" action="#">
				{/* LOGIN FORM LEGEND */}
				<legend className="form-legend">LOG IN</legend>

				{/* MAIL LOGIN LABEL */}
				<label className="form-label" htmlFor="category-title">
					Your Mail
				</label>

				{/* MAIL LOGIN INPUT */}
				<input
					required
					className="form-input"
					type="text"
					name="category-title"
					id="category-title"
					placeholder="my.email@ex..."
					value={this.state.email}
					onChange={this.handleChangeMail}
					ref={this.input}
				/>

				{/* PASSWORD LOGIN LABEL */}
				<label className="form-label" htmlFor="category-title">
					Your Password
				</label>

				{/* PASSWORD LOGIN INPUT */}
				<input
					required
					className="form-input"
					type="password"
					name="category-title"
					id="category-title"
					placeholder="my password..."
					value={this.state.password}
					onChange={this.handleChangePassword}
				/>

				{/* FIREBASE ERROR MESSAGE */}
				{this.state.error && (
					<div className="div-correct-length">
						<p className="p-correct-length">
							Error while trying to authenticate: {this.state.error.message}
						</p>
					</div>
				)}

				{/* SUBMIT LOGIN BUTTON */}
				<button className="submit-button" onClick={this.submitLogin}>
					LOG IN
				</button>
			</form>
		);
	}
}

export default LoginForm;
