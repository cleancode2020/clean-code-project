import React from "react";
import "./readposts.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Userpost from "./Userpost";
import Codeblock from "./Codeblockread";

const Readposts = () => {
	return (
		<section className="readposts-section">
			<ul className="posts__ul">
				{/* POST 1 */}
				<li>
					<Link className="nav__link" to="/userpost">
						<h3>username</h3>
						<p>#js</p>
					</Link>
				</li>

				{/* POST 1 */}
				<li>
					<Link className="nav__link" to="/userpost">
						<h3>username</h3>
						<p>#js</p>
					</Link>
				</li>

				{/* POST 1 */}
				<li>
					<Link className="nav__link" to="/userpost">
						<h3>username</h3>
						<p>#js</p>
					</Link>
				</li>
			</ul>

			<Route path="/userpost">
				<Userpost />
			</Route>
		</section>
	);
};

export default Readposts;
