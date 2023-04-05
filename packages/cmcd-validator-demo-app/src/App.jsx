import { useState, useReducer, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css"
import PlayerWrapper from "./components/PlayerWrapper/PlayerWrapper";
import PlayerSelector from "./components/PlayerSelector/PlayerSelector";
import { DataWindow } from "./components/DataWindow/DataWindow";
import { ValidatorView } from "./components/ValidatorView/ValidatorView";
import useRenderSize from "./hooks/useRenderSize";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

import "./App.css";

function setRequestList (state, action) {
  let aggregateArray = []

  switch (action.type) {
    case 'saveQuery': 
      aggregateArray = [...state, action.payload];
      aggregateArray.splice(
        0,
        aggregateArray.length - 50 > 0 ? aggregateArray.length - 50 : 0
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
  const { device } = useRenderSize();

  const handleSelect = (player) => {
    setPlayerSelected(player);
    dispatch({type: 'reset', payload: {}});
    setManifestURI('');
  }

  const handleDispatch = (value) => {
    dispatch({...value});
  }

  const handlePlay = (event) => {
    event.preventDefault();
    setManifestURI(event.target.manifest.value);
  }

  const renderDataWindow = (type) =>{
    if (device === type) {
      return (
      <DataWindow
        data={requestList}
        setValidatorOutput={setValidatorOutput}
        />
      )
    }
  }


  return (
    <Container fluid className="px-5">
      <Row className="justify-content-md-center pb-4">
        <a className="logo" href="https://montevideotech.dev/">
          <Image
          fluid
          src="https://montevideotech.dev/wp-content/uploads/2020/09/mvd-tech-1.png"
          alt="MontevideoTech logo"
          />
        </a>
      </Row>
      <Row className='mainContainer'>{/* main container */}
        <Col sm={8}> {/* player container */}
          <Row> {/* nav bar */}
            <Col sm={4}>
              <PlayerSelector setPlayerSelected={handleSelect} />
            </Col>
            <Col>
              <Form onSubmit={handlePlay}>
                <Form.Group className="d-flex">
                  <Form.Control name="manifest" required placeholder='Manifest URL'/>
                  <Button variant="secondary" type="submit">Play</Button>
                </Form.Group>
              </Form>
            </Col>            
          </Row>
          <Row className="py-3"> {/* Player */}
            <PlayerWrapper playerSelected={playerSelected} playerDispatch={handleDispatch} manifestURI={manifestURI}/>
          </Row>
          <Row> {/* Render on mobile */}
            {renderDataWindow('mobile')}
          </Row>
          <Row> {/* Output */}
            <ValidatorView output={validatorOutput} />
          </Row>
        </Col>
        <Col sm={4}> {/* Data Window */}
          {renderDataWindow('desktop')}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
