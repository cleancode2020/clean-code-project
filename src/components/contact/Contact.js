import React from "react";
import "./Contact.css";
import axios from "axios";

class Contact extends React.Component {
  state = {
    name: "",
    lastname: "",
    email: "",
    message: "",
    sent: false,
  };

  // HANDLE INPUTS
  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleLastName = (e) => {
    this.setState({
      lastname: e.target.value,
    });
  };
  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handleMessage = (e) => {
    this.setState({
      message: e.target.value,
    });
  };
  // END OF HANDLE INPUTS

  fromSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: this.state.name,
      lastsname: this.state.lastname,
      email: this.state.email,
      message: this.state.message,
    };
    let apiUrl = null;
    if (Math.random() < 0.5) {
      apiUrl = "https://formspree.io/xknpnbpw";
    } else {
      apiUrl = "https://formkeep.com/f/b260984f95b2";
    }
    axios
      .post(apiUrl, data)
      .then((res) => {
        this.setState({
          sent: true,
        });
      })
      .catch(() => {
        console.log("message not sent");
      });
  };

  // FOR RESETING INTIAL DATA
  resetForm = () => {
    this.setState({
      name: "",
      lastname: "",
      email: "",
      message: "",
    });
    setTimeout(() => {
      this.setState({
        sent: false,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="h1__style">let us make it better for you</h1>
        <p className="text__contact">
          if you have any question or Feedback let us know
        </p>
        <form onSubmit={this.fromSubmit}>
          {/* SINGLE ITEM */}
          <div className="singleItem">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="name"
              placeholder="your name..."
              value={this.state.name}
              onChange={this.handleName}
            ></input>
          </div>

          {/* END OF SINGLE ITEM */}
          {/* SINGLE ITEM */}
          <div className="singleItem">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              name="lastname"
              className="lastname"
              placeholder="your last name..."
              value={this.state.lastname}
              onChange={this.handleLastName}
            ></input>
          </div>

          {/* END OF SINGLE ITEM */}
          {/* SINGLE ITEM */}
          <div className="singleItem">
            <label htmlFor="email">E-Mail</label>
            <input
              type="text"
              name="email"
              className="email"
              placeholder="your email..."
              value={this.state.email}
              onChange={this.handleEmail}
              required
            ></input>
          </div>
          {/* END OF SINGLE ITEM */}
          {/* SINGLE ITEM */}
          <div className="textArea singleItem">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id=""
              cols="30"
              rows="5"
              placeholder="your message..."
              value={this.state.message}
              onChange={this.handleMessage}
            ></textarea>
          </div>
          {/* END OF SINGLE ITEM */}
          <div className={this.state.sent ? "msg msgAppear" : "msg"}>
            {" "}
            Massage has been sent
          </div>
          <div className="btn">
            <button type="submit">Send</button>
          </div>
        </form>

        <div className="main__contact">
          <h2 className="h2__contact">send us direct an E-Mail</h2>
          <p className="info-links">
            <a href="mailto: codeteam35@gmail.com">Email</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Contact;
