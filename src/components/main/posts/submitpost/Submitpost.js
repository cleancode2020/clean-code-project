import React from "react";
import "./submitpost.css";
import { Link } from "react-router-dom";

class Submitpost extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			displayName: "",
			title: "",
			categories: ["js", "c++", "python", "rust"],
			subcategories: [],
			currentCategory: "",
			currentSubCategory: "",
			article: "",
			codeblock: "",
			correctLength: true,
			zVote: "",
		};
		this.input = React.createRef();
		this.titleHandleChange = this.titleHandleChange.bind(this);
		this.categoriesHandleChange = this.categoriesHandleChange.bind(this);
		this.subcategoriesHandleChange = this.subcategoriesHandleChange.bind(this);
		this.articleHandleChange = this.articleHandleChange.bind(this);
		this.codeblockHandleChange = this.codeblockHandleChange.bind(this);
		this.submitPost = this.submitPost.bind(this);
		this.postFirebase = this.postFirebase.bind(this);
	}
	componentDidMount() {
		this.input.focus();
		this.setState({ displayName: this.props.user.displayName });
	}

	// HANDLECHANGE
	titleHandleChange(e) {
		this.setState({
			title: e.target.value,
		});
	}

	categoriesHandleChange(e) {
		if (e.target.value === "js") {
			this.setState({
				currentCategory: e.target.value,
				subcategories: [
					"React",
					"Angular",
					"Vue.js",
					"Ember.js",
					"Node.js",
					"Polymer",
					"Aurelia",
					"Backbone.js",
					"Mithril",
					"Meteor",
				],
			});
		} else if (e.target.value === "java") {
			this.setState({
				currentCategory: e.target.value,
				subcategories: [
					"Spring",
					"Hibernate",
					"Struts",
					"Google web toolkit",
					"JavaServer Faces",
					"Grails",
					"Vaadin",
					"Blade",
					"Dropwizard",
					"Play",
				],
			});
		} else if (e.target.value === "python") {
			this.setState({
				currentCategory: e.target.value,
				subcategories: [
					"Django",
					"Flask",
					"Tornado",
					"Web2py",
					"Bottle",
					"CherryPy",
					"Falcon ",
					"Pyramid",
					"Hug ",
					"TurboGears",
				],
			});
		} else if (e.target.value === "c++") {
			this.setState({
				currentCategory: e.target.value,
				subcategories: [
					"Kigs framework",
					"libPhenom",
					"OpenFrameworks",
					"Reason",
					"ROOT",
					"Ultimate++",
				],
			});
		} else if (e.target.value === "rust") {
			this.setState({
				currentCategory: e.target.value,
				subcategories: [
					"Actix",
					"Rocket",
					"wrap",
					"Gotham",
					"Nickle",
					"pencil",
				],
			});
		}
		this.setState({ currentCategory: e.target.value });
	}

	subcategoriesHandleChange(e) {
		this.setState({ currentSubCategory: e.target.value });
	}

	articleHandleChange(e) {
		this.setState({ article: e.target.value });
	}

	codeblockHandleChange(e) {
		this.setState({ codeblock: e.target.value });
	}

	// SUBMIT
	submitPost(e) {
		e.preventDefault();

		if (this.state.title.length >= 3) {
			this.postFirebase();
		} else {
			this.setState({
				correctLength: false,
			});
		}
		// window.location.reload(false);
	}

	// POST FIREBASE
	async postFirebase() {
		const requestOptions = {
			method: "POST",
			redirect: "follow",
			headers: {
				"Content-Type": "application/json",
			},
			// CONVERT STATE IN JSON STRING
			body: JSON.stringify({
				username: this.props.user.displayName,
				title: this.state.title,
				categories: this.state.currentCategory,
				subcategories: this.state.currentSubCategory.toLowerCase(),
				article: this.state.article,
				codeblock: this.state.codeblock,
				zVote: this.state.zVote,
			}),
		};

		await fetch(
			`${this.props.firebase.databaseURL}/cleancode/posts.json?auth=${this.props.user.idToken}`,
			requestOptions
		)
			// .then((response) => response.json())
			// .then((result) => {
			// 	// CLOSE MODAL AFTER POST
			// 	window.location.reload();
			// })
			.catch((error) => console.log("error:", error));
		this.props.getFirebase();
	}

	render() {
		return (
			<form className="post__form">
				<div className="post__form__div">
					<Link className="navlink__submitclose" to="/">
						<i className="fas fa-times"></i>
					</Link>

					{/* LEGEND */}
					<legend className="post__legend">Make a post</legend>

					{/* TITLE */}
					<label className="post__label" htmlFor="#">
						Title
					</label>
					<input
						className="post__input"
						type="text"
						placeholder="Once upon a terminal..."
						value={this.state.title}
						ref={(inputFocus) => {
							this.input = inputFocus;
						}}
						onChange={this.titleHandleChange}
						onKeyPress={(e) => {
							e.key === "Enter" && e.preventDefault();
						}}
					/>

					{/* CATIGORIES */}
					<label className="post__label" htmlFor="#">
						Categories
					</label>
					<select
						className="post__select"
						value={this.state.currentCategory}
						onChange={this.categoriesHandleChange}
					>
						<option value="none">None</option>
						<option value="js">JS</option>
						<option value="python">Python</option>
						<option value="c++">C++</option>
						<option value="rust">Rust</option>
					</select>

					{/* SUBCATIGORIES */}
					<label className="post__label" htmlFor="#">
						SubCategories
					</label>
					<select
						className="post__select"
						value={this.state.currentSubCategory}
						onChange={this.subcategoriesHandleChange}
					>
						<option value="none">None</option>
						{this.state.subcategories.length > 1
							? this.state.subcategories.map((item, index) => (
									<option value={item} key={index}>
										{item}
									</option>
							  ))
							: null}
					</select>

					{/* ARTICLE */}
					<label className="post__label" htmlFor="#">
						Article
					</label>
					<textarea
						className="post__textarea"
						name="article"
						id=""
						cols="30"
						rows="10"
						value={this.state.article}
						onChange={this.articleHandleChange}
					></textarea>

					{/* CODEBLOCK */}
					<label className="post__label" htmlFor="#">
						Code Block
					</label>
					<textarea
						className="post__textarea"
						name="article"
						id=""
						cols="30"
						rows="10"
						value={this.state.codeblock}
						onChange={this.codeblockHandleChange}
					></textarea>

					{/* CORRECT LENGTH CHECK MESSAGE */}
					{this.state.correctLength ? null : (
						<p className="p-correct-length">
							Title length can be 3 characters.
						</p>
					)}

					<button
						type="button"
						className="submit__post"
						onClick={this.submitPost}
					>
						<Link className="submit__postlink" to="/">
							Submit Article
						</Link>
					</button>

					<p className="user__name">{this.state.displayName}</p>
				</div>
			</form>
		);
	}
}

export default Submitpost;
