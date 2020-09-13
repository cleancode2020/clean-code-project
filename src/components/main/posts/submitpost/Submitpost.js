import React from "react";
import "./submitpost.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Codeblock from "./Codeblocksubmit";

const Submitpost = () => {
	return (
		<form className="post__form">
			<Link className="nav__link" to="/">
				x
			</Link>
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

export default Submitpost;
