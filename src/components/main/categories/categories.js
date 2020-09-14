import React from "react";
import "./categories.css";
import firebase from "../../../constants/Firebase";

class Categories extends React.Component {
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
				console.log(result.categories);
			})
			.catch((error) => console.log("error:", error));
	}

	render() {
		return (
			<main className="main__categories">
				{/* FIREBASE RESULT CONSOLE*/}
				{/* <form className="form__test__cat" action="#">
					<label htmlFor="#">console: </label>
					<button onClick={this.handleChange}>FIREBASE RESULT</button>
				</form> */}

				{/* H2 TITLE */}
				<h2 className="h2__categories">Categories</h2>

				<ul className="ul__categories">
					<li>JavaScript</li>
					<li>Python</li>
					<li>Rust</li>
					<li>C++</li>
				</ul>
			</main>
		);
	}
}

export default Categories;
