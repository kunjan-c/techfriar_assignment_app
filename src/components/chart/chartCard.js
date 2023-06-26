// import "./chartCard.css";
// import expandIconForChart from "assets/svg/plus_icon_forhart.svg";

// const chartCard = ({ nodeDatum, toggleNode, foreignObjectProps }) => (
//   <g className="test">
//     <circle r={15}></circle>
//     {/* <img src={expandIconForChart}></img> */}
//     {/* `foreignObject` requires width & height to be explicitly set. */}
//     <foreignObject {...foreignObjectProps}>
//       <div className="main-card">
//         <div className="card-label">{nodeDatum.name}</div>
//         {/* {nodeDatum.children && (
//           <button style={{ width: "100%" }} onClick={toggleNode}>
//             {nodeDatum.__rd3t.collapsed ? "Expand" : "Collapse"}
//           </button>
//         )} */}
//         <div className="card-sublebal">CEO</div>
//       </div>
//     </foreignObject>
//   </g>
// );
// export { chartCard };

// const renderRectSvgNode = ({ nodeDatum, toggleNode }) => (
//   <g>
//     <rect width="20" height="20" x="-10" onClick={toggleNode} />
//     <text fill="green" strokeWidth="1" x="20">
//       {nodeDatum.name}
//     </text>
//     {nodeDatum.attributes?.department && (
//       <text fill="black" x="20" dy="20" strokeWidth="1">
//         Department: {nodeDatum.attributes?.department}
//       </text>
//     )}
//   </g>
// );
// export { renderRectSvgNode };
