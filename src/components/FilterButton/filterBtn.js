import React from 'react';
import FilterIcon from "assets/svg/filterIcon.svg";
import "./filterBtn.css";
export default function FilterBtn() {
  return (
    <div>
        <button className='filter-btn-contaner'>
            <text className='filter-btn-text'>Filter</text>
            <img src={FilterIcon}></img>
        </button>
    </div>
  )
}
