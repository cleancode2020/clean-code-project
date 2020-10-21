import React from "react";
import "./vote.css";

function Vote(props) {
	const itemValue = Object.values(props.zVote);
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
		<div className="vote__div">
			<div className="vote__wrapper" onClick={props.voteUpHandleChange}>
				<span>{zVoteUp}</span>
				<i className="far fa-thumbs-up"></i>
			</div>

			<div className="vote__wrapper" onClick={props.voteDownHandleChange}>
				<span>{zVoteDown}</span>
				<i className="far fa-thumbs-down"></i>
			</div>
		</div>
	);
}

export default Vote;
