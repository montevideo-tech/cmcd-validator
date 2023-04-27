import RequestMessage from "../RequestMessage/RequestMessage";
import React from "react";
import "./DataWindow.css";

export function DataWindow({ data, setValidatorOutput }) {

  const logList = data.map((value,index) => {
    const type = value?.result?.valid? value?.result?.warnings != []? 'success' : 'warning' : 'danger';
    if (Object.keys(value).length > 0) {
      return (
        <div className="py-1">
          <RequestMessage key={index} message={value.url} reqId={value.reqId} type={type} onClick={() => setValidatorOutput(value)}/>
        </div>
      );
    }
  });

  return (
    <div className="data-window-wrapper">
      <div className="data-window">
        {logList}
      </div>
    </div>
  );
}
