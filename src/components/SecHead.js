import React from "react";

const SecHead = ({ num, title, kicker }) => (
  <div className="sec3d-head">
    <div className="sec3d-head-l">
      <span className="mono sec3d-num">{num}</span>
      <h2 className="sec3d-title">
        {title.split("").map((c, i) => (
          <span key={i} className="sec3d-title-ch">{c}</span>
        ))}
      </h2>
    </div>
    <div className="mono sec3d-kicker">/ {kicker}</div>
  </div>
);

export default SecHead;
