import React from "react";
import "./main.css";
import Categories from "./categories/categories";
import Posts from "./posts/Posts";

function Main() {
	return (
		<main className="Main">
			{/* CATEGORIES */}
			<Categories />

			{/* POSTS */}
			<Posts />
		</main>
	);
}

export default Main;
