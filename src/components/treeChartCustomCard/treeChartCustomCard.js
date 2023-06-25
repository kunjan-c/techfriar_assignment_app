import React from "react";
import plusIcon from "assets/svg/addIcon.svg";
import profilePic from "assets/img/Angela Howard.png";
import cardOPtion from "assets/svg/cardOptionsIcon.svg";
const TreeChartCustomCard = ({ nodeDatum, toggleNode, foreignObjectProps }) => (
  <foreignObject {...foreignObjectProps}>
    <div
      style={{
        width: "190px",
        height: "96px",
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
          marginTop: "50px",
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
          top:0,
          right:0
     
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
        src={profilePic}
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
          {<div>{nodeDatum.country ? <div>HIII</div> : <div>BYY</div>}</div>}
        </div>
      )}
    </div>
    {/* <img
        src={profilePic}
        style={{
          position: "absolute",
          left: 50,
          right: 50,
          top: 0,
        }}
      ></img> */}
  </foreignObject>
);
export default TreeChartCustomCard;
