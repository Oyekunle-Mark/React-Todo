import React from "react";
import "./SearchBar.css";

function SearchBar({ searchValue, searchInputHandler }) {
  return (
    <input
      type="text"
      placeholder="...find a todo"
      value={searchValue}
      onChange={searchInputHandler}
    />
  );
}

export default SearchBar;
