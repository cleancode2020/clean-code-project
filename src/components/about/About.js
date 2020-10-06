import React from "react";
import "../about/about.css";
import gael from "../../assets/teamImage/Gael.jpg";
import andreas from "../../assets/teamImage/Andreas.png";
import melad from "../../assets/teamImage/Melad.png";
import victoria from "../../assets/teamImage/Victoria.jpg";
import vadim from "../../assets/teamImage/Vadim.png";

class About extends React.Component {
	state = {
		teams: [
			{
				id: 1,
				name: "Gael",
				title: "frontend-management",
				linkedInPage: "https://www.linkedin.com/in/gael-src/",
				github: "https://github.com/gael-src",
			},
			{
				id: 2,
				name: "Andreas",
				title: "frontend-management",
				linkedInPage: "",
				github: "https://github.com/jokk3r",
			},
			{
				id: 3,
				name: "Melad",
				title: "frontend-developer",
				linkedInPage: "https://www.linkedin.com/in/melad-kewan-a087221b2/",
				github: "https://github.com/melkew",
			},
			{
				id: 4,
				name: "Victoria",
				title: "frontend-developer",
				linkedInPage: "https://www.linkedin.com/in/victoria15/",
				github: "https://github.com/victoria2266",
			},
			{
				id: 5,
				name: "Vadim",
				title: "frontend-developer",
				linkedInPage: "https://www.linkedin.com/in/vadim-eremia-6a846510a/",
				github: "https://github.com/wadush",
			},
		],
	};
	handleOnMouseMove = () => {
		return console.log(this.state.teams[1].title);
	};

	render() {
		return (
			<main className="main__about">
				<h2 className="h1__about">About</h2>
				<div className="sub__about">
					{/* DESCRIPTION ABOUT US*/}
					<h2 className="h2__style">What is Cleancode?</h2>
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
					<h2 className="h2__style">Who are we?</h2>
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
					<h2 className="h2__style">How does it work?</h2>
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
				<h2 className="h2__style">Our Team</h2>
				<div className="team__container">
					<figure className="effect__imgs">
						<div className="figcaption">
							<img src={gael} alt="gael" />
							<h2>{this.state.teams[0].name}</h2>
							<p className="links">
								<a href={this.state.teams[0].linkedInPage}>Linkedin</a>
								<a href={this.state.teams[0].github}>Github</a>
							</p>

							<div className="description">
								<p>{this.state.teams[0].name}</p>
								<p>{this.state.teams[0].title}</p>
							</div>
						</div>

						<div className="figcaption">
							<img src={andreas} alt="andreass" />

							<h2>{this.state.teams[1].name}</h2>
							<p className="links">
								<a href={this.state.teams[1].linkedInPage}>Linkedin</a>
								<a href={this.state.teams[1].github}>Github</a>
							</p>

							<div className="description">
								<p>{this.state.teams[1].name}</p>
								<p>{this.state.teams[1].title}</p>
							</div>
						</div>

						<div className="figcaption">
							<img src={melad} alt="melad" />

							<h2>{this.state.teams[2].name}</h2>
							<p className="links">
								<a href={this.state.teams[2].linkedInPage}>Linkedin</a>
								<a href={this.state.teams[2].github}>Github</a>
							</p>

							<div className="description">
								<p>{this.state.teams[2].name}</p>
								<p>{this.state.teams[2].title}</p>
							</div>
						</div>

						<div className="figcaption">
							<img src={victoria} alt="victoria" />

							<h2>{this.state.teams[3].name}</h2>
							<p className="links">
								<a href={this.state.teams[3].linkedInPage}>Linkedin</a>
								<a href={this.state.teams[3].github}>Github</a>
							</p>

							<div className="description">
								<p>{this.state.teams[3].name}</p>
								<p>{this.state.teams[3].title}</p>
							</div>
						</div>

						<div className="figcaption">
							<img src={vadim} alt="vadim" />

							<h2>{this.state.teams[4].name}</h2>
							<p className="links">
								<a href={this.state.teams[4].linkedInPage}>Linkedin</a>
								<a href={this.state.teams[4].github}>Github</a>
							</p>

							<div className="description">
								<p>{this.state.teams[4].name}</p>
								<p>{this.state.teams[4].title}</p>
							</div>
						</div>
					</figure>
				</div>
			</main>
		);
	}
}

export default About;
