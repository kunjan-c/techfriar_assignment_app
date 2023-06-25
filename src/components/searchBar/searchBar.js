import React from "react";
import searchIcon from "assets/svg/Search.svg";
import "./searchBar.css";
export default function SearchBar() {
  return (
    <div className="searchbar-container">
      <img src={searchIcon} className="search-icon"></img>
      <input placeholder="Search" className="search-input-text"></input>
    </div>
  );
}
