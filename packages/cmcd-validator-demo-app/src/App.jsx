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
  const [predefinedURLs] = useState([
    { label: 'https://dxclj9vp3m44c.cloudfront.net/hls/Costa_Rica_144.m3u8 - NOT FOR DASH', url: 'https://dxclj9vp3m44c.cloudfront.net/hls/Costa_Rica_144.m3u8' },
    { label: 'https://livesim.dashif.org/livesim/scte35_2/testpic_2s/Manifest.mpd - NOT FOR HLS', url: 'https://livesim.dashif.org/livesim/scte35_2/testpic_2s/Manifest.mpd' },
    { label: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd - NOT FOR HLS', url: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd' },
    { label: 'https://dash.akamaized.net/digitalprimates/fraunhofer/480p_video/heaac_2_0_with_video/Sintel/sintel_480p_heaac2_0.mpd - NOT FOR HLS', url: 'https://dash.akamaized.net/digitalprimates/fraunhofer/480p_video/heaac_2_0_with_video/Sintel/sintel_480p_heaac2_0.mpd' },
    { label: 'https://cmafref.akamaized.net/cmaf/live-ull/2006350/akambr/out.m - NOT FOR HLS', url: 'https://cmafref.akamaized.net/cmaf/live-ull/2006350/akambr/out.mpd' }

  ]);

  const handleSelect = (player) => {
    setPlayerSelected(player);
    dispatch({type: 'reset', payload: {}});
    setManifestURI('');
  }

  const handleDispatch = (value) => {
    dispatch({...value});
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

  const handlePlay = (event) => {
    event.preventDefault();
    const manifestInput = event.target.manifest.value;
    const manualManifestInput = event.target.manualManifest.value;
    if (manualManifestInput) {
      setManifestURI(manualManifestInput);
    } else if (manifestInput) {
      setManifestURI(manifestInput);
    }
  };


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
      as="select"
      name="manifest"
      onChange={(e) => setManifestURI(e.target.value)}
    >
      <option value="">Select a manifest</option>
      {predefinedURLs.map((url) => (
        <option key={url.url} value={url.url}>{url.label}</option>
      ))}
    </Form.Control>
    <Form.Control
      name="manualManifest"
      placeholder="Or enter the manifest URL manually"
    />
    <Button variant="primary" type="submit">Start</Button>
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
