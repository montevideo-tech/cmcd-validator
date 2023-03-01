import "./DataWindow.css";
import React, { useState } from "react";

export function DataWindow({ text }) {
  const [CMCDResults, setCMCDResults] = useState({});
  const logList = text.map((t,i) => {
    if (Object.keys(t).length > 0) {
      return (
        <p key={i} onClick={() => setCMCDResults(t.result)}>
          {t.url}
        </p>
      );
    }
  });
  return (
    <div className="data-window-wrapper">
      <div className="data-window">{logList}</div>
      <div className="data-window">{Object.keys(CMCDResults).length > 0? JSON.stringify(CMCDResults) : ""}</div>
    </div>
  );
}
