import React from "react";
import "./readposts.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Codeblock from "./Codeblockread";

const Readposts = () => {
	return (
		<section className="readposts-section">
			<Link className="nav__link__posts" to="/">
				close x
			</Link>
			{/* LEGEND */}
			<h3 className="posts__h3">user36</h3>

			{/* ARTICLE */}
			<h4 className="posts__h4">article title</h4>
			<p className="posts__p">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat est
				dolor harum ea cum voluptas aperiam cupiditate delectus? Ut, voluptatum
				rem consequuntur voluptas maiores sunt praesentium quos eaque, laborum
				sint quae itaque quibusdam odit quidem consequatur ad debitis nesciunt
				cumque hic nisi illum eius nulla placeat tempora! Consectetur, cum
				debitis.
			</p>

			{/* CODEBLOCK */}
			<h4 className="posts__h4">codeblock</h4>
			<span className="codeblock__span__posts">
				<Codeblock />
			</span>
		</section>
	);
};

export default Readposts;
