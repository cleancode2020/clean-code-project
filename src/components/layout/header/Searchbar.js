import React from "react";

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
    };
  }

  inputHandleChange = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
  };

  onBtnSubmit = () => {
    // console.log(this.state.searchInput);
    // console.log(this.props.allPostsObject);
    const searchArray = Object.values(this.props.allPostsObject);
    searchArray.map((item) => {
      console.log(item);
      return item;
    });
  };

  render() {
    return (
      <div className="nav__search">
        <div className="nav__searchbar">
          <input
            className="nav__input"
            type="search"
            name="search"
            placeholder="Search"
            value={this.state.searchInput}
            onChange={this.inputHandleChange}
          />
          <button type="submit" onClick={this.onBtnSubmit}>
            <i className="nav__icon fas fa-search"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Searchbar;
