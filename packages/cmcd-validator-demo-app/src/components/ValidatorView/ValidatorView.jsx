import "./ValidatorView.css";
import JSONPretty from 'react-json-pretty';
import JSONPrettyTheme from "react-json-pretty/dist/adventure_time";

export function ValidatorView({ output }) {

  return (
    <div>
      <div className="validatorBox"> 
            <JSONPretty id="json-pretty" theme={JSONPrettyTheme} data={output.result}></JSONPretty>
      </div>
    </div>
  );
}
