import React, { Component } from "react";
import "./submitComment.css";
import Comments from "./comments/Comments";

class SubmitComment extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comment: "",
			code: "",
			date: "",
			currentPost: "",
			userName: "",
			allComments: [],
			zVoteComment: "",
		};
		this.textAreaCommentChange = this.textAreaCommentChange.bind(this);
		this.textAreaCodeChange = this.textAreaCodeChange.bind(this);
		this.addComment = this.addComment.bind(this);
		this.sendCommentToFirebase = this.sendCommentToFirebase.bind(this);
		this.getCommentsOfFirebase = this.getCommentsOfFirebase.bind(this);
		this.voteUpCommentHandleChange = this.voteUpCommentHandleChange.bind(this);
		this.voteDownCommentHandleChange = this.voteDownCommentHandleChange.bind(
			this
		);
		this.voteSubtracted = this.voteSubtracted.bind(this);
	}

	// COMMENT
	componentDidMount() {
		this.setState({
			allComments: this.props.currentPost[8],
		});
	}

	// COMMENT
	textAreaCommentChange(e) {
		this.setState({
			comment: e.target.value,
		});
	}

	// COMMENT
	textAreaCodeChange(e) {
		this.setState({
			code: e.target.value,
		});
	}

	// COMMENT
	addComment(e) {
		e.preventDefault();
		this.sendCommentToFirebase();
		this.setState({
			comment: "",
			code: "",
			date: "",
		});
		this.getCommentsOfFirebase();
	}

	// COMMENT
	async sendCommentToFirebase() {
		const postID = this.props.currentPost[0];
		const requestOptions = {
			method: "POST",
			redirect: "follow",
			headers: {
				"Content-Type": "application/json",
			},
			// CONVERT STATE IN JSON STRING
			body: JSON.stringify({
				comment: this.state.comment,
				code: this.state.code,
				date: new Date(),
				currentPost: this.props.currentPost[0],
				userName: this.props.user.displayName,
				zVoteComment: this.state.zVoteComment,
			}),
		};

		await fetch(
			`${this.props.firebase.databaseURL}/cleancode/posts/${postID}/zcomments.json?auth=${this.props.user.idToken}`,
			requestOptions
		)
			// .then((response) => response.json())
			.then((result) => {
				// CLOSE MODAL AFTER POST
				this.setState({
					currentPost: result,
				});
			})
			.catch((error) => console.log("error:", error));
	}

	//GET COMMENTS
	async getCommentsOfFirebase() {
		const postID = this.props.currentPost[0];
		const requestOptions = {
			method: "GET",
			redirect: "follow",
			headers: {
				"Content-Type": "application/json",
			},
		};
		await fetch(
			`${this.props.firebase.databaseURL}/cleancode/posts/${postID}/zcomments.json`,
			requestOptions
		)
			.then((response) => response.json())
			.then((result) => {
				this.setState({
					allComments: result,
				});
			})
			.catch((error) => console.log("error:", error));
	}

	// VOTE UP
	async voteUpCommentHandleChange(item) {
		const postID = this.props.currentPost[0];
		const localID = this.props.user.localId;

		const requestOptions = {
			method: "PATCH",
			redirect: "follow",
			headers: {
				"Content-Type": "application/json",
			},
			//   CONVERT STATE IN JSON STRING
			body: JSON.stringify({
				[localID]: 1,
			}),
		};
		await fetch(
			`${this.props.firebase.databaseURL}/cleancode/posts/${postID}/zcomments/${item[0]}/zVoteComment.json?auth=${this.props.user.idToken}`,
			requestOptions
		).catch((error) => console.log("error:", error));
		this.getCommentsOfFirebase();
	}

	// VOTE DOWN
	async voteDownCommentHandleChange(item) {
		const postID = this.props.currentPost[0];
		const localID = this.props.user.localId;
		const requestOptions = {
			method: "PATCH",
			redirect: "follow",
			headers: {
				"Content-Type": "application/json",
			},
			// CONVERT STATE IN JSON STRING
			body: JSON.stringify({
				[localID]: -1,
			}),
		};
		await fetch(
			`${this.props.firebase.databaseURL}/cleancode/posts/${postID}/zcomments/${item[0]}/zVoteComment.json?auth=${this.props.user.idToken}`,
			requestOptions
		).catch((error) => console.log("error:", error));
		this.getCommentsOfFirebase();
	}

	// VOTE IS SUBTRACTED
	voteSubtracted() {
		document.querySelector(".modal__button").click();
	}

	render() {
		let comments = [];
		if (this.props.currentPost[8]) {
			const allCommnetsObj = this.state.allComments;
			const allCommnetsObjKeys = Object.keys(allCommnetsObj).reverse();

			for (let key of allCommnetsObjKeys) {
				const objectData = allCommnetsObj[key];
				if (typeof objectData === "object") {
					const postsValuesArray = Object.values(objectData);
					// POST ALONE
					postsValuesArray.unshift(key);
					// POSTS
					comments.unshift(postsValuesArray);
				}
			}
		}

		return (
			<>
				{/* COMMENT BLOCK */}
				{comments.map((item, index) => (
					<Comments
						comment={item}
						index={index}
						voteUpCommentHandleChange={this.voteUpCommentHandleChange}
						voteDownCommentHandleChange={this.voteDownCommentHandleChange}
						user={this.props.user}
						voteSubtracted={this.voteSubtracted}
					/>
				))}

				{/* COMMENT FORM */}
				{this.props.user ? (
					<form action="#" className="form__main">
						<legend className="form__title">Comment this</legend>
						<label htmlFor="form__comment" className="comment__label">
							Comment
						</label>
						<textarea
							onChange={this.textAreaCommentChange}
							name="comment"
							className="comment__textarea"
							id="form__comment"
							cols="50"
							rows="10"
							value={this.state.comment}
						></textarea>
						<label htmlFor="form__code" className="comment__label">
							Code
						</label>
						<textarea
							onChange={this.textAreaCodeChange}
							name="code"
							className="comment__textarea"
							id="form__code"
							cols="50"
							rows="10"
							value={this.state.code}
						></textarea>
						<button className="comment__button" onClick={this.addComment}>
							Send Comment
						</button>
					</form>
				) : null}
				{/* COMMENTS */}
			</>
		);
	}
}

export default SubmitComment;
