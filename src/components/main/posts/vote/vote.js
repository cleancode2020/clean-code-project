import React from "react";
import "./vote.css";

function Vote(props) {
  return (
    <div className="vote__div">
      <div className="vote__wrapper" onClick={props.voteUpHandleChange}>
        <span aria-label="Thumbs Up" role="img">
          👍
        </span>
        <span>{props.like}</span>
      </div>

      <div className="vote__wrapper" onClick={props.voteDownHandleChange}>
        <span>{props.dislike}</span>
        <span aria-label="Thumbs Down" role="img">
          👎
        </span>
      </div>
    </div>
  );
}

export default Vote;
