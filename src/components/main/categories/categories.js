import React from "react";
import "./categories.css";
import firebase from "../../../constants/Firebase";
import { lightfair } from "react-syntax-highlighter/dist/esm/styles/hljs";

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className: "subcategory",
      categories: [
        {
          name: "c++",
          subcategory: [
            "Kigs framework",
            "libPhenom",
            "OpenFrameworks",
            "Reason",
            "ROOT",
            "Ultimate++",
          ],
        },
        {
          name: "java",
          subcategory: [
            "Spring",
            "Hibernate",
            "Struts",
            "Google web toolkit",
            "JavaServer Faces",
            "Grails",
            "Vaadin",
            "Blade",
            "Dropwizard",
            "Play",
          ],
        },
        {
          name: "js",
          subcategory: [
            "React",
            "Angular",
            "Vue.js",
            "Ember.js",
            "Node.js",
            "Polymer",
            "Aurelia",
            "Backbone.js",
            "Mithril",
            "Meteor",
          ],
        },
        {
          name: "rust",
          subcategory: [
            "Actix",
            "Rocket",
            "wrap",
            "Gotham",
            "Nickle",
            "pencil",
          ],
        },

        {
          name: "python",
          subcategory: [
            "Django",
            "Flask",
            "Tornado",
            "Web2py",
            "Bottle",
            "CherryPy",
            "Falcon ",
            "Pyramid",
            "Hug ",
            "TurboGears",
          ],
        },
      ],
    };
    this.handleChange = this.handleChange.bind(this);
    this.fetchFirebase = this.fetchFirebase.bind(this);
    this.updateClass = this.updateClass.bind(this);
  }

  // HANDLE CHANGE BUTTON ONCLICK
  handleChange() {
    this.fetchFirebase();
  }

  // FETCH FIREBASE
  async fetchFirebase() {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    await fetch(`${firebase.databaseURL}/.json`, requestOptions)
      // PARSE JSON HTTP RESPONSE TO TRANSFORM INTO JS OBJECT
      .then((response) => response.json())
      .then((result) => {
        // FIREBASE RESULT		console.log("gerne");
        console.log("FIREBASE RESULT");
        console.log(result.categories);
      })
      .catch((error) => console.log("error:", error));
  }

  updateClass() {
    let className = this.state.className;
    className = className + " " + "subcategoryOpen";
    this.setState({ className });
  }

  render() {
    return (
      <main className="main__categories">
        {/* H2 TITLE */}
        <h2 className="h2__categories">Categories</h2>

        <ul className="ul__categories">
          {this.state.categories.map((item, index) => (
            <li onClick={() => this.props.categoryChose(item)} key={index}>
              {item.name} <button onClick={this.updateClass}>+</button>
              {/* <div className={this.state.className}>
                {item.subcategory.map((item) => (
                  <li>{item}</li>
                ))}
              </div> */}
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

export default Categories;
