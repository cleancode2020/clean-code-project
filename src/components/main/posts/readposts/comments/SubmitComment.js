import React, { Component } from "react";
import "./submitComment.css";
class SubmitComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      code: "",
      date: "",
      currentPost: "",
      userName: "",
    };
    this.textAreaCommentChange = this.textAreaCommentChange.bind(this);
    this.textAreaCodeChange = this.textAreaCodeChange.bind(this);
    this.addComment = this.addComment.bind(this);
    this.postFirebase2 = this.postFirebase2.bind(this);
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
    this.postFirebase2();
  }

  async postFirebase2() {
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
    debugger;

    await fetch(
      `${this.props.firebase.databaseURL}/cleancode/posts/${postID}/comments.json?auth=${this.props.user.idToken}`,
      requestOptions
    )
      //   .then((response) => response.json())
      //   .then((result) => {
      //     // CLOSE MODAL AFTER POST
      //     window.location.reload();
      //   })
      .catch((error) => console.log("error:", error));
    // this.props.getFirebase();
  }

  render() {
    console.log(this.props);

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
          {/* COMMENTS HERE IN FUTURE */}
        </div>
      </>
    );
  }
}

// class SubmitComment extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         comment: "",
//         code: "",
//         date: "",
//         currentPost: "",
//         userName: "",
//       };
//       this.textAreaCommentChange = this.textAreaCommentChange.bind(this);
//       this.textAreaCodeChange = this.textAreaCodeChange.bind(this);
//       this.addComment = this.addComment.bind(this);
//       this.postFirebase = this.postFirebase.bind(this);
//     }

//     textAreaCommentChange(e) {
//       this.setState({
//         comment: e.target.value,
//       });
//     }
//     textAreaCodeChange(e) {
//       this.setState({
//         code: e.target.value,
//       });
//     }
//     addComment() {
//       this.postFirebase();
//     }

//     async postFirebase() {
//       const requestOptions = {
//         method: "POST",
//         redirect: "follow",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         // CONVERT STATE IN JSON STRING
//         body: JSON.stringify({
//           comment: this.state.comment,
//           code: this.state.code,
//           date: new Date(),
//           currentPost: this.props.currentPost[0],
//           userName: this.props.user.displayName,
//         }),
//       };
//       // debugger;

//       await fetch(
//         `${this.props.firebase.databaseURL}/cleancode/comments.json?auth=${this.props.user.idToken}`,
//         requestOptions
//       )
//         // .then((response) => response.json())
//         // .then((result) => {
//         // 	// CLOSE MODAL AFTER POST
//         // 	window.location.reload();
//         // })
//         .catch((error) => console.log("error:", error));
//       // this.props.getFirebase();
//     }

//     render() {
//       console.log(this.props);

//       return (
//         <>
//           {/* COMMENT BLOCK */}
//           <div className="posts__comment ">
//             {/* COMMENT FORM */}
//             {this.props.user ? (
//               <form action="#" className="form__main">
//                 <legend className="form__title">
//                   Tell us what do you think about this:
//                 </legend>
//                 <label htmlFor="form__comment" className="form__comment">
//                   Comment
//                 </label>
//                 <textarea
//                   onChange={this.textAreaCommentChange}
//                   name="comment"
//                   className="form__textComment"
//                   id="form__comment"
//                   cols="50"
//                   rows="10"
//                   value={this.state.comment}
//                 ></textarea>
//                 <label htmlFor="form__code" className="form__code">
//                   Code:
//                 </label>
//                 <textarea
//                   onChange={this.textAreaCodeChange}
//                   name="code"
//                   className="form__textCode"
//                   id="form__code"
//                   cols="50"
//                   rows="10"
//                   value={this.state.code}
//                 ></textarea>
//                 <button className="form__button" onClick={this.addComment}>
//                   Add
//                 </button>
//               </form>
//             ) : null}
//             {/* COMMENTS HERE IN FUTURE */}
//           </div>
//         </>
//       );
//     }
//   }
export default SubmitComment;
