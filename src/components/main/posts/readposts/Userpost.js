import React from "react";
import Codeblock from "./Codeblockread";

class Userpost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      date: "",
      currentPost: "",
    };
    this.textAreaChange = this.textAreaChange.bind(this);
    this.addComment = this.addComment.bind(this);
  }

  textAreaChange(e) {
    this.setState({
      comment: e.target.value,
    });
  }
  addComment() {
    this.postFirebase();
  }

  async postFirebase() {
    const requestOptions = {
      method: "POST",
      redirect: "follow",
      headers: {
        "Content-Type": "application/json",
      },
      // CONVERT STATE IN JSON STRING
      body: JSON.stringify({
        comment: this.state.comment,
        date: new Date(),
        currentPost: this.props.currentPost[0],
      }),
    };

    await fetch(
      `${this.props.firebase.databaseURL}/cleancode/comments.json?auth=${this.props.user.idToken}`,
      requestOptions
    )
      // .then((response) => response.json())
      // .then((result) => {
      // 	// CLOSE MODAL AFTER POST
      // 	window.location.reload();
      // })
      .catch((error) => console.log("error:", error));
    // this.props.getFirebase();
  }

  render() {
    console.log(this.props);

    return (
      <>
        <div className="post__div">
          <button
            className="nav__link nav__close"
            onClick={this.props.reloadPage}
          >
            x close
          </button>
          {/* <Link className="nav__link nav__close" to="/">
					x close
				</Link> */}

          {/* TITLE */}
          <h3 className="posts__h3">{this.props.currentPost[5]}</h3>

          {/* CATEGORIES */}
          <h4 className="posts__p">{this.props.currentPost[2]}</h4>
          <h4 className="posts__p">{this.props.currentPost[4]}</h4>

          {/* ARTICLE */}
          <p className="posts__p">{this.props.currentPost[1]}</p>

          {/* CODEBLOCK */}
          <h4 className="posts__h4">Code:</h4>
          <span className="codeblock__span">
            <Codeblock currentPost={this.props.currentPost} />
          </span>

          {/* USER NAME */}
          <p className="user__name">{this.props.currentPost[6]}</p>
        </div>
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
                onChange={this.textAreaChange}
                name="comment"
                id="form__text"
                cols="50"
                rows="10"
                value={this.state.comment}
              ></textarea>
              <button className="form__button" onClick={this.addComment}>
                Add
              </button>
            </form>
          ) : null}
          {/* COMMENTS HERE IN FUTURE */}
        </div>
      </>
    );
  }
}
// const Userpost = (props) => {
// 	console.log(props.currentPost);
// 	return (
// 		<div className="post__div">
// 				{/* CLOSE BUTTON  */}
// 			<button className="nav__link nav__close" onClick={props.reloadPage}>
// 				x
// 			</button>

// 			{/* TITLE */}
// 			<h3 className="posts__h3">{props.currentPost[5]}</h3>

// 			{/* CATEGORIES */}
// 			<h4 className="posts__p">
// 				#{props.currentPost[2] ? props.currentPost[2] : "None"}
// 			</h4>
// 			<h4 className="posts__p">
// 				#{props.currentPost[4] ? props.currentPost[4] : "None"}
// 			</h4>

// 			{/* ARTICLE */}
// 			<p className="posts__art">{props.currentPost[1]}</p>

// 			{/* CODEBLOCK */}
// 			<h4 className="posts__h4">Code:</h4>
// 			<span className="codeblock__span">
// 				<Codeblock currentPost={props.currentPost} />
// 			</span>

// 			{/* USER NAME */}
// 			<p className="user__name">{props.currentPost[6]}</p>
// 		</div>
// 	);
// };

export default Userpost;
