import React from "react";
import "./submitpost.css";
import { BrowserRouter, Route, Link } from "react-router-dom";

class Submitpost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Vladimir",
      title: "",
      categories: ["js", "c++", "python", "rust"],
      subcategories: ["react", "vue.js", "angular"],
      currentCategory: "",
      currentSubCategory: "",
      article: "",
      codeblock: "",
      correctLength: true,
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
  }

  // HANDLECHANGE
  titleHandleChange(e) {
    console.log(e.target.value);
    this.setState({ title: e.target.value });
  }

  categoriesHandleChange(e) {
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
        username: this.state.username,
        title: this.state.title,
        categories: this.state.currentCategory,
        subcategories: this.state.currentSubCategory,
        article: this.state.article,
        codeblock: this.state.codeblock,
      }),
    };
    debugger;
    await fetch(
      `${this.props.firebase.databaseURL}/posts.json?auth=${this.props.user.idToken}`,
      requestOptions
    )
      // .then((response) => response.json())
      .then((result) => {
        // CLOSE MODAL AFTER POST
        //  window.location.reload()
      })
      .catch((error) => console.log("error:", error));

    // FETCH AFTER ADD
    // this.props.fetchFirebase();
  }

  render() {
    return (
      <form className="post__form">
        <Link className="navlink__submitclose" to="/">
          close X
        </Link>
        {/* LEGEND */}
        <legend className="post__legend">Make a post</legend>

        {/* TITLE */}
        <label className="post__label" htmlFor="#">
          Title:
        </label>
        <input
          type="text"
          placeholder="..."
          value={this.state.title}
          ref={(inputFocus) => {
            this.input = inputFocus;
          }}
          onChange={this.titleHandleChange}
        />

        {/* CATIGORIES */}
        <label className="post__label" htmlFor="#">
          Categories
        </label>
        <select
          name=""
          id=""
          value={this.state.currentCategory}
          defaultValue="DEFAULT"
          onChange={this.categoriesHandleChange}
        >
          <option value="DEFAULT" disabled>
            Choose:
          </option>
          <option selected value="js">
            JS
          </option>
          <option value="python">Python</option>
          <option value="c++">C++</option>
          <option value="rust">Rust</option>
          {/* {this.state.categories.map((category) => (
            <option value={category}>{category}</option>
          ))} */}
        </select>

        {/* SUBCATIGORIES */}
        <label className="post__label" htmlFor="#">
          SubCategories
        </label>
        <select
          name=""
          id=""
          value={this.state.currentSubCategory}
          defaultValue="DEFAULT"
          onChange={this.subcategoriesHandleChange}
        >
          <option disabled value="DEFAULT">
            Choose:
          </option>
          <option selected value="react">
            React
          </option>
          <option value="vue.js">Vue.js</option>
          <option value="angular">Angular</option>
          {/* {this.state.subcategories.map((category) => (
            <option value={category}>{category}</option>
          ))} */}
        </select>

        {/* ARTICLE */}
        <label className="post__label" htmlFor="#">
          Article:
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
          Code Block:
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
          <p className="p-correct-length">Title length can be 3 characters.</p>
        )}
        <button className="submit__post" onClick={this.submitPost}>
          Submit Article
        </button>
        <p>{this.state.username}</p>
      </form>
    );
  }
}

export default Submitpost;
