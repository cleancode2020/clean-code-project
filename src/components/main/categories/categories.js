import React from "react";
import "./categories.css";
import firebase from "../../../constants/Firebase";

// class Categories extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       className: "subcategory",
//       categories: [
//         {
//           name: "c++",
//           subcategory: [
//             "Kigs framework",
//             "libPhenom",
//             "OpenFrameworks",
//             "Reason",
//             "ROOT",
//             "Ultimate++",
//           ],
//           iconClass: "ul__icons fab fa-c++",
//         },
//         {
//           name: "java",
//           subcategory: [
//             "Spring",
//             "Hibernate",
//             "Struts",
//             "Google web toolkit",
//             "JavaServer Faces",
//             "Grails",
//             "Vaadin",
//             "Blade",
//             "Dropwizard",
//             "Play",
//           ],
//           iconClass: "ul__icons fab fa-java",
//         },
//         {
//           name: "js",
//           subcategory: [
//             "React",
//             "Angular",
//             "Vue.js",
//             "Ember.js",
//             "Node.js",
//             "Polymer",
//             "Aurelia",
//             "Backbone.js",
//             "Mithril",
//             "Meteor",
//           ],
//           iconClass: "ul__icons fab fa-js",
//         },
//         {
//           name: "rust",
//           subcategory: [
//             "Actix",
//             "Rocket",
//             "wrap",
//             "Gotham",
//             "Nickle",
//             "pencil",
//           ],
//           iconClass: "ul__icons fab fa-rust",
//         },

//         {
//           name: "python",
//           subcategory: [
//             "Django",
//             "Flask",
//             "Tornado",
//             "Web2py",
//             "Bottle",
//             "CherryPy",
//             "Falcon ",
//             "Pyramid",
//             "Hug ",
//             "TurboGears",
//           ],
//           iconClass: "ul__icons fab fa-python",
//         },
//       ],
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.fetchFirebase = this.fetchFirebase.bind(this);
//     this.updateClass = this.updateClass.bind(this);
//   }

//   // HANDLE CHANGE BUTTON ONCLICK
//   handleChange() {
//     this.fetchFirebase();
//   }

//   // FETCH FIREBASE
//   async fetchFirebase() {
//     const requestOptions = {
//       method: "GET",
//       redirect: "follow",
//     };

//     await fetch(`${firebase.databaseURL}/.json`, requestOptions)
//       // PARSE JSON HTTP RESPONSE TO TRANSFORM INTO JS OBJECT
//       .then((response) => response.json())
//       .then((result) => {
//         // FIREBASE RESULT		console.log("gerne");
//         console.log("FIREBASE RESULT");
//         console.log(result.categories);
//       })
//       .catch((error) => console.log("error:", error));
//   }

//   updateClass(item) {
//     let className = this.state.className;
//     className = className + " " + String(item);
//     if (item === "js") {
//       this.setState({ className });
//     }
//   }

//   render() {
//     return (
//       <main className="main__categories">
//         {/* H2 TITLE */}
//         <h2 className="h2__categories">Categories</h2>

