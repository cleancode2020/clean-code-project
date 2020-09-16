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
				// FIREBASE RESULT
				// console.log(result);
			})
			.catch((error) => console.log("error:", error));
	}

	render() {
		return (
			<BrowserRouter>
				<main className="main__posts">
					{/* H2 TITLE */}
					<h2 className="h2__posts">Posts</h2>

					<nav className="nav__posts">
						{/* POST LINK */}
						{this.props.user ? (
							<Link className="postaction__link" to="/submit">
								Make a post
							</Link>
						) : null}
					</nav>

					{/* POST COMPONENT */}
					{this.props.user ? (
						<Route path="/submit">
							<Submitpost
								firebase={this.props.firebase}
								user={this.props.user}
							/>
						</Route>
					) : null}

					{/* POST COMPONENT */}
					<Route path="/">
						<Readposts firebase={this.props.firebase} />
					</Route>
				</main>
			</BrowserRouter>
		);
	}
}

export default Posts;
