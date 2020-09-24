import React from "react";
import "./comments.css";
import CodeBlockComment from "./CodeBlockComment";

function Comments(props) {
  return (
    <ul className="comment__ul">
      {props.comments.map((item, index) => (
        <li className="comment__li" key={index}>
          <h4 className="comment__author">{item[5]}</h4>
          <h3 className="comment__text">{item[2]}</h3>
          <span className=" codeblock__comment">
            <CodeBlockComment code={item[1]} />
          </span>
          <p className="comment__time">{item[4]}</p>
        </li>
      ))}
    </ul>
  );
}

export default Comments;
