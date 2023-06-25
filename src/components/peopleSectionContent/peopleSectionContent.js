import PplSecCtaBtns from "components/ctaBtns/pplSecCtaBtns";
import PeopleSectionHeader from "components/peopleSectionHeader/peopleSectionHeader";
import React from "react";
import "./peopleSectionContent.css";
import OrgChart from "components/orgChart/orgChart";


export default function PeopleSectionContent() {
  return (
    <div className="people-sect-main-content">
      <div>
        <PeopleSectionHeader></PeopleSectionHeader>
      </div>
      <div className="ppl-main-content">
        <PplSecCtaBtns></PplSecCtaBtns>
      
        <OrgChart></OrgChart>
      </div>
    </div>
  );
}
