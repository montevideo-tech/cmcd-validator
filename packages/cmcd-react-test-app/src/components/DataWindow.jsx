import "./DataWindow.css";
import React, { useEffect, useState } from "react";

export function DataWindow({ newData, setValidatorOutput }) {
  const [data, setData] = useState([])
  useEffect(() => {
    const aggregateArray = [...data, ...newData];
      aggregateArray.splice(
        0,
        aggregateArray.length - 15 > 0 ? aggregateArray.length - 15 : 0
      );
      setData(aggregateArray);
  }, [newData]) 
  const logList = data.map((t,i) => {
    if (Object.keys(t).length > 0) {
      return (
        <p key={i} style={{ color: t.result.valid ? "green" : "red" }} onClick={() => setValidatorOutput(t)} className="query-url">
          {t.url}
        </p>
      );
    }
  });
  return (
    <div className="data-window-wrapper">
      <div className="data-window">{logList}</div>
    </div>
  );
}
