import { useEffect, useState } from 'react';
import JSONPretty from 'react-json-pretty';
import JSONPrettyTheme from "react-json-pretty/dist/adventure_time";
import Alert from 'react-bootstrap/Alert';
import "./ValidatorView.css";

export function ValidatorView({ output }) {

  const [show, setShow] = useState(false);
  const [variant, setVariant ] = useState('success');

  useEffect(() => {
    if (output)
    {
      setShow(true);
      const type = output?.result?.valid? output?.result?.warnings != []? 'success' : 'warning' : 'danger';
      setVariant(type);
    }
  }, [output])
  


  return (
    <Alert show={show} variant={variant} onClose={() => setShow(false)} dismissible>
      <p className='validatorBoxHeader'>{output.url}</p>
      <hr />
      <div className='validatorBox'>
        <JSONPretty id="json-pretty" theme={JSONPrettyTheme} data={output.result}></JSONPretty>
      </div>
    </Alert>
  );
}
