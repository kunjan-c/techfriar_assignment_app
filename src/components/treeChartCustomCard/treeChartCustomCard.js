import React from "react";
import plusIcon from "assets/svg/addIcon.svg";
import profilePic from "assets/img/Angela Howard.png";
import cardOPtion from "assets/svg/cardOptionsIcon.svg";
import cartIcon from "assets/svg/cart_icon.svg";

import whiteDownArrow from "assets/svg/whiteDownArrowIcon.svg";
const TreeChartCustomCard = ({ nodeDatum, toggleNode, foreignObjectProps }) => (
  <foreignObject {...foreignObjectProps}>
    <div
      style={{
        width: "190px",
        height: "150px",
        borderRadius: "8px",
        border: "1px solid #e7e5e4",
        background: "#f6f6f6",
        position: "relative",
        // margin:"20px"
      }}
    >
      <h3
        style={{
          textAlign: "center",
          marginTop: "67px",
          color: "#343341",
          fontSize: "13px",
          fontFamily: "Montserrat",
          fontWeight: "500",
        }}
      >
        {nodeDatum.name}
      </h3>
      <img
        src={cardOPtion}
        alt="cardOptions"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          marginRight: "10px",
        }}
      ></img>
      <div
        style={{
          marginTop: "-10px",
          textAlign: "center",
          color: "#6A6A6A",
          textAlign: "center",
          fontSize: "12px",
          fontFamily: "Montserrat",
        }}
      >
        {nodeDatum.designation}
      </div>
      <img
        src={nodeDatum.profilePicImg}
        style={{
          position: "absolute",
          left: 75,
          top: 0,

          borderRadius: " 50%",
        }}
        alt="profile"
      ></img>
      {nodeDatum.children && (
        // <button style={{ width: "100%" }} onClick={toggleNode}>
        //   {nodeDatum.__rd3t.collapsed ? "Expand" : "Collapse"}
        // </button>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              position: "absolute",
              bottom: 0,
              right: 0,
              left: 0,
              marginBottom: "-10px",
            }}
            onClick={toggleNode}
          >
            <img src={plusIcon}></img>
          </div>
        </div>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {nodeDatum.department && (
          <div
            style={{
              width: "58px",
              height: "18px",
              borderRadius: "100px",
              background: "#5040A5",
              color: "#FFFF",
              fontSize: "10px",
              fontFamily: "Montserrat",
              fontWeight: 600,
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            <img src={cartIcon}></img>
            <span>{nodeDatum.department}</span>
          </div>
        )}
      </div>
      <div>
        {nodeDatum.employeeLength && (
          <div
            style={{
              borderRadius: "12px",
              border: "1px solid #0D99FE",
              background: "#0D99FE",
              color: "white",
              padding: "4px 6px",
              //   width: "30px",
              //   height: "10px",
              position: "absolute",
              bottom: 0,
              left: "42px",
              marginBottom: "-10px",
              color: "white",
              textAlign: "center",
              fontSize: "10px",
              fontFamily: "Montserrat",
              fontWeight: "600px",
            }}
          >
            {nodeDatum.employeeLength ? `${nodeDatum.employeeLength}` : null}
            <img src={whiteDownArrow}></img>
          </div>
          
        )}
      </div>
    </div>
  </foreignObject>
);
export default TreeChartCustomCard;
