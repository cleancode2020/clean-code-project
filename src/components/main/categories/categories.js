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
			cArrow: "▼",
			jsArrow: "▼",
			javaArrow: "▼",
			rustArrow: "▼",
			pythonArrow: "▼",
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
				[arrowCurrent]: "▼",
			});
		} else {
			this.setState({
				[item]: classNameCurrent,
				[arrowCurrent]: "▴",
			});
		}
	}

	render() {
		return (
			<main className="categories__main">
				{/* RESET FILTER */}
				<button
					className="postaction__link__resetfilter"
					onClick={() => {
						window.location.reload(false);
					}}
				>
					Reset filter
				</button>

				<ul className="categories__ul">
					{/* JAVASCRIPT */}
					<li className="categories__li">
						<div className="categories__info">
							<button
								className="button__arrow"
								onClick={(event) => {
									event.stopPropagation();
									this.updateClass("js");
									this.props.categoryChose("js");
								}}
							>
								<i className="ul__icons fab fa-js"></i>
								<p>JavaScript</p>
								{this.state.jsArrow}
							</button>
						</div>
						<ul className={this.state.js}>
							{this.state.subcategoryJS.map((item, index) => (
								<li
									className="subcategory__name"
									key={index}
									onClick={(event) => {
										event.stopPropagation();
										this.props.subCategoryChose(item);
									}}
								>
									{item}
								</li>
							))}
						</ul>
					</li>

					{/* JAVA */}
					<li className="categories__li">
						<div className="categories__info">
							<button
								className="button__arrow"
								onClick={(event) => {
									event.stopPropagation();
									this.updateClass("java");
									this.props.categoryChose("java");
								}}
							>
								<i className="ul__icons fab fa-java"></i>
								<p>Java</p>
								{this.state.javaArrow}
							</button>
						</div>
						<ul className={this.state.java}>
							{this.state.subcategoryJava.map((item, index) => (
								<li
									className="subcategory__name"
									key={index}
									onClick={(event) => {
										event.stopPropagation();
										this.props.subCategoryChose(item);
									}}
								>
									{item}
								</li>
							))}
						</ul>
					</li>

					{/* PYTHON */}
					<li className="categories__li">
						<div className="categories__info">
							<button
								className="button__arrow"
								onClick={(event) => {
									event.stopPropagation();
									this.updateClass("python");
									this.props.categoryChose("python");
								}}
							>
								<i className="ul__icons fab fa-python"></i>
								<p>Python</p>
								{this.state.pythonArrow}
							</button>
						</div>
						<ul className={this.state.python}>
							{this.state.subcategoryPython.map((item, index) => (
								<li
									className="subcategory__name"
									key={index}
									onClick={(event) => {
										event.stopPropagation();
										this.props.subCategoryChose(item);
									}}
								>
									{item}
								</li>
							))}
						</ul>
					</li>

					{/* RUST */}
					<li className="categories__li">
						<div className="categories__info">
							<button
								className="button__arrow"
								onClick={(event) => {
									event.stopPropagation();
									this.updateClass("rust");
									this.props.categoryChose("rust");
								}}
							>
								<i className="ul__icons fab fa-rust"></i>
								<p>Rust</p>
								{this.state.rustArrow}
							</button>
						</div>
						<ul className={this.state.rust}>
							{this.state.subcategoryRust.map((item, index) => (
								<li
									className="subcategory__name"
									key={index}
									onClick={(event) => {
										event.stopPropagation();
										this.props.subCategoryChose(item);
									}}
								>
									{item}
								</li>
							))}
						</ul>
					</li>

					{/* C */}
					<li className="li__icon categories__li">
						<div className="categories__info">
							<button
								className="button__arrow"
								onClick={(event) => {
									event.stopPropagation();
									this.updateClass("c");
									this.props.categoryChose("c++");
								}}
							>
								<i className="ul__icons fas fa-plus-circle"></i>
								<p>C++</p>
								{this.state.cArrow}
							</button>
						</div>
						<ul className={this.state.c}>
							{this.state.subcategoryC.map((item, index) => (
								<li
									className="subcategory__name"
									key={index}
									onClick={(event) => {
										event.stopPropagation();
										this.props.subCategoryChose(item);
									}}
								>
									{item}
								</li>
							))}
						</ul>
					</li>
				</ul>
			</main>
		);
	}
}

export default Categories;
