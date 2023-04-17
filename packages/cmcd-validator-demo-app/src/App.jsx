import { useState, useReducer } from "react";
import PlayerWrapper from "./components/PlayerWrapper/PlayerWrapper";
import PlayerSelector from "./components/PlayerSelector/PlayerSelector";
import { DataWindow } from "./components/DataWindow/DataWindow";
import { ValidatorView } from "./components/ValidatorView/ValidatorView";
import useRenderSize from "./hooks/useRenderSize";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

import "./App.scss";

function setRequestList (state, action) {
  let aggregateArray = []

  switch (action.type) {
    case 'saveQuery': 
      aggregateArray = [action.payload, ...state];
      aggregateArray.splice(
        30,
        aggregateArray.length - 30 > 0 ? aggregateArray.length - 30 : 0
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
          <Row className='justify-content-between'> {/* nav bar */}
            <Col className="mb-3" md="auto">
              <PlayerSelector setPlayerSelected={handleSelect} />
            </Col>
            <Col>
              <Form onSubmit={handlePlay}>
                <InputGroup className="mb-3">
                  <Form.Control
                    name="manifest"
                    required 
                    placeholder='Manifest URL'
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <Button variant="primary" type="submit">start</Button>
              </InputGroup>
              </Form>
            </Col>            
          </Row>
          <Row className="mb-3"> {/* Player */}
            <PlayerWrapper playerSelected={playerSelected} playerDispatch={handleDispatch} manifestURI={manifestURI}/>
          </Row>
          <Row className="mb-3"> {/* Render on mobile */}
            {renderDataWindow('mobile')}
          </Row>
          <Row className='px-3'> {/* Output */}
            <ValidatorView output={validatorOutput}/>
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
