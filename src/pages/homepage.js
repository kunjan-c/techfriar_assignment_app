import PeopleSectionContent from "components/peopleSectionContent/peopleSectionContent";
import Sidebar from "components/sidebar/sidebar";
import ZoomNavigation from "components/zoomNavigation/zoomNavigation";
import React from "react";

export default function Homepage() {
  return (
    <div className="main-page-structure">
      <div className="sidebar-main-container">
        <Sidebar></Sidebar>
      </div>
      <div className="main-section-content-container">
        <PeopleSectionContent></PeopleSectionContent>
        <div className="zooming-container">
        <ZoomNavigation></ZoomNavigation>
        </div>
      </div>
     
    </div>
  );
}
