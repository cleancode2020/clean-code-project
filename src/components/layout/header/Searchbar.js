import React from "react";

function Searchbar(props) {
	return (
		<>
			<button className="search__button" type="submit" onClick={props.onBtnSubmit}>
				<i className="nav__icon fas fa-search"></i>
			</button>
			<input
				className="nav__input"
				type="search"
				name="search"
				placeholder="Search..."
				value={props.searchInput}
				onChange={props.inputHandleChange}
				onKeyUp={props.onBtnSubmit}
			/>
		</>
	);
}

export default Searchbar;
