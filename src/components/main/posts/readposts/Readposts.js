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
      zVote: 0,
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

  //   VOTE UP
  async voteUpHandleChange() {
    // console.log("upz");
    const postID = this.state.currentPost[0];
    const localID = this.props.user.localId;
    console.log(localID);
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
  }

  // VOTE DOWN
  async voteDownHandleChange() {
    // console.log("downz");
    const postID = this.state.currentPost[0];
    const localID = this.props.user.localId;
    // debugger;
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
  }

  render() {
    console.log(this.props);
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

    // debugger;
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
            />
          ) : (
            posts.map((item, index) => (
              <li className="posts__li" key={index}>
                {/* VOTE */}
                {this.props.user ? (
                  <Vote upVote={item[8]} downVote={item[7]} />
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
