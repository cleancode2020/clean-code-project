import React from "react";
import "./post.css";
import Codeblock from "./Codeblock";

const Post = () => {
	return (
		<form className="post__form">
			{/* LEGEND */}
			<legend className="post__legend">Make a post</legend>

			{/* ARTICLE */}
			<label className="post__label" htmlFor="#">
				Article:
			</label>
			<textarea
				className="post__textarea"
				name="article"
				id=""
				cols="30"
				rows="10"
			></textarea>

			{/* CODEBLOCK */}
			<label className="post__label" htmlFor="#">
				Code Block:
			</label>
			<span className="codeblock__span">
				<Codeblock />
			</span>
		</form>
	);
};

export default Post;
