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
    };
    this.textAreaCommentChange = this.textAreaCommentChange.bind(this);
    this.textAreaCodeChange = this.textAreaCodeChange.bind(this);
    this.addComment = this.addComment.bind(this);
    this.sendCommentToFirebase = this.sendCommentToFirebase.bind(this);
    // this.getCommentsOfFirebase = this.getCommentsOfFirebase.bind(this);
  }

  componentDidMount() {
    this.setState({
      allComments: this.props.currentPost[7],
    });
  }

  textAreaCommentChange(e) {
    this.setState({
      comment: e.target.value,
    });
  }

  textAreaCodeChange(e) {
    this.setState({
      code: e.target.value,
    });
  }

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
    // this.getCommentsOfFirebase();
    // this.props.getFirebase();
  }
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

  render() {
    let comments = [];
    if (this.props.currentPost[7]) {
      const allCommnetsObj = this.state.allComments;
      const allCommnetsObjKeys = Object.keys(allCommnetsObj);

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
        <div className="posts__comment ">
          {/* COMMENT FORM */}
          {this.props.user ? (
            <form action="#" className="form__main">
              <legend className="form__title">
                Tell us what do you think about this:
              </legend>
              <label htmlFor="form__comment" className="form__comment">
                Comment
              </label>
              <textarea
                onChange={this.textAreaCommentChange}
                name="comment"
                className="form__textComment"
                id="form__comment"
                cols="50"
                rows="10"
                value={this.state.comment}
              ></textarea>
              <label htmlFor="form__code" className="form__code">
                Code:
              </label>
              <textarea
                onChange={this.textAreaCodeChange}
                name="code"
                className="form__textCode"
                id="form__code"
                cols="50"
                rows="10"
                value={this.state.code}
              ></textarea>
              <button className="form__button" onClick={this.addComment}>
                Add
              </button>
            </form>
          ) : null}
          {/* COMMENTS */}

          <Comments comments={comments} />
        </div>
      </>
    );
  }
}

export default SubmitComment;