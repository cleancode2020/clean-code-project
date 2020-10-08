import React from "react";
import "./main.css";
import Categories from "./categories/categories";
import Posts from "./posts/Posts";

function Main(props) {
  return (
    <main className="Main">
      {/* CATEGORIES */}
      <Categories
        firebase={props.firebase}
        categoryChose={props.categoryChose}
      />

      {/* POSTS */}
      <Posts
        firebase={props.firebase}
        user={props.user}
        getFirebase={props.getFirebase}
        allPostsObject={props.allPostsObject}
      />
    </main>
  );
}

export default Main;
