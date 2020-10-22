import React from "react";
import "./Contact.css";
import axios from "axios";

class Contact extends React.Component {
	state = {
		name: "",
		lastname: "",
		email: "",
		message: "",
		sent: false,
	};

	componentDidMount() {
		window.scrollTo(0, 0);
	}

	// HANDLE INPUTS
	handleName = (e) => {
		this.setState({
			name: e.target.value,
		});
	};

	handleLastName = (e) => {
		this.setState({
			lastname: e.target.value,
		});
	};

	handleEmail = (e) => {
		this.setState({
			email: e.target.value,
		});
	};

	handleMessage = (e) => {
		this.setState({
			message: e.target.value,
		});
	};

	// END OF HANDLE INPUTS
	formSubmit = (e) => {
		e.preventDefault();

		this.postContactForm();
	};

	postContactForm = () => {
		const data = {
			name: this.state.name,
			lastsname: this.state.lastname,
			email: this.state.email,
			message: this.state.message,
		};

		let apiUrl = null;
		if (Math.random() < 0.5) {
			apiUrl = "https://formspree.io/xknpnbpw";
		} else {
			apiUrl = "https://formkeep.com/f/b260984f95b2";
		}
		axios
			.post(apiUrl, data)
			.then((res) => {
				this.setState({
					sent: true,
				});
			})
			.catch(() => {
				console.log("message not sent");
			});
	};

	// FOR RESETING INTIAL DATA
	resetForm = () => {
		this.setState({
			name: "",
			lastname: "",
			email: "",
			message: "",
		});
		setTimeout(() => {
			this.setState({
				sent: false,
			});
		});
	};

	render() {
		return (
			<form className="container">
				<legend className="contact__legend">Contact us</legend>

				<div className="email__link__wrapper">
					<a className="email__link" href="mailto:codeteam35@gmail.com">
						<i className="mail__icon fas fa-envelope"></i>Send us an email
					</a>
				</div>

				{/* SINGLE ITEM */}
				<div className="single__item">
					<label className="contact__label" htmlFor="name">
						Name
					</label>
					<input
						className="contact__input"
						type="text"
						name="name"
						placeholder="your name..."
						value={this.state.name}
						onChange={this.handleName}
					></input>
				</div>

				{/* END OF SINGLE ITEM */}
				{/* SINGLE ITEM */}
				{/* <div className="single__item">
					<label className="contact__label" htmlFor="lastname">
						Last Name
					</label>
					<input
						className="contact__input"
						type="text"
						name="lastname"
						placeholder="your last name..."
						value={this.state.lastname}
						onChange={this.handleLastName}
					></input>
				</div> */}

				{/* END OF SINGLE ITEM */}
				{/* SINGLE ITEM */}
				<div className="single__item">
					<label className="contact__label" htmlFor="email">
						E-Mail
					</label>
					<input
						className="contact__input"
						type="text"
						name="email"
						placeholder="your email..."
						value={this.state.email}
						onChange={this.handleEmail}
						required
					></input>
				</div>
				{/* END OF SINGLE ITEM */}
				{/* SINGLE ITEM */}
				<div className="textArea single__item">
					<label className="contact__label" htmlFor="message">
						Message
					</label>
					<textarea
						className="contact__textarea"
						name="message"
						id=""
						cols="30"
						rows="5"
						placeholder="your message..."
						value={this.state.message}
						onChange={this.handleMessage}
					></textarea>
				</div>
				{/* END OF SINGLE ITEM */}
				<div className={this.state.sent ? "msg msgAppear" : "msg"}>
					Message has been sent
				</div>

				<button
					className="contact__button"
					type="submit"
					onClick={this.formSubmit}
				>
					Send
				</button>
			</form>
		);
	}
}

export default Contact;
