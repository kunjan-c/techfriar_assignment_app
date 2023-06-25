import React, { useCallback, useState } from "react";
import Tree from "react-d3-tree";

import { employeeData } from "components/data/employeeData";
import TreeChartCustomCard from "components/treeChartCustomCard/treeChartCustomCard";

export default function OrgChart() {



  const nodeSize = { x: 200, y: 200 };
  const foreignObjectProps = {
    width: nodeSize.x,
    height: nodeSize.y,
    x: -100,
    y: -100,
  };

  // const getDynamicPathClass = ({ source, target }, orientation) => {
  //   return "link__to-branch";
  // };

  const useCenteredTree = () => {
    const [translate, setTranslate] = useState({ x: 0, y: 0 });
    const containerRef = useCallback((containerElem) => {
      if (containerElem !== null) {
        const { width, height } = containerElem.getBoundingClientRect();
        setTranslate({ x: width / 2, y: height / 2 });
      }
    }, []);
    return [translate, containerRef];
  };

  const [translate, containerRef] = useCenteredTree();
  return (
    // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
    <div className="chart-main-container">
      <div
        id="treeWrapper"
        style={{
          width: "90vw",
          // backgroundColor:"red",
          height: "100vh",
          marginTop: "-250px",
          display: "flex",
          justifyContent: "center",
        }}
        ref={containerRef}
      >
        <Tree
          pathClassFunc={() => "custom-link"}
          data={employeeData}
          orientation="vertical"
          depthFactor={0}
          renderCustomNodeElement={(rd3tProps) =>
            TreeChartCustomCard({ ...rd3tProps, foreignObjectProps })
          }
          branchNodeClassName={"node__branch"}
          // zoom={2}
          translate={translate}
          nodeSize={nodeSize}
          draggable={false}
          // zoomable={false}
        />
      </div>
    </div>
  );
}
