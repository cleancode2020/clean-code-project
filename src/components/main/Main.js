import React from "react";
import "./main.css";
import Categories from "./categories/categories";
import Posts from "./posts/Posts";

function Main(props) {
  // debugger;
  return (
    <main className="Main">
      {/* CATEGORIES */}
      <Categories firebase={props.firebase} />

      {/* POSTS */}
      <Posts firebase={props.firebase} user={props.user} />
    </main>
  );
}

export default Main;
