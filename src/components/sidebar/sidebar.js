import Logo from "components/logo/logo";
import React from "react";
import menuIcon1 from "assets/svg/menu_icon1.svg";
import menuIcon2 from "assets/svg/menu_icon2.svg";
import menuIcon3 from "assets/svg/menu_icon3.svg";
import menuIcon4 from "assets/svg/menu_icon4.svg";
import menuIcon5 from "assets/svg/menu_icon5.svg";
import menuIcon6 from "assets/svg/menu_icon6.svg";
import notification from "assets/svg/Notification.svg";
import profileImg from "assets/svg/profile_icon.svg";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar-main-section">
      <Logo></Logo>
      <div className="menu-icons-container ">
        <div className="single-menu-icon-container center-alignment">
          <img className="menu-icon-imgs" src={menuIcon1}></img>
        </div>
        <div className="single-menu-icon-container center-alignment">
          <img className="menu-icon-imgs" src={menuIcon2}></img>
        </div>
        <div className="single-menu-icon-container center-alignment">
          <img className="menu-icon-imgs" src={menuIcon3}></img>
        </div>
        <div className="single-menu-icon-container center-alignment">
          <img className="menu-icon-imgs" src={menuIcon4}></img>
        </div>
        <div className="single-menu-icon-container center-alignment">
          <img className="menu-icon-imgs" src={menuIcon5}></img>
        </div>
        <div className="single-menu-icon-container center-alignment">
          <img className="menu-icon-imgs" src={menuIcon6}></img>
        </div>
        <div className="notification-profile-icon-container">
          <div className="single-menu-icon-container center-alignment">
            <img className="menu-icon-imgs" src={notification}></img>
          </div>
          <div className="single-menu-icon-container center-alignment ">
            <img className="menu-icon-imgs sidebar-profile-icon-container" src={profileImg} ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
