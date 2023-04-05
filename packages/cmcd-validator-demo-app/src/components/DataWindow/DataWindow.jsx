import RequestMessage from "../RequestMessage/RequestMessage";
import "./DataWindow.css";
import React from "react";

export function DataWindow({ data, setValidatorOutput }) {

  const logList = data.map((value,index) => {
    const type = value?.result?.valid? value?.result?.warnings != []? 'success' : 'warning' : 'danger';
    if (Object.keys(value).length > 0) {
      return (
        <div className="py-1">
          <RequestMessage key={index} message={value.url} type={'danger'} onClick={() => setValidatorOutput(value)}/>
          {/* <p key={i} style={{ color: value?.result?.valid ? "green" : "red" }} onClick={() => setValidatorOutput(t)} className="query-url">
            {t.url}
          </p> */}
        </div>
      );
    }
  });

  return (
    <div className="data-window-wrapper">
      <div className="data-window">{logList}</div>
    </div>
  );
}
