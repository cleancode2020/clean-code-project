import React from "react";
import "./readposts.css";
import { Route, Link } from "react-router-dom";
import Userpost from "./Userpost";

class Readposts extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		this.props.getFirebase();
	}

	render() {
		// DATA
		let posts = [];
		if (this.props.allPostsObject) {
			const allPostsObject = this.props.allPostsObject;
			const allPostsObjectKeys = Object.keys(allPostsObject);
			for (let key of allPostsObjectKeys) {
				const objectData = allPostsObject[key];
				if (typeof objectData === "object") {
					const postsValuesArray = Object.values(objectData);
					posts.unshift(postsValuesArray);
				}
			}
		}

		return (
			<section className="readposts-section">
				<ul className="posts__ul">
					{/* POST */}
					<Route path="/userpost">
						<Userpost posts={posts} />
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
