import React from "react";
import "./readposts.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Codeblock from "./Codeblockread";

const Readposts = () => {
	return (
		<section className="readposts-section">
			<ul>
				{/* POST 1 */}
				<li>
					{/* LEGEND */}
					<h3 className="posts__h3">user 1</h3>

					{/* ARTICLE */}
					<h4 className="posts__h4">article title 1</h4>
					<p className="posts__p">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat est
						dolor harum ea cum voluptas aperiam cupiditate delectus? Ut,
						voluptatum rem consequuntur voluptas maiores sunt praesentium quos
						eaque, laborum sint quae itaque quibusdam odit quidem consequatur ad
						debitis nesciunt cumque hic nisi illum eius nulla placeat tempora!
						Consectetur, cum debitis.
					</p>

					{/* CODEBLOCK */}
					<h4 className="posts__h4">codeblock 1</h4>
					<span className="codeblock__span__posts">
						<Codeblock />
					</span>
				</li>

				{/* POST 2 */}
				<li>
					{/* LEGEND */}
					<h3 className="posts__h3">user 2</h3>

					{/* ARTICLE */}
					<h4 className="posts__h4">article title 2</h4>
					<p className="posts__p">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat est
						dolor harum ea cum voluptas aperiam cupiditate delectus? Ut,
						voluptatum rem consequuntur voluptas maiores sunt praesentium quos
						eaque, laborum sint quae itaque quibusdam odit quidem consequatur ad
						debitis nesciunt cumque hic nisi illum eius nulla placeat tempora!
						Consectetur, cum debitis.
					</p>

					{/* CODEBLOCK */}
					<h4 className="posts__h4">codeblock 2</h4>
					<span className="codeblock__span__posts">
						<Codeblock />
					</span>
				</li>

				{/* POST 3 */}
				<li>
					{/* LEGEND */}
					<h3 className="posts__h3">user 3</h3>

					{/* ARTICLE */}
					<h4 className="posts__h4">article title 3</h4>
					<p className="posts__p">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat est
						dolor harum ea cum voluptas aperiam cupiditate delectus? Ut,
						voluptatum rem consequuntur voluptas maiores sunt praesentium quos
						eaque, laborum sint quae itaque quibusdam odit quidem consequatur ad
						debitis nesciunt cumque hic nisi illum eius nulla placeat tempora!
						Consectetur, cum debitis.
					</p>

					{/* CODEBLOCK */}
					<h4 className="posts__h4">codeblock 3</h4>
					<span className="codeblock__span__posts">
						<Codeblock />
					</span>
				</li>
			</ul>
		</section>
	);
};

export default Readposts;
