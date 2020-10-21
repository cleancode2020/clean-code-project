import React from "react";
import "./readposts.css";
import Userpost from "./Userpost";
import Vote from "../vote/vote";

class Readposts extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activePost: "",
			currentPost: [],
			zVote: [],
			like: 0,
			dislike: 0,
		};
		this.setPost = this.setPost.bind(this);
		this.voteUpHandleChange = this.voteUpHandleChange.bind(this);
		this.voteDownHandleChange = this.voteDownHandleChange.bind(this);
		this.voteValues = this.voteValues.bind(this);
		this.voting = this.voting.bind(this);
		this.voteSubtracted = this.voteSubtracted.bind(this);
	}
	componentDidMount() {
		this.props.getFirebase();
	}

	// ACTIVE POST
	async setPost(item) {
		await this.setState({
			activePost: item[0],
			currentPost: item,
		});

		this.voteValues();
	}

	// ACTIVE POST
	reloadPage() {
		window.location.reload();
	}

	//   VOTE UP
	async voteUpHandleChange() {
		const postID = this.state.currentPost[0];
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
			`${this.props.firebase.databaseURL}/cleancode/posts/${postID}/zVote.json?auth=${this.props.user.idToken}`,
			requestOptions
		)
			// .then((response) => response.json())
			// .then((result) => {
			// 	// CLOSE MODAL AFTER POST
			// 	this.setState({
			// 		voteUp: result,
			// 	});
			// })
			.catch((error) => console.log("error:", error));
		this.voteValues();
	}

	// VOTE DOWN
	async voteDownHandleChange() {
		const postID = this.state.currentPost[0];
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
			`${this.props.firebase.databaseURL}/cleancode/posts/${postID}/zVote.json?auth=${this.props.user.idToken}`,
			requestOptions
		)
			// .then((response) => response.json())
			// .then((result) => {
			// 	// CLOSE MODAL AFTER POST
			// 	this.setState({
			// 		voteUp: result,
			// 	});
			// })
			.catch((error) => console.log("error:", error));
		this.voteValues();
	}

	//   VOTEVALUES
	async voteValues() {
		const postID = this.state.currentPost[0];

		const requestOptions = {
			method: "GET",
			redirect: "follow",
			headers: {
				"Content-Type": "application/json",
			},
			// CONVERT STATE IN JSON STRING
		};

		await fetch(
			`${this.props.firebase.databaseURL}/cleancode/posts/${postID}/zVote.json`,
			requestOptions
		)
			.then((response) => response.json())
			.then((result) => {
				this.setState({
					zVote: result,
				});
			})
			.catch((error) => console.log("error:", error));
		this.voting();
	}

	voting() {
		const itemValue = Object.values(this.state.zVote);
		let zVoteUp = 0;
		let zVoteDown = 0;
		itemValue.map((item) => {
			if (item > 0) {
				return zVoteUp++;
			} else {
				return zVoteDown++;
			}
		});
		this.setState({
			like: zVoteUp,
			dislike: zVoteDown,
		});
	}
	voteSubtracted() {
		document.querySelector(".modal__button").click();
	}
	render() {
		// DATA
		let posts = [];
		if (this.props.allPostsObject) {
			const allPostsObject = this.props.allPostsObject;
			const allPostsObjectKeys = Object.keys(allPostsObject);
			for (let key of allPostsObjectKeys) {
				const objectData = allPostsObject[key];
				if (typeof objectData === "object") {
					const postsValuesArray = Object.values(objectData);
					// POST ALONE
					postsValuesArray.unshift(key);
					// POSTS
					posts.unshift(postsValuesArray);
				}
			}
		}

		return (
			<section className="readposts-section">
				<ul className="posts__ul">
					{this.state.activePost ? (
						<Userpost
							currentPost={this.state.currentPost}
							reloadPage={this.reloadPage}
							user={this.props.user}
							firebase={this.props.firebase}
							getFirebase={this.props.getFirebase}
							voteUpHandleChange={this.voteUpHandleChange}
							voteDownHandleChange={this.voteDownHandleChange}
							like={this.state.like}
							dislike={this.state.dislike}
							voteSubtracted={this.voteSubtracted}
						/>
					) : (
						posts.map((item, index) => (
							<li className="posts__li" key={index}>
								<button
									className="post__button"
									onClick={() => this.setPost(item)}
									to={`/${item[0]}`}
								>
									<div className="li-top">
										<h2 className="article-h2">{item[5]}</h2>
									</div>
									<div className="li-bottom">
										{/* VOTE */}
										<Vote zVote={item[7]} />
										<p className="article-p">#{item[2] ? item[2] : "None"}</p>
										<p className="article-p">#{item[4] ? item[4] : "None"}</p>
										<h3 className="article-h3">{item[6]}</h3>
									</div>
								</button>
							</li>
						))
					)}
				</ul>
			</section>
		);
	}
}

export default Readposts;
