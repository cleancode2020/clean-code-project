import React from "react";
import "../about/about.css";
import victoria from "../../assets/teamImage/victoria.jpeg";
import vadim from "../../assets/teamImage/vadim.jpeg";
import melad from "../../assets/teamImage/melad.jpeg";
import andreas from "../../assets/teamImage/andreas.jpeg";
import gael from "../../assets/teamImage/gael.jpeg";

class About extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<main className="main__about">
				<h2 className="h2__about" id="#aboutID">
					About
				</h2>
				<div className="sub__about">
					{/* DESCRIPTION ABOUT US*/}
					<h3 className="h3__about">What is Cleancode?</h3>
					<p className="about__paragraph">
						Cleancode is a web platform to exchange about clean coding and
						everything around it. You can post only working code. No direct bug
						fixing. But you can exchange about which technologies you are using
						and why. How you would refactor your code or ask how the community
						would do it. Naming, about how to name variables, functions,
						components and why. About conventions, you are using and why. Tricks
						you learned or discovered and their limits. Or anything related to
						clean coding or optimizing your code. We used React for the frontend
						and Firebase for the backend. Resolving the main logic having a
						smart frontend interface with React and using Firebase real time
						database as a rest API.
					</p>

					{/* OUR PRODUCT */}
					<h3 className="h3__about">Who are we?</h3>
					<p className="about__paragraph">
						We, Victoria, Vadim, Melad, Andreas and Gael are 5 students from the
						DCI Berlin full stack web development course. Cleancode is the
						website we did together for the final project presentation of our
						one-year course. The five of us are really passionate about web
						development with each having specific strength in this field.
						Victoria is Passionate about design and were responsible for the
						whole UX/UI logic, wire framing and participating in the frontend
						coding. Vadim besides coding was responsible for the most research
						work and organizational parts. Melad feeling comfortable having one
						foot in frontend and the other one in backend was responsible for
						various stuff from UI animations to the whole contact form logic and
						much more. While Andreas and Gael worked closely together realizing
						the main logic of the questions posts, comments and categories as
						well as user sign up and login logic. Working each in our field of
						competence didn’t keep us from working closely together and
						influence each other. Reviewing each other's code, switching task
						and stay flexible to new ideas.
					</p>

					{/* OUR PRODUCT */}
					<h3 className="h3__about">How does it work?</h3>
					<p className="about__paragraph">
						First thing, of course you can just read posts and discussion that
						are already online. The possibility to read posts is accessible to
						everyone. If you want to ask a question yourself and just talk about
						a specific topic, or also just respond to an existing thread you can
						make an account with your email address clicking on the sign up
						button at the top right of the page. Once registered you can click
						the make a post button and ask anything you want about programming.
						For that you have a title input field, An article input field, code
						input field, and categories to choose. Once submitted your post
						appears on top of every post list on the homepage. Other users can
						now either vote up or down your post and make comments. Comments can
						also be voted up or down. We would ask you to not post broken code.
						Or to use Stack Overflow for that. But please once you fixed your
						bugs come post the code here to share your experience with the
						community and profit of theirs.
					</p>
				</div>

				{/* TEAM PICS AND SOME TEXT ABOUT THEM */}
				<h3 className="h3__team">Our Team</h3>
				<ul className="sub__about sub__team">
					<li>
						<div className="card__up card__victoria">
							<img
								className="card__img"
								src={victoria}
								alt="Girl in a jacket"
							/>
						</div>
						<div className="card__down">
							<h4 className="h4__about">Victoria</h4>
							<a
								className="social__link"
								href="https://www.linkedin.com/in/victoria15/"
								target="_blank"
								rel="noopener noreferrer"
							>
								LinkedIn
							</a>
							<a
								className="social__link"
								href="https://github.com/victoria2266"
								target="_blank"
								rel="noopener noreferrer"
							>
								GitHub
							</a>
						</div>
					</li>
					<li>
						<div className="card__up card__vadim">
							<img className="card__img" src={vadim} alt="Girl in a jacket" />
						</div>
						<div className="card__down">
							<h4 className="h4__about">Vadim</h4>
							<a
								className="social__link"
								href="https://www.linkedin.com/in/vadim-eremia-6a846510a/"
								target="_blank"
								rel="noopener noreferrer"
							>
								LinkedIn
							</a>
							<a
								className="social__link"
								href="https://github.com/wadush"
								target="_blank"
								rel="noopener noreferrer"
							>
								GitHub
							</a>
						</div>
					</li>
					<li>
						<div className="card__up card__melad">
							<img className="card__img" src={melad} alt="Girl in a jacket" />
						</div>
						<div className="card__down">
							<h4 className="h4__about">Melad</h4>
							<a
								className="social__link"
								href="https://www.linkedin.com/in/melad-kewan-a087221b2/"
								target="_blank"
								rel="noopener noreferrer"
							>
								LinkedIn
							</a>
							<a
								className="social__link"
								href="https://github.com/melkew"
								target="_blank"
								rel="noopener noreferrer"
							>
								GitHub
							</a>
						</div>
					</li>
					<li>
						<div className="card__up card__andreas">
							<img className="card__img" src={andreas} alt="Girl in a jacket" />
						</div>
						<div className="card__down">
							<h4 className="h4__about">Andreas</h4>
							<a
								className="social__link"
								href="https://www.linkedin.com/in/andreaslackmann/"
								target="_blank"
								rel="noopener noreferrer"
							>
								LinkedIn
							</a>
							<a
								className="social__link"
								href="https://github.com/jokk3r"
								target="_blank"
								rel="noopener noreferrer"
							>
								GitHub
							</a>
						</div>
					</li>
					<li>
						<div className="card__up card__gael">
							<img className="card__img" src={gael} alt="Girl in a jacket" />
						</div>
						<div className="card__down">
							<h4 className="h4__about">Gael</h4>
							<a
								className="social__link"
								href="https://www.linkedin.com/in/gael-src/"
								target="_blank"
								rel="noopener noreferrer"
							>
								LinkedIn
							</a>
							<a
								className="social__link"
								href="https://github.com/gael-src"
								target="_blank"
								rel="noopener noreferrer"
							>
								GitHub
							</a>
						</div>
					</li>
				</ul>
			</main>
		);
	}
}

export default About;
