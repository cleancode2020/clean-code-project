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
		let post = [];
		let postsDataArrayValue = [];
		if (this.state.postsData) {
			const postsData = this.state.postsData;
			const postsDatakeys = Object.keys(postsData);
			for (post of postsDatakeys) {
				const objectData = postsData[post];
				if (typeof objectData === "object") {
					const postsValuesArray = Object.values(objectData);
					postsDataArrayValue = postsValuesArray;
					console.log(postsDataArrayValue);
				}
			}
		}
		return (
			<section className="readposts-section">
				<ul className="posts__ul">
					{/* POST */}
					<Route path="/userpost">
						<Userpost />
					</Route>

					{postsDataArrayValue.map((item, index) => (
						<Link className="nav__link" to="/userpost">
							<li className="posts__li" key={index}>
								<h2 className="article-h2">{item}</h2>
								<p className="article-p">{item}</p>
								<p className="article-p">{item}</p>
								<h3 className="article-h3">{item}</h3>
							</li>
						</Link>
					))}
				</ul>
			</section>
		);
	}
}

export default Readposts;