//         <ul className="ul__categories">
//           {this.state.categories.map((item, index) => (
//             <li onClick={() => this.props.categoryChose(item)} key={index}>
//               <i className={item.iconClass}></i>
//               {item.name}{" "}
//               <button onClick={() => this.updateClass(item.name)}>+</button>
//               <div className={this.state.className}>
//                 {item.subcategory.map((item, index) => (
//                   <li key={index}>{item}</li>
//                 ))}
//               </div>
//             </li>
//           ))}
//         </ul>
//       </main>
//     );
//   }
// }
class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className: "category",
      c: "categoryC",
      js: "categoryJs",
      java: "categoryJava",
      rust: "categoryRust",
      python: "categoryPython",
      cArrow: "v",
      jsArrow: "v",
      javaArrow: "v",
      rustArrow: "v",
      pythonArrow: "v",
      subcategoryC: [
        "Kigs framework",
        "libPhenom",
        "OpenFrameworks",
        "Reason",
        "ROOT",
        "Ultimate++",
      ],

      subcategoryJava: [
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
      subcategoryJS: [
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

      subcategoryRust: [
        "Actix",
        "Rocket",
        "wrap",
        "Gotham",
        "Nickle",
        "pencil",
      ],

      subcategoryPython: [
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
    };
    this.handleChange = this.handleChange.bind(this);
    this.fetchFirebase = this.fetchFirebase.bind(this);
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
  updateClass(item) {
    let arrowCurrent = item + "Arrow";
    console.log(this.state[item]);
    let nameToUpperCase = item[0].toUpperCase() + item.slice(1);
    let className = this.state.className;
    let classNameCurrent = className + nameToUpperCase + "Open";
    console.log(classNameCurrent.slice(0, -4));
    if (this.state[item] === classNameCurrent) {
      this.setState({
        [item]: className + nameToUpperCase,
        [arrowCurrent]: "v",
      });
    } else {
      this.setState({
        [item]: classNameCurrent,
        [arrowCurrent]: "^",
      });
    }
  }

  render() {
    return (
      <main className="categories__main">
        {/* H2 TITLE */}
        <h2 className="categories__h2">Categories</h2>

        <ul className="categories__ul">
          <li
            className="categories__li"
            onClick={() => this.props.categoryChose("js")}
          >
            <div className="categories__info">
              <i className="ul__icons fab fa-js"></i>
              <p>JavaScript</p>
            </div>
            <button
              className="button__arrow"
              onClick={(event) => {
                event.stopPropagation();
                this.updateClass("js");
              }}
            >
              {this.state.jsArrow}
            </button>
          </li>

          <ul className={this.state.js}>
            {this.state.subcategoryJS.map((item, index) => (
              <li
                className="subcategory__name"
                key={index}
                onClick={() => this.props.subCategoryChose(item)}
              >
                {item}
              </li>
            ))}
          </ul>
          <li
            className="categories__li"
            onClick={() => this.props.categoryChose("java")}
          >
            <div className="categories__info">
              <i className="ul__icons fab fa-java"></i> <p>Java</p>
            </div>
            <button
              className="button__arrow"
              onClick={(event) => {
                event.stopPropagation();
                this.updateClass("java");
              }}
            >
              {this.state.javaArrow}
            </button>
          </li>
          <ul className={this.state.java}>
            {this.state.subcategoryJava.map((item, index) => (
              <li
                className="subcategory__name"
                key={index}
                onClick={() => this.props.subCategoryChose(item)}
              >
                {item}
              </li>
            ))}
          </ul>
          <li
            className="categories__li"
            onClick={() => this.props.categoryChose("python")}
          >
            <div className="categories__info">
              <i className="ul__icons fab fa-python"></i>
              <p>Python</p>
            </div>
            <button
              className="button__arrow"
              onClick={(event) => {
                event.stopPropagation();
                this.updateClass("python");
              }}
            >
              {this.state.pythonArrow}
            </button>
          </li>
          <ul className={this.state.python}>
            {this.state.subcategoryPython.map((item, index) => (
              <li
                className="subcategory__name"
                key={index}
                onClick={() => this.props.subCategoryChose(item)}
              >
                {item}
              </li>
            ))}
          </ul>
          <li
            className="categories__li"
            onClick={() => this.props.categoryChose("rust")}
          >
            <div className="categories__info">
              <i className="ul__icons fab fa-rust"></i>
              <p>Rust</p>
            </div>
            <button
              className="button__arrow"
              onClick={(event) => {
                event.stopPropagation();
                this.updateClass("rust");
              }}
            >
              {this.state.rustArrow}
            </button>
          </li>
          <ul className={this.state.rust}>
            {this.state.subcategoryRust.map((item, index) => (
              <li
                className="subcategory__name"
                key={index}
                onClick={() => this.props.subCategoryChose(item)}
              >
                {item}
              </li>
            ))}
          </ul>
          <li
            className="li__icon categories__li"
            onClick={() => this.props.categoryChose("c++")}
          >
            <div className="categories__info">
              <img
                alt="c++ icon"
                className="ul__icons"
                width="40"
                src="https://img.icons8.com/ios-filled/50/000000/c-plus-plus-logo.png"
              />
              <p>C++</p>
            </div>
            <button
              className="button__arrow"
              onClick={(event) => {
                event.stopPropagation();
                this.updateClass("c");
              }}
            >
              {this.state.cArrow}
            </button>
          </li>
          <ul className={this.state.c}>
            {this.state.subcategoryC.map((item, index) => (
              <li
                className="subcategory__name"
                key={index}
                onClick={() => this.props.subCategoryChose(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </ul>
      </main>
    );
  }
}

export default Categories;
