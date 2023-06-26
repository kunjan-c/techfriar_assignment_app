import React from "react";
import plusIcon from "assets/img/plusIcon.png";
import minusIcon from "assets/img/minusIcon.png";
import "./zoomNavigation.css";
export default function ZoomNavigation() {
  return (
    <div className="zoom-icon-container">
      <div className="plus-minus-icon-container">
        <img src={plusIcon}></img>
      </div>
      <div className="plus-minus-icon-container">
        <img src={minusIcon}></img>
      </div>
    </div>
  );
}
