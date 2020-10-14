import React from "react";
import "./App.css";
import firebase from "../../constants/Firebase";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../layout/header/Header";
import Main from "../main/Main";
import About from "../about/About";
import Contact from "../contact/Contact";
import Privacy from "../legal/privacy/Privacy";
import Impressum from "../legal/impressum/Impressum";
import Footer from "../layout/footer/Footer";

class App extends React.Component {
  // FETCH FIREBASE
  constructor(props) {
    super(props);
    this.state = {
      userData: {},
      modalIsOpen: false,
      user: null,
      allPostsObject: "",
      searchInput: "",
      result: {},
      loading: false,
      message: "",
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.getFirebase = this.getFirebase.bind(this);
    this.fetchUserFirebase = this.fetchUserFirebase.bind(this);
    this.setUser = this.setUser.bind(this);
    this.inputHandleChange = this.inputHandleChange.bind(this);
    this.onBtnSubmit = this.onBtnSubmit.bind(this);
    this.categoryChose = this.categoryChose.bind(this);
    this.subCategoryChose = this.subCategoryChose.bind(this);
  }
  // FOCUS IN MODAL
  componentDidMount() {
    this.fetchUserFirebase();
    this.logUserBack();
  }

  // OPEN TAB MODAL
  openModal() {
    this.setState({
      modalIsOpen: true,
    });
  }

  // CLOSE TAB MODAL
  closeModal() {
    this.setState({
      modalIsOpen: false,
    });
  }

  // USER SET STATE
  setUser(user) {
    this.setState({
      user,
    });
    // IF USER IS LOGGED IN SAVE TOKEN IN LOCAL STORAGE ELSE EMPTY LOCAL STORAGE
    if (user) {
      localStorage.setItem("bkzToken", user.idToken);
    } else {
      localStorage.setItem("bkzToken", "");
    }
  }

  // SEARCHBAR
  inputHandleChange = (event) => {
    this.setState({
      searchInput: event.target.value,
      // loading: true,
      // message: "",
    });
  };

  onBtnSubmit = () => {
    const searchObject = Object.entries(this.state.allPostsObject);
    // console.log(this.state.allPostsObject);
    // console.log(searchObject)

    let searchResultObject = {};

    for (const [key, value] of searchObject) {
      console.log(value);
      if (
        value.article.includes(this.state.searchInput) ||
        value.title.includes(this.state.searchInput)
      ) {
        searchResultObject[key] = value;
      }
    }
    this.setState(
      {
        allPostsObject: searchResultObject,
      },
      () => {
        console.log(searchResultObject);
      }
    );
    // console.log(searchResultObject)
  };

  // POST FIREBASE
  async getFirebase() {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: {
        "Content-Type": "application/json",
      },
    };

    await fetch(`${firebase.databaseURL}/cleancode/posts.json`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // debugger;
        this.setState({
          allPostsObject: result,
        });
      })
      .catch((error) => console.log("error:", error));
  }

  // RECONNECT WITH ID TOKEN WHEN USER DID NOT LOGGED OUT
  async logUserBack() {
    // STORED TOKEN ID
    const storedToken = localStorage.getItem("bkzToken");

    // CHECK IF TOKEN ID IS VALID
    if (storedToken) {
      const requestOptions = {
        method: "POST",
        redirect: "follow",
        // CONVERT STATE IN JSON STRING
        body: JSON.stringify({
          idToken: storedToken,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      };

      // CHECK FIREBASE TOKEN
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${firebase.apiKey}`,
        requestOptions
      ).then((response) => response.json());

      // USER SET STATE
      if (!response.error && response.users.length > 0) {
        this.setState({
          user: Object.assign({ idToken: storedToken }, response.users[0]),
        });
        this.fetchUserFirebase();
      }
    } else {
      // RESET USER NULL IF NO TOKEN ID
      this.setState({
        user: null,
      });
    }
  }

  // FETCH GET TAB FIREBASE
  async fetchUserFirebase() {
    // CANCEL REQUEST IF USER IS NOT LOGGED IN
    if (!this.state.user) {
      return;
    }
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    await fetch(
      `${firebase.databaseURL}/users/${this.state.user.localId}.json?auth=${this.state.user.idToken}`,
      requestOptions
    )
      // PARSE JSON HTTP RESPONSE TO TRANSFORM INTO JS OBJECT
      .then((response) => response.json())
      .then((result) => {
        // TAB SET STATE
        this.setState({
          userData: result ? result : {},
        });
      })
      .catch((error) => console.log("error:", error));
  }

  async categoryChose(item) {
    await this.getFirebase();
    const postsObj = this.state.allPostsObject;
    const postsArr = Object.entries(postsObj);

    let postsFiltred = [];
    for (let post of postsArr) {
      console.log(post);
      if (post[1].categories === item) {
        postsFiltred.push(post);
      }
    }
    let postsFiltredObj = Object.fromEntries(postsFiltred);
    this.setState({
      allPostsObject: postsFiltredObj,
    });
    // let postFilter = allPosts.map((post) => console.log(post));
  }

  async subCategoryChose(item) {
    await this.getFirebase();
    const postsObj = this.state.allPostsObject;
    const postsArr = Object.entries(postsObj);
    let subcategorieToLowerCase = item.toLowerCase();
    console.log(subcategorieToLowerCase);
    let postsFiltred = [];
    for (let post of postsArr) {
      console.log(post);
      if (post[1].subcategories === subcategorieToLowerCase) {
        postsFiltred.push(post);
      }
    }
    let postsFiltredObj = Object.fromEntries(postsFiltred);
    this.setState({
      allPostsObject: postsFiltredObj,
    });
    // let postFilter = allPosts.map((post) => console.log(post));
  }

  render() {
    // console.log("this.state.allPostsObject render", this.state.allPostsObject);
    return (
      <BrowserRouter>
        <div className="App">
          {/* HEADER */}
          <Header
            fetchFirebase={this.fetchUserFirebase}
            openModal={this.openModal}
            closeModal={this.closeModal}
            modalIsOpen={this.state.modalIsOpen}
            firebase={firebase}
            setUser={this.setUser}
            user={this.state.user}
            allPostsObject={this.state.allPostsObject}
            // result={this.state.result}
            // loading={this.state.loading}
            // message={this.state.message}
            searchInput={this.state.searchInput}
            inputHandleChange={this.inputHandleChange}
            onBtnSubmit={this.onBtnSubmit}
          />
          <Switch>
            {/* MAIN */}
            <Route exact path="/">
              <Main
                firebase={firebase}
                user={this.state.user}
                getFirebase={this.getFirebase}
                allPostsObject={this.state.allPostsObject}
                categoryChose={this.categoryChose}
                subCategoryChose={this.subCategoryChose}
              />
            </Route>

            {/* CONTACT */}
            <Route path="/contact">
              <Contact />
            </Route>

            {/* ABOUT */}
            <Route path="/about">
              <About />
            </Route>

            {/* IMPRESSUM */}
            <Route path="/impressum">
              <Impressum />
            </Route>

            {/* PRIVACY */}
            <Route path="/privacy">
              <Privacy />
            </Route>
          </Switch>

          {/* FOOTER */}
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
