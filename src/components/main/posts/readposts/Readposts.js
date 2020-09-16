import React from "react";
import "./readposts.css";
import {  Route, Link } from "react-router-dom";
import Userpost from "./Userpost";
// import Codeblock from "./Codeblockread";

const Readposts = (props) => {
	const firebase = props.firebase;
	console.log(firebase);
	return (
		<section className="readposts-section">
			<ul className="posts__ul">
				{/* POST */}
				<Route path="/userpost">
					<Userpost />
				</Route>

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
};

export default Readposts;
