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
      { id: 1, name: "Gael", title: "frontend-management" },
      { id: 2, name: "Andreas", title: "frontend-management" },
      { id: 3, name: "Melad", title: "frontend-developer" },
      { id: 4, name: "Victoria", title: "frontend-developer" },
      { id: 5, name: "Vadim", title: "frontend-developer" },
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
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet
        </p>

        {/* OUR PRODUCT */}
        <h2 className="h2__style">Our Product</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet
        </p>

        {/* TEAM PICS AND SOME TEXT ABOUT THEM */}
        <h2>Our Team</h2>
        <div className="team__container">
          <div>
            <img src={gael} alt="gael" onMouseMove={this.handleOnMouseMove} />
            <p>Gael</p>
          </div>

          <div>
            <img src={melad} alt="melad" onMouseMove={this.handleOnMouseMove} />
            <p>Melad</p>
          </div>

          <div>
            <img
              src={victoria}
              alt="victoria"
              onMouseMove={this.handleOnMouseMove}
            />
            <p>Victoria</p>
          </div>

          <div>
            <img src={vadim} alt="vadim" onMouseMove={this.handleOnMouseMove} />
            <p>Vadim</p>
          </div>

          <div>
            <img
              src={andreas}
              alt="andreass"
              onMouseMove={this.handleOnMouseMove}
            />
            <p>Andreas</p>
          </div>
        </div>
        {/* CONTACT */}
        <h2 className="h2__style">make contact with us</h2>
        <p>
          <a href="teamcode35@gmail.com">
            would you share your opinion on it to make it better{" "}
          </a>
        </p>
      </main>
    );
  }
}

export default About;
