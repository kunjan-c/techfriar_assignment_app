import React from "react";
import "./pplSecCtaBtns.css";

import pplCta1 from "assets/svg/ctaBtn1.svg";
import pplCta2 from "assets/svg/ctaBtn2.svg";
import pplCta3 from "assets/svg/ctaBtn3.svg";
export default function PplSecCtaBtns() {
  return (
    <div className="ppl-cta-main-container">
      <div className="ppl-cta-btn-container">
        <div className="ppl-cta-btn">
          <img src={pplCta1}></img>
        </div>
        <div className="ppl-cta-btn">
          <img src={pplCta2}></img>
        </div>
        <div className="ppl-cta-btn-selected">
          <img src={pplCta3}></img>
        </div>
      </div>
    </div>
  );
}
