import React from "react";
import "./posts.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Submitpost from "./submitpost/Submitpost";
import Readposts from "./readposts/Readposts";
import Modal from "react-modal";
import logo from "../../../assets/icons/logo.png";
import LogIn from "../../authentification/LogIn";

function Posts(props) {
	const [isInfoActive, setIsInfoActive] = React.useState(false);
	const openInfoModal = () => {
		setIsInfoActive(true);
	};
	const closeInfoModal = () => {
		setIsInfoActive(false);
	};

	return (
		<BrowserRouter>
			<main className="main__posts">
				<div className="posts__header">
					<h2 className="posts__title">Browse / Submit Posts</h2>
					{/* POST LINK */}
					{props.user ? (
						<Link className="postaction__link__makeapost" to="/submit">
							Make a post
						</Link>
					) : (
						<div className="postaction__link__makeapost" to="/about">
							{/* HEADER INFO */}

							<span className="info__span" onClick={() => openInfoModal()}>
								What is Cleancode?
							</span>
							<Modal
								className="modal__info"
								isOpen={isInfoActive}
								onRequestClose={closeInfoModal}
							>
								<button className="close__info" onClick={closeInfoModal}>
									<i className="fas fa-times"></i>
								</button>

								<div className="info__text">
									<h2 className="info__title">
										<img className="info__imgcodes" src={logo} alt="info" />
										Cleancode
									</h2>
									<p>
										Cleancode is a web platform to exchange about clean coding
										and everything around it.
									</p>
									<p>
										Register, post working code and ask anything you want about
										clean coding, conventions, naming, refactoring or related
										topic. Or respond to existing posts.
									</p>
									<p>Sign Up and join the community.</p>

									<div className="infologinbutton__wrapper">
										<LogIn
											fetchFirebase={props.fetchFirebase}
											setUser={props.setUser}
											openModal={props.openModal}
											closeModal={props.closeModal}
											modalIsOpen={props.modalIsOpen}
											firebase={props.firebase}
											user={props.user}
										/>
									</div>
								</div>
							</Modal>
						</div>
					)}
				</div>

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
