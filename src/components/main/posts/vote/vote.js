import React from "react";
import "./vote.css";

function Contact() {
	return (
		<div className="vote__div">
			<button className="vote__button">
				<span aria-label="Thumbs Up" role="img">👍</span>
				<span>+</span>
			</button>

			<button className="vote__button">
				<span>-</span>
				<span aria-label="Thumbs Down" role="img">👎</span>
			</button>
		</div>
	);
}

export default Contact;
