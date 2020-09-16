import React from "react";
import "./readposts.css";
import { Route, Link } from "react-router-dom";
import Userpost from "./Userpost";
// import Codeblock from "./Codeblockread";

class Readposts extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			postsData: "",
		};

		this.getFirebase = this.getFirebase.bind(this);
	}
	componentDidMount() {
		this.getFirebase();
	}

	// POST FIREBASE
	async getFirebase() {
		const requestOptions = {
			method: "GET",
			redirect: "follow",
			headers: {
				"Content-Type": "application/json",
			},
		};

		await fetch(
			`${this.props.firebase.databaseURL}/cleancode/posts.json`,
			requestOptions
		)
			.then((response) => response.json())
			.then((result) => {
				this.setState({
					postsData: result,
				});
			})
			.catch((error) => console.log("error:", error));
	}

	render() {
		if (this.state.postsData) {
			const postsData = this.state.postsData;
			// const postItem = postsData.map((item) => {
			// 	return item;
			// });
			// console.log(postItem);
			const postsDataArrayZero = Object.keys(postsData)[0];
			const objectData = postsData[postsDataArrayZero];
			const postsDataArrayValue = Object.values(objectData);
			// console.log(postsDataArrayValue);
			// const postsDataArrayKeys = Object.keys(objectData);
		}

		return (
			<section className="readposts-section">
				<ul className="posts__ul">
					{/* POST */}
					<Route path="/userpost">
						<Userpost />
					</Route>

					{/* {this.postsDataArrayValue.map((item) => (
						<li>{item}</li>
					))} */}

					{/* POST 1 */}
					<Link className="nav__link" to="/userpost">
						<li className="posts__li">
							<h2 className="article-h2">Title</h2>
							<p className="article-p">#js</p>
							<p className="article-p">#React</p>
							<h3 className="article-h3">User 1</h3>
						</li>
					</Link>

					{/* POST 1 */}

					<Link className="nav__link" to="/userpost">
						<li className="posts__li">
							<h2 className="article-h2">Title</h2>
							<p className="article-p">#js</p>
							<p className="article-p">#React</p>
							<h3 className="article-h3">User 2</h3>
						</li>
					</Link>

					{/* POST 1 */}

					<Link className="nav__link" to="/userpost">
						<li className="posts__li">
							<h2 className="article-h2">Title</h2>
							<p className="article-p">#js</p>
							<p className="article-p">#React</p>
							<h3 className="article-h3">User 3</h3>
						</li>
					</Link>
				</ul>
			</section>
		);
	}
}

export default Readposts;
