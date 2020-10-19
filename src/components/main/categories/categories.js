import React from "react";
import "./categories.css";

class Categories extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			className: "category",
			c: "categoryC",
			js: "categoryJs",
			java: "categoryJava",
			rust: "categoryRust",
			python: "categoryPython",
			cArrow: "v",
			jsArrow: "v",
			javaArrow: "v",
			rustArrow: "v",
			pythonArrow: "v",
			subcategoryC: [
				"Kigs framework",
				"libPhenom",
				"OpenFrameworks",
				"Reason",
				"ROOT",
				"Ultimate++",
			],

			subcategoryJava: [
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
			subcategoryJS: [
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

			subcategoryRust: [
				"Actix",
				"Rocket",
				"wrap",
				"Gotham",
				"Nickle",
				"pencil",
			],

			subcategoryPython: [
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
		};
	}

	//UPDATE CLASSNAME TO OPEN SUBCATEGORIES
	updateClass(item) {
		let arrowCurrent = item + "Arrow";
		let nameToUpperCase = item[0].toUpperCase() + item.slice(1);
		let className = this.state.className;
		let classNameCurrent = className + nameToUpperCase + "Open";
		if (this.state[item] === classNameCurrent) {
			this.setState({
				[item]: className + nameToUpperCase,
				[arrowCurrent]: "v",
			});
		} else {
			this.setState({
				[item]: classNameCurrent,
				[arrowCurrent]: "^",
			});
		}
	}

	render() {
		return (
			<main className="categories__main">
				{/* H2 TITLE */}
				<h2 className="categories__h2">Categories</h2>

				<ul className="categories__ul">
					<li
						className="categories__li"
						onClick={() => this.props.categoryChose("js")}
					>
						<div className="categories__info">
							<i className="ul__icons fab fa-js"></i>
							<p>JavaScript</p>
						</div>
						<button
							className="button__arrow"
							onClick={(event) => {
								event.stopPropagation();
								this.updateClass("js");
							}}
						>
							{this.state.jsArrow}
						</button>
					</li>
					<ul className={this.state.js}>
						{this.state.subcategoryJS.map((item, index) => (
							<li
								className="subcategory__name"
								key={index}
								onClick={() => this.props.subCategoryChose(item)}
							>
								{item}
							</li>
						))}
					</ul>
					<li
						className="categories__li"
						onClick={() => this.props.categoryChose("java")}
					>
						<div className="categories__info">
							<i className="ul__icons fab fa-java"></i> <p>Java</p>
						</div>
						<button
							className="button__arrow"
							onClick={(event) => {
								event.stopPropagation();
								this.updateClass("java");
							}}
						>
							{this.state.javaArrow}
						</button>
					</li>
					<ul className={this.state.java}>
						{this.state.subcategoryJava.map((item, index) => (
							<li
								className="subcategory__name"
								key={index}
								onClick={() => this.props.subCategoryChose(item)}
							>
								{item}
							</li>
						))}
					</ul>
					<li
						className="categories__li"
						onClick={() => this.props.categoryChose("python")}
					>
						<div className="categories__info">
							<i className="ul__icons fab fa-python"></i>
							<p>Python</p>
						</div>
						<button
							className="button__arrow"
							onClick={(event) => {
								event.stopPropagation();
								this.updateClass("python");
							}}
						>
							{this.state.pythonArrow}
						</button>
					</li>
					<ul className={this.state.python}>
						{this.state.subcategoryPython.map((item, index) => (
							<li
								className="subcategory__name"
								key={index}
								onClick={() => this.props.subCategoryChose(item)}
							>
								{item}
							</li>
						))}
					</ul>
					<li
						className="categories__li"
						onClick={() => this.props.categoryChose("rust")}
					>
						<div className="categories__info">
							<i className="ul__icons fab fa-rust"></i>
							<p>Rust</p>
						</div>
						<button
							className="button__arrow"
							onClick={(event) => {
								event.stopPropagation();
								this.updateClass("rust");
							}}
						>
							{this.state.rustArrow}
						</button>
					</li>
					<ul className={this.state.rust}>
						{this.state.subcategoryRust.map((item, index) => (
							<li
								className="subcategory__name"
								key={index}
								onClick={() => this.props.subCategoryChose(item)}
							>
								{item}
							</li>
						))}
					</ul>
					<li
						className="li__icon categories__li"
						onClick={() => this.props.categoryChose("c++")}
					>
						<div className="categories__info">
							<i className="ul__icons fas fas fa-circle"></i>
							<p>C++</p>
						</div>
						<button
							className="button__arrow"
							onClick={(event) => {
								event.stopPropagation();
								this.updateClass("c");
							}}
						>
							{this.state.cArrow}
						</button>
					</li>
					<ul className={this.state.c}>
						{this.state.subcategoryC.map((item, index) => (
							<li
								className="subcategory__name"
								key={index}
								onClick={() => this.props.subCategoryChose(item)}
							>
								{item}
							</li>
						))}
					</ul>
				</ul>
			</main>
		);
	}
}

export default Categories;
