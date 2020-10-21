import React from "react";
import "./comments.css";
import CodeBlockComment from "./CodeBlockComment";

function Comments(props) {
	const itemValue = Object.values(props.comment[6]);
	let zVoteUp = 0;
	let zVoteDown = 0;
	itemValue.map((item) => {
		if (item > 0) {
			return zVoteUp++;
		} else {
			return zVoteDown++;
		}
	});
	return (
		<ul className="comment__ul">
			<li className="comment__li" key={props.index}>
				<h3 className="comment__text">{props.comment[2]}</h3>
				<span className=" codeblock__comment">
					<CodeBlockComment code={props.comment[1]} />
				</span>
				{/* <p className="comment__time">{props.comment[4]}</p> */}
				{props.user ? (
					<div className="vote__container">
						<button
							className="count__button"
							onClick={() => props.voteUpCommentHandleChange(props.comment)}
						>
							<span>{zVoteUp}</span>
							<span aria-label="Thumbs Up" role="img">
								<i class="fas fa-thumbs-up"></i>
							</span>
						</button>
						<button
							className="count__button"
							onClick={() => props.voteDownCommentHandleChange(props.comment)}
						>
							<span>{zVoteDown}</span>
							<span aria-label="Thumbs Down" role="img">
								<i class="fas fa-thumbs-down"></i>
							</span>
						</button>
						<h4 className="comment__author">{props.comment[5]}</h4>
					</div>
				) : (
					<div className="vote__container">
						<button
							className="count__button"
							onClick={() => props.voteSubtracted()}
						>
							<span>{zVoteUp}</span>
							<span aria-label="Thumbs Up" role="img">
								<i class="fas fa-thumbs-up"></i>
							</span>
						</button>
						<button
							className="count__button"
							onClick={() => props.voteSubtracted()}
						>
							<span>{zVoteDown}</span>
							<span aria-label="Thumbs Down" role="img">
								<i class="fas fa-thumbs-down"></i>
							</span>
						</button>
						<h4 className="comment__author">{props.comment[5]}</h4>
					</div>
				)}
			</li>
		</ul>
	);
}

export default Comments;
