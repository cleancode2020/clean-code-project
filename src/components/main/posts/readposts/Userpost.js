import React from "react";
import Codeblock from "./Codeblockread";
import SubmitComment from "./submitComment/SubmitComment";

const Userpost = (props) => {
	console.log(props.currentPost[8]);
	return (
		<>
			<div className="post__div">
				{/* CLOSE BUTTON  */}
				<button className="nav__link nav__close" onClick={props.reloadPage}>
					<i className="fas fa-times"></i>
				</button>

				{/* TITLE */}
				<h3 className="posts__h3">{props.currentPost[5]}</h3>

				{/* ARTICLE */}
				<p className="posts__art">{props.currentPost[1]}</p>

				{/* CODEBLOCK */}
				<span className="codeblock__span">
					<Codeblock currentPost={props.currentPost} />
				</span>

				{/* CATEGORIES */}
				<div className="posts__informations">
					{props.user ? (
						<div className="vote__container">
							<button
								className="count__button"
								onClick={props.voteUpHandleChange}
							>
								<span>{props.like}</span>
								<i class="fas fa-thumbs-up"></i>
							</button>
							<button
								className="count__button"
								onClick={props.voteDownHandleChange}
							>
								<span>{props.dislike}</span>
								<i class="fas fa-thumbs-down"></i>
							</button>
							<h4 className="posts__p">
								{props.currentPost[2] ? `#${props.currentPost[2]}` : null}
							</h4>
							<h4 className="posts__p">
								{props.currentPost[4] ? `#${props.currentPost[4]}` : null}
							</h4>
						</div>
					) : (
						<div className="vote__container ">
							<button className="count__button" onClick={props.voteSubtracted}>
								<span>{props.like}</span>
								<i class="fas fa-thumbs-up"></i>
							</button>
							<button className="count__button" onClick={props.voteSubtracted}>
								<span>{props.dislike}</span>
								<i class="fas fa-thumbs-down"></i>
							</button>
							<h4 className="posts__p">
								{props.currentPost[2] ? `#${props.currentPost[2]}` : null}
							</h4>
							<h4 className="posts__p">
								{props.currentPost[4] ? `#${props.currentPost[4]}` : null}
							</h4>
						</div>
					)}

					<div className="vote__container container__left">
						{/* USER NAME */}
						<p className="user__name">{props.currentPost[6]}</p>
					</div>
				</div>
			</div>

			{/* COMMENT BLOCK */}
			<SubmitComment
				currentPost={props.currentPost}
				user={props.user}
				firebase={props.firebase}
				getFirebase={props.getFirebase}
			/>
		</>
	);
};

export default Userpost;
