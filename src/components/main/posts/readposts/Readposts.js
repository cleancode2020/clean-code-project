import React from "react";
import "./readposts.css";
import { Route, Link } from "react-router-dom";
import Userpost from "./Userpost";

class Readposts extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activePost: "",
			currentPost: [],
		};
		this.setPost = this.setPost.bind(this);
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
							<button
								className="post__button"
								onClick={() => this.setPost(item)}
								to={`/${item[0]}`}
							>
								<li className="posts__li" key={index}>
									<h2 className="article-h2">{item[5]}</h2>
									<p className="article-p">{item[2]}</p>
									<p className="article-p">{item[4]}</p>
									<h3 className="article-h3">{item[6]}</h3>
								</li>
							</button>
						))
					)}
					{/* POST IN FULL */}
					{/* <Route path={`/${this.state.activePost}`}>
						<Userpost posts={posts} />
					</Route> */}

					{/* POSTS LIST */}
					{/* {posts.map((item, index) => (
						<Link
							className="nav__link"
							onClick={() => this.setPost(item)}
							to={`/${item[0]}`}
						>
							<li className="posts__li" key={index}>
								<h2 className="article-h2">{item[5]}</h2>
								<p className="article-p">{item[2]}</p>
								<p className="article-p">{item[4]}</p>
								<h3 className="article-h3">{item[6]}</h3>
							</li>
						</Link>
					))} */}
				</ul>
			</section>
		);
	}
}

export default Readposts;
