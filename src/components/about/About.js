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
        <h1 className="h1__about">About Us</h1>

        {/* DISCRIPTION ABOUT US*/}
        <h2 className="h2__style">who we are</h2>
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet
        </p>

        {/* OUR PRODUCT */}
        <h2 className="h2__style">Our Product</h2>
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet
        </p>

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
