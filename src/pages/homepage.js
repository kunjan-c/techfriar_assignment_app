import PeopleSectionContent from "components/peopleSectionContent/peopleSectionContent";
import Sidebar from "components/sidebar/sidebar";
import React from "react";

export default function Homepage() {
  return (
    <div className="main-page-structure">
      <div className="sidebar-main-container">
        <Sidebar></Sidebar>
      </div>
      <div className="main-section-content-container">
        <PeopleSectionContent></PeopleSectionContent>
      </div>
    </div>
  );
}
