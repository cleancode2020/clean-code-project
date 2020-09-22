import React from "react";
import "./posts.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Submitpost from "./submitpost/Submitpost";
import Readposts from "./readposts/Readposts";

function Posts(props) {
  return (
    <BrowserRouter>
      <main className="main__posts">
        {/* H2 TITLE */}
        <h2 className="h2__posts">Posts</h2>

        <nav className="nav__posts">
          {/* POST LINK */}
          {props.user ? (
            <Link className="postaction__link" to="/submit">
              Make a post
            </Link>
          ) : null}
        </nav>

        {/* POST COMPONENT */}
        {props.user ? (
          <Route path="/submit">
            <Submitpost
              firebase={props.firebase}
              user={props.user}
              getFirebase={props.getFirebase}
            />
          </Route>
        ) : null}

        {/* POST COMPONENT */}
        <Route path="/">
          <Readposts
            firebase={props.firebase}
            getFirebase={props.getFirebase}
            allPostsObject={props.allPostsObject}
            user={props.user}
          />
        </Route>
      </main>
    </BrowserRouter>
  );
}

export default Posts;
