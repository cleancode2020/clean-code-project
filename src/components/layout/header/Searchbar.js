import React from "react";

function Searchbar(props) {
  return (
    <>
      <input
        className="nav__input"
        type="search"
        name="search"
        placeholder="Search"
        value={props.searchInput}
        onChange={props.inputHandleChange}
        onKeyUp={props.onBtnSubmit}
      />
      <button type="submit" onClick={props.onBtnSubmit}>
        <i className="nav__icon fas fa-search"></i>
      </button>

      <form className="add-project-form"></form>
      <ul className="project-list"></ul>
    </>
  );
}

export default Searchbar;
