import React from "react";
import "./main.css";
import firebase from "../../constants/Firebase";
import RouteFooter from "../routes/RouteFooter";

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.handleChange = this.handleChange.bind(this);
		this.fetchFirebase = this.fetchFirebase.bind(this);
	}

	// HANDLE CHANGE BUTTON ONCLICK
	handleChange() {
		this.fetchFirebase();
	}

	// FETCH FIREBASE
	async fetchFirebase() {
		const requestOptions = {
			method: "GET",
			redirect: "follow",
		};

		await fetch(`${firebase.databaseURL}/.json`, requestOptions)
			// PARSE JSON HTTP RESPONSE TO TRANSFORM INTO JS OBJECT
			.then((response) => response.json())
			.then((result) => {
				// FIREBASE RESULT		console.log("gerne");
				console.log("FIREBASE RESULT");
				console.log(result);
			})
			.catch((error) => console.log("error:", error));
	}

	render() {
		return (
			<main className="Main">
				{/* FIREBASE RESULT CONSOLE*/}
				<form className="form__test" action="#">
					<label htmlFor="#">console: </label>
					<button onClick={this.handleChange}>FIREBASE RESULT</button>
				</form>
				{/* CONNECT ROUTER FOOTER */}
				<RouteFooter />
			</main>
		);
	}
}

export default Main;
