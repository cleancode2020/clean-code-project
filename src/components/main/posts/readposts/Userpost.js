import React from "react";
import Codeblock from "./Codeblockread";
import SubmitComment from "./submitComment/SubmitComment";

const Userpost = (props) => {
  return (
    <>
      <div className="post__div">
        {/* CLOSE BUTTON  */}
        <button className="nav__link nav__close" onClick={props.reloadPage}>
          x
        </button>

        {/* TITLE */}
        <h3 className="posts__h3">{props.currentPost[5]}</h3>

        {/* CATEGORIES */}
        <div className="vote__container">
          <h4 className="posts__p">
            {props.currentPost[2] ? `#${props.currentPost[2]}` : null}
          </h4>
          <h4 className="posts__p">
            {props.currentPost[4] ? `#${props.currentPost[4]}` : null}
          </h4>
        </div>
        {props.user ? (
          <div className="vote__container">
            <button
              className="count__button"
              onClick={props.voteUpHandleChange}
            >
              <span>{props.like}</span>
             {/*  <span aria-label="Thumbs Up" role="img">
                👍
              </span>*/}
              <i class="fas fa-thumbs-up"></i>
            </button>
            <button
              className="count__button"
              onClick={props.voteDownHandleChange}
            >
              <span>{props.dislike}</span>
              {/* <span aria-label="Thumbs Down" role="img">
                👎
              </span>*/}
              <i class="fas fa-thumbs-down"></i>
            </button>
          </div>
        ) : (
          <div className="vote__container">
            <button className="count__button" onClick={props.voteSubtracted}>
              <span>{props.like}</span>
               {/*<span aria-label="Thumbs Up" role="img">
                👍
              </span>*/}
              <i class="fas fa-thumbs-up"></i>
            </button>
            <button className="count__button" onClick={props.voteSubtracted}>
              <span>{props.dislike}</span>
              {/*<span aria-label="Thumbs Down" role="img">
                👎
              </span>*/}
              <i class="fas fa-thumbs-down"></i>
            </button>
          </div>
        )}

        {/* ARTICLE */}
        <p className="posts__art">{props.currentPost[1]}</p>

        {/* CODEBLOCK */}
        <h4 className="posts__h4">Code:</h4>
        <span className="codeblock__span">
          <Codeblock currentPost={props.currentPost} />
        </span>

        {/* USER NAME */}
        <p className="user__name">{props.currentPost[6]}</p>
      </div>
      {/* COMMENTS HERE IN FUTURE */}

      {/* COMMENT BLOCK */}

      <SubmitComment
        currentPost={props.currentPost}
        user={props.user}
        firebase={props.firebase}
        getFirebase={props.getFirebase}
      />
    </>
  );
};

export default Userpost;

