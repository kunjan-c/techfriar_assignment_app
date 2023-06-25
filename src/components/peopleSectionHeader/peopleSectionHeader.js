import SearchBar from "components/searchBar/searchBar";
import SectionHeaderTitle from "components/sectionHeaderTitle/sectionHeaderTitle";
import React, { Fragment } from "react";
import "./peopleSectionHeader.css";
import FilterBtn from "components/FilterButton/filterBtn";

export default function PeopleSectionHeader() {
  return (
    // <Fragment>
      <div className="section-header-container">
        <div className="title-container">
          <SectionHeaderTitle></SectionHeaderTitle>
        </div>
        <div className="search-bar-filter-btn-container">
          <SearchBar></SearchBar>
          <FilterBtn></FilterBtn>
        </div>
      </div>
    // </Fragment>
  );
}
