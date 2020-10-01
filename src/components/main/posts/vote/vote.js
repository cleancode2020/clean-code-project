import React from "react";
import "./vote.css";

function Vote(props) {
  const itemValue = Object.values(props.zVote);
  let zVoteUp = 0;
  let zVoteDown = 0;
  itemValue.map((item) => {
    if (item > 0) {
      zVoteUp++;
    } else {
      zVoteDown++;
    }
  });
  return (
    <div className="vote__div">
      <div className="vote__wrapper" onClick={props.voteUpHandleChange}>
        <span aria-label="Thumbs Up" role="img">
          👍
        </span>
        <span>{zVoteUp}</span>
      </div>

      <div className="vote__wrapper" onClick={props.voteDownHandleChange}>
        <span>{zVoteDown}</span>
        <span aria-label="Thumbs Down" role="img">
          👎
        </span>
      </div>
    </div>
  );
}

export default Vote;
