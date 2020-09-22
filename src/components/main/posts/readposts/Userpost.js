import React from "react";
import Codeblock from "./Codeblockread";

const Userpost = (props) => {
	console.log(props.currentPost);
	return (
		<div className="post__div">
			{/* CLOSE BUTTON  */}
			<button className="nav__link nav__close" onClick={props.reloadPage}>
				x
			</button>

			{/* TITLE */}
			<h3 className="posts__h3">{props.currentPost[5]}</h3>

			{/* CATEGORIES */}
			<div className="vote__wrapper">
				<h4 className="posts__p">
					{props.currentPost[2] ? `#${props.currentPost[2]}` : null}
				</h4>
				<h4 className="posts__p">
					{props.currentPost[4] ? `#${props.currentPost[4]}` : null}
				</h4>
			</div>

			{/* VOTES */}
			<div className="vote__wrapper">
				<p className="count__p">
					<span>0</span>
					<span aria-label="Thumbs Up" role="img">
						👍
					</span>
				</p>
				<p className="count__p">
					<span>0</span>
					<span aria-label="Thumbs Down" role="img">
						👎
					</span>
				</p>
			</div>

			{/* ARTICLE */}
			<p className="posts__art">{props.currentPost[1]}</p>

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
