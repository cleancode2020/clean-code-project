import React from "react";
import "./posts.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import firebase from "../../../constants/Firebase";
import Submitpost from "./submitpost/Submitpost";
import Readposts from "./readposts/Readposts";

class Posts extends React.Component {
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
	submitpost;

	render() {
		return (
			<main className="main__posts">
				{/* FIREBASE RESULT CONSOLE*/}
				{/* <form className="form__test" action="#">
					<label htmlFor="#">console: </label>
					<button onClick={this.handleChange}>FIREBASE RESULT</button>
				</form> */}

				{/* H2 TITLE */}
				<h2 className="h2__posts">Posts</h2>

				<nav className="nav__posts">
					{/* POST LINK */}
					<Link className="nav__link" to="/submitpost">
						Make a post (click me)
					</Link>

					{/* POST LINK */}
					<Link className="nav__link" to="/readposts">
						Read posts (click me)
					</Link>
				</nav>

				{/* POST Component */}
				<Route path="/submitpost">
					<Submitpost />
				</Route>

				{/* POST Component */}
				<Route path="/readposts">
					<Readposts />
				</Route>
			</main>
		);
	}
}

export default Posts;
