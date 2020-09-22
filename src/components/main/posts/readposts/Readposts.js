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
		};
		this.setPost = this.setPost.bind(this);
		this.voteUpHandleChange = this.voteUpHandleChange.bind(this);
		this.voteDownHandleChange = this.voteDownHandleChange.bind(this);
	}
	componentDidMount() {
		this.props.getFirebase();
	}

	// ACTIVE POST
	setPost(item) {
		this.setState({
			activePost: item[0],
			currentPost: item,
		});
	}

	// ACTIVE POST
	reloadPage() {
		window.location.reload();
	}

	// VOTE UP HANDLE CHANGE
	voteUpHandleChange(item) {
		// console.log("upz");
		// console.log(item);
	}

	// VOTE DOWN HANDLE CHANGE
	voteDownHandleChange(item) {
		// console.log("downz");
		// console.log(item);
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
						/>
					) : (
						posts.map((item, index) => (
							<li className="posts__li" key={index}>
								{this.props.user ? (
									<Vote
										voteUpHandleChange={this.voteUpHandleChange}
										voteDownHandleChange={this.voteDownHandleChange}
									/>
								) : null}

								<button
									className="post__button"
									onClick={() => this.setPost(item)}
									to={`/${item[0]}`}
								>
									<div className="li-top">
										<h2 className="article-h2">{item[5]}</h2>
									</div>
									<div className="li-bottom">
										<p className="article-p">
											{item[2] ? `#${item[2]}` : null}
										</p>
										<p className="article-p">
											{item[4] ? `#${item[4]}` : null}
										</p>

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
