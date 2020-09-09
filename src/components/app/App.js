import React from "react";
import "./App.css";
import Header from "../layout/header/Header";
import Main from "../main/Main";
import Footer from "../layout/footer/Footer";

function App() {
	return (
		<div className="App">
			{/* HEADER */}
			<Header />

			{/* HEADER */}
			<Main />

			{/* FOOTER */}
			<Footer />
		</div>
	);
}

export default App;
