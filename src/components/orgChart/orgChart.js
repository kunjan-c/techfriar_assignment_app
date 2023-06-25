import React, { useCallback, useState } from "react";
import Tree from "react-d3-tree";
import plusIcon from "assets/svg/addIcon.svg";
import profilePic from "assets/img/Angela Howard.png";
export default function OrgChart() {
  const orgChart = {
    name: "Seth Williams",
    designation: "Managing director",
    children: [
      // {
      //   name: "Dave Coopereman",
      //   designation:"Regional Director",
      //   attributes: {
      //     department: "Production",
      //   },
      //   children: [
      //     {
      //       name: "Dave Coopereman",
      //       designation:"Regional Director",
      //       attributes: {
      //         department: "Fabrication",
      //       },
      //       children: [

      //       ],
      //     },
      //     {
      //       name: "Foreman",
      //       attributes: {
      //         department: "Assembly",
      //       },
      //       children: [
      //         {
      //           name: "Worker",
      //         },
      //       ],
      //     },
      //   ],
      // },
      {
        name: "Ramon Harris",
        children: [
          {
            name: "Janet Parks",
          },
          {
            name: "Isabelle Kaif",
          },
        ],
        attributes: {
          country: "Brazil",
          flag: "will put",
        },
      },
      {
        name: " Dan Morgan",
        children: [
          {
            name: "Ivan Toney",
          },
          {
            name: "Sabrina Francis",
          },
        ],
      },
      {
        name: "Stella Nelson",
        children: [
          {
            name: "Miles Clark",
          },
          {
            name: "Angela Howard",
          },
        ],
      },
    ],
  };

  const renderForeignObjectNode = ({
    nodeDatum,
    toggleNode,
    foreignObjectProps,
  }) => (
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
            {
              <div>
                {nodeDatum.attributes.country ? (
                  <div>HIII</div>
                ) : (
                  <div>BYY</div>
                )}
              </div>
            }
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
          data={orgChart}
          orientation="vertical"
          depthFactor={0}
          renderCustomNodeElement={(rd3tProps) =>
            renderForeignObjectNode({ ...rd3tProps, foreignObjectProps })
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
