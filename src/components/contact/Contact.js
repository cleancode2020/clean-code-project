import React from "react";
import "./Contact.css";
import axios from "axios";

class Contact extends React.Component {
	state = {
		name: "",
		email: "",
		message: "",
		sent: false,
	};

	componentDidMount() {
		window.scrollTo(0, 0);
	}

	// HANDLE NAME INPUT
	handleName = (e) => {
		this.setState({
			name: e.target.value,
		});
	};

	// HANDLE EMAIL INPUT
	handleEmail = (e) => {
		this.setState({
			email: e.target.value,
		});
	};

	// HANDLE MESSAGE INPUT
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

				<div className="contactform__flexwrapper">
					<div className="email__link__wrapper">
						<a className="email__link" href="mailto:codeteam35@gmail.com">
							<i className="mail__icon fas fa-envelope"></i>Send us an email
						</a>
					</div>

					{/* NAME */}
					<div className="single__item">
						<label className="contact__label" htmlFor="name">
							Name
						</label>
						<input
							className="contact__input"
							type="text"
							name="name"
							placeholder="Tom42"
							value={this.state.name}
							onChange={this.handleName}
						></input>
					</div>

					{/* EMAIL */}
					<div className="single__item">
						<label className="contact__label" htmlFor="email">
							E-Mail
						</label>
						<input
							className="contact__input"
							type="text"
							name="email"
							placeholder="ex@mail.com"
							value={this.state.email}
							onChange={this.handleEmail}
							required
						></input>
					</div>

					{/* MESSAGE */}
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
							placeholder=""
							value={this.state.message}
							onChange={this.handleMessage}
						></textarea>
					</div>
					{/* END OF SINGLE ITEM */}
					<p className={this.state.sent ? "msg msgAppear" : "msg"}>
						Message has been sent
					</p>

					<button
						className="contact__button"
						type="submit"
						onClick={this.formSubmit}
					>
						Send
					</button>
				</div>
			</form>
		);
	}
}

export default Contact;
