import React from "react";
// import firebase from "../../constants/Firebase";
// import "./form.css";

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      userName: "",
      password: "",
      confirmedPassword: "",
      error: null,
      confirmMail: null,
    };
    this.input = React.createRef();
    this.handleChangeMail = this.handleChangeMail.bind(this);
    this.handleChangeUserName = this.handleChangeUserName.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangePasswordConfirm = this.handleChangePasswordConfirm.bind(
      this
    );
    this.submitSignUp = this.submitSignUp.bind(this);
  }

  // FOCUS IN MODAL
  componentDidMount() {
    this.input.current.focus();
  }

  // MAIL SIGN UP SET STATE
  handleChangeMail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  // USER NAME SIGN UP SET STATE
  handleChangeUserName(event) {
    this.setState({
      userName: event.target.value,
    });
  }

  // PASSWORD SIGN UP SET STATE
  handleChangePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  // CONFIRMED PASSWORD SIGN UP SET STATE
  handleChangePasswordConfirm(event) {
    this.setState({
      confirmedPassword: event.target.value,
    });
  }

  // SUBMIT SIGN UP
  async submitSignUp(event) {
    event.preventDefault();
    // POST TO FIREBASE FUNCTION
    const user = await this.signUpFirebase();

    // VERIFY USER
    if (user !== null) {
      this.sendMailVerification(user);
      this.updateFirebaseUserProfile(user);
      await this.sendUserName(user);
    }

    // FETCH AFTER POST TO REFRESH CONTENT
    this.props.fetchFirebase();
    this.props.closeModal();
  }

  // FETCH  FIREBASE SIGN UP
  async signUpFirebase() {
    if (this.state.password !== this.state.confirmedPassword) {
      return;
    }
    debugger;
    const requestOptions = {
      method: "POST",
      redirect: "follow",
      headers: {
        "Content-Type": "application/json",
      },
      // CONVERT STATE IN JSON STRING
      body: JSON.stringify({
        password: this.state.password,
        email: this.state.email,
        returnSecureToken: true,
      }),
    };

    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.props.firebase.apiKey}`,
      requestOptions
    ).then((response) => response.json());

    // VERIFY FIREBASE ERRORS
    if (response.error) {
      this.setState({
        error: response.error,
      });

      this.props.setUser(null);

      return null;
    } else {
      this.setState({
        error: null,
      });
      // LOG IN USER WHEN WIGN UP MODAL CLOSE
      this.props.setUser(response);

      return response;
    }
  }

  // SEND MAIL VERIFICATION
  async sendMailVerification(user) {
    const requestOptions = {
      method: "POST",
      redirect: "follow",
      headers: {
        "Content-Type": "application/json",
      },
      // CONVERT STATE IN JSON STRING
      body: JSON.stringify({
        requestType: "VERIFY_EMAIL",
        idToken: user.idToken,
      }),
    };
    await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${this.props.firebase.apiKey}`,
      requestOptions
    );
  }

  // SEND USER NAME
  async updateFirebaseUserProfile(user) {
    const requestOptions = {
      method: "POST",
      redirect: "follow",
      headers: {
        "Content-Type": "application/json",
      },
      // CONVERT STATE IN JSON STRING
      body: JSON.stringify({
        displayName: this.state.userName,
        idToken: user.idToken,
      }),
    };
    await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${this.props.firebase.apiKey}`,
      requestOptions
    );
  }

  async sendUserName(user) {
    const requestOptions = {
      method: "PUT",
      redirect: "follow",
      headers: {
        "Content-Type": "application/json",
      },
      // CONVERT STATE IN JSON STRING	// }
      body: JSON.stringify(this.state.userName),
    };
    await fetch(
      `${this.props.firebase.databaseURL}/users/${this.props.user.localId}/userName.json?auth=${this.props.user.idToken}`,
      requestOptions
    ).catch((error) => console.log("error:", error));
  }

  render() {
    return (
      <form className="form-div" action="#">
        {/* SIGN UP FORM LEGEND */}
        <legend className="form-legend">SIGN UP</legend>

        {/* MAIL SIGN UP LABEL */}
        <label className="form-label" htmlFor="category-title">
          Your Mail
        </label>

        {/* MAIL SIGN UP INPUT */}
        <input
          required
          className="form-input"
          type="text"
          name="category-title"
          id="category-title"
          placeholder="my.email@ex..."
          value={this.state.mail}
          onChange={this.handleChangeMail}
          ref={this.input}
        />

        {/* USERNAME SIGN UP LABEL */}
        <label className="form-label" htmlFor="category-title">
          Choose a User Name:
        </label>

        {/* USERNAME SIGN UP INPUT */}
        <input
          required
          className="form-input"
          type="text"
          name="category-title"
          id="category-title"
          placeholder="my.email@ex..."
          value={this.state.userName}
          onChange={this.handleChangeUserName}
        />

        {/* PASSWORD SIGN UP LABEL */}
        <label className="form-label" htmlFor="category-title">
          Choose a Password
        </label>

        {/* PASSWORD SIGN UP INPUT */}
        <input
          required
          className="form-input"
          type="password"
          name="category-title"
          id="category-title"
          placeholder="my password..."
          value={this.state.password}
          onChange={this.handleChangePassword}
        />

        {/* CONFIRMED PASSWORD SIGN UP LABEL */}
        <label className="form-label" htmlFor="category-title">
          Confirm Password
        </label>

        {/* CONFIRMED PASSWORD SIGN UP INPUT */}
        <input
          required
          className="form-input"
          type="password"
          name="category-title"
          id="category-title"
          placeholder="my password..."
          value={this.state.confirmedPassword}
          onChange={this.handleChangePasswordConfirm}
        />

        {/* FIREBASE ERROR MESSAGE */}
        {this.state.error && (
          <div className="div-correct-length">
            <p className="p-correct-length">
              Error while trying to authenticate: {this.state.error.message}
            </p>
          </div>
        )}

        {/* SUBMIT BUTTON */}
        <button
          className="submit-button"
          onClick={(e) => {
            this.submitSignUp(e);
            alert("Please confirm your mail.");
          }}
        >
          SIGN UP
        </button>
      </form>
    );
  }
}

export default SignUpForm;
