import React from "react";
import { Link } from "react-router-dom";
import Codeblock from "./Codeblockread";

const Userpost = (props) => {
	console.log(props.currentPost);
	return (
		<div className="post__div">
			<button className="nav__link nav__close" onClick={props.reloadPage}>
				x close
			</button>
			{/* <Link className="nav__link nav__close" to="/">
				x close
			</Link> */}

			{/* TITLE */}
			<h3 className="posts__h3">{props.currentPost[5]}</h3>

			{/* CATEGORIES */}
			<h4 className="posts__p">{props.currentPost[2]}</h4>
			<h4 className="posts__p">{props.currentPost[4]}</h4>

			{/* ARTICLE */}
			<p className="posts__p">{props.currentPost[1]}</p>

			{/* CODEBLOCK */}
			<h4 className="posts__h4">Code:</h4>
			<span className="codeblock__span">
				<Codeblock currentPost={props.currentPost} />
			</span>

			{/* USER NAME */}
			<p className="user__name">{props.currentPost[6]}</p>
		</div>
	);
};

export default Userpost;
