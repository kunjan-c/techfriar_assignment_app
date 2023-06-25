import React from "react";
import plusIcon from "assets/svg/black_plus_icon.svg";
import "./sectionHeaderTitle.css";

export default function SectionHeaderTitle() {
  return (
    <div className="section-tilte-container">
      <div className="section-title-text">People</div>
      <div>
        <img src={plusIcon}></img>
      </div>
    </div>
  );
}
