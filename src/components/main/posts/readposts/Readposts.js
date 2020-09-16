import React from "react";
import "./readposts.css";
import { Route, Link } from "react-router-dom";
import Userpost from "./Userpost";
// import Codeblock from "./Codeblockread";

class Readposts extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			allPostsObject: "",
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
					allPostsObject: result,
				});
			})
			.catch((error) => console.log("error:", error));
		
	}

	render() {
		// let post = [];
		let posts = [];

		if (this.state.allPostsObject) {
			const allPostsObject = this.state.allPostsObject;
			const allPostsObjectKeys = Object.keys(allPostsObject);
			for (let key of allPostsObjectKeys) {
				const objectData = allPostsObject[key];
				if (typeof objectData === "object") {
					const postsValuesArray = Object.values(objectData);
					posts.push(postsValuesArray);
					console.log(posts);
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

					{posts.map((item, index) => (
						<Link className="nav__link" to="/userpost">
							<li className="posts__li" key={index}>
								<h2 className="article-h2">{item[0]}</h2>
								<p className="article-p">{item[1]}</p>
								<p className="article-p">{item[3]}</p>
								<h3 className="article-h3">{item[4]}</h3>
							</li>
						</Link>
					))}
				</ul>
			</section>
		);
	}
}

export default Readposts;
