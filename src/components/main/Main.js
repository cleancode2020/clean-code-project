import React from "react";
import "./main.css";
import Categories from "./categories/categories";
import Posts from "./posts/posts";
import RouteFooter from "../routes/RouteFooter";

function Main() {
	return (
		<main className="Main">
			{/* CATEGORIES */}
			<Categories />

			{/* POSTS */}
			<Posts />
			{/* CONNECT ROUTER FOOTER */}
			<RouteFooter />
		</main>
	);
}

export default Main;
