import React from "react";
import "./comments.css";
import CodeBlockComment from "./CodeBlockComment";

function Comments(props) {
  return (
    <div>
      {props.comments.map((item, index) => (
        <div className="comment" key={index}>
          <p className="comment__author">{item[5]}</p>
          <p className="comment__text">{item[2]}</p>
          <CodeBlockComment code={item[1]} />
          <p className="comment__time">{item[4]}</p>
        </div>
      ))}
    </div>
  );
}

export default Comments;
