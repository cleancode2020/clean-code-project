import React from "react";
import "./vote.css";

function Contact() {
	return (
		<div className="vote__div">
			<button className="vote__button">
				<span className="vote__span">👍</span>
			</button>
			{/* <p>Vote</p> */}
			<button className="vote__button">
				<span className="vote__span">👎</span>
			</button>
		</div>
	);
}

export default Contact;
