import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Codeblock from "./Codeblockread";

const Userpost = () => {
  return (
    <>
      <Link className="nav__link" to="/">
        x close
      </Link>
      {/* LEGEND */}
      <h3 className="posts__h3">user 1</h3>

      {/* ARTICLE */}
      <h4 className="posts__h4">article title 1</h4>
      <p className="posts__p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat est
        dolor harum ea cum voluptas aperiam cupiditate delectus? Ut, voluptatum
        rem consequuntur voluptas maiores sunt praesentium quos eaque, laborum
        sint quae itaque quibusdam odit quidem consequatur ad debitis nesciunt
        cumque hic nisi illum eius nulla placeat tempora! Consectetur, cum
        debitis.
      </p>

      {/* CODEBLOCK */}
      <h4 className="posts__h4">codeblock 1</h4>
      <span className="codeblock__span__posts">
        <Codeblock />
      </span>
    </>
  );
};

export default Userpost;
