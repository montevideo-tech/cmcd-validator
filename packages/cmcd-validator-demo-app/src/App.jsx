import { useState, useReducer, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css"
import PlayerWrapper from "./components/PlayerWrapper/PlayerWrapper";
import PlayerSelector from "./components/PlayerSelector/PlayerSelector";
import { DataWindow } from "./components/DataWindow/DataWindow";
import { ValidatorView } from "./components/ValidatorView/ValidatorView";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import "./App.css";


function setRequestList (state, action) {
  let aggregateArray = []

  switch (action.type) {
    case 'saveQuery': 
      aggregateArray = [...state, action.payload];
      aggregateArray.splice(
        0,
        aggregateArray.length - 15 > 0 ? aggregateArray.length - 15 : 0
      );
    break;
  
    default:
      break;
  }

  return aggregateArray
}

function App() {
  const [playerSelected, setPlayerSelected] = useState('');
  const [requestList, dispatch] = useReducer(setRequestList, []);
  const [validatorOutput, setValidatorOutput] = useState("");
  const [manifestURI, setManifestURI] = useState('');
  const [manifestImput, setManifestImput] = useState('');

  useEffect(() => {
    console.log('changing manifest', manifestURI)
  }, [manifestImput, manifestURI])

  const handleSelect = (player) => {
    setPlayerSelected(player);
    dispatch({type: 'reset', payload: {}});
    setManifestURI('asd');
  };

  const handleDispatch = (value) => {
    dispatch({...value});
  }

  const handleInput = (input) => {
    setManifestImput(input.target.value);
  };

  const handlePlay = () => {
    console.log('play');
    setManifestURI(manifestImput);
  }

  return (
    <div className="App">

      <a href="https://montevideotech.dev/" target="_blank">
        <img
          href="https://montevideotech.dev/"
          src="https://montevideotech.dev/wp-content/uploads/2020/09/mvd-tech-1.png"
          className="logo"
          alt="MontevideoTech logo"
        />
      </a>
      <Form onSubmit={handlePlay}>
        <Form.Group className="d-flex m-2">
          <Form.Control required placeholder='Manifest URL'/>
          <Button variant="primary" type="submit">Play</Button>
        </Form.Group>
      </Form>
      <input
        className="text ms-2"
        placeholder="Manifest URL"
        onChange={handleInput}
      ></input>
      <button className="btn btn-primary" onClick={handlePlay}>
        Start
      </button>
      <PlayerSelector setPlayerSelected={handleSelect} />
      <PlayerWrapper playerSelected={playerSelected} playerDispatch={handleDispatch} manifestURI={manifestURI}/>
      <DataWindow
        data={requestList}
        setValidatorOutput={setValidatorOutput}
      />
      <ValidatorView output={validatorOutput} />
    </div>
  );
}

export default App;
