import React from "react";

function Searchbar(props) {
  return (
    <div className="nav__search">
      <div className="nav__searchbar">
        <input
          className="nav__input"
          type="search"
          name="search"
          placeholder="Search"
          value={props.searchInput}
          onChange={props.inputHandleChange}
        />
        <button type="submit" onClick={props.onBtnSubmit}>
          <i className="nav__icon fas fa-search"></i>
        </button>

        <form className="add-project-form"></form>
        <ul className="project-list"></ul>
      </div>
    </div>
  );
}

export default Searchbar;
