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
				{/* H2 TITLE */}
				<h2 className="h2__categories">Categories</h2>

				<ul className="ul__categories">
					<li><i className="ul__icons fab fa-js"></i>JavaScript</li>
					<li><i className="ul__icons fab fa-java"></i>Java</li>
					<li><i className="ul__icons fab fa-python"></i>Python</li>
					<li><i className="ul__icons fab fa-rust"></i>Rust</li>
					<li className="li__icon"><img className="ul__icons" width="40" src="https://img.icons8.com/ios-filled/50/000000/c-plus-plus-logo.png"/><p>C++</p></li>
				</ul>
			</main>
		);
	}
}

export default Categories;
