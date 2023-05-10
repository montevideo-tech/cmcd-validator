import React, { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton';


const uris = [
    { type: 'HLS', value: 'https://dxclj9vp3m44c.cloudfront.net/hls/Costa_Rica_144.m3u8' },
    { type: 'DASH', value: 'https://livesim.dashif.org/livesim/scte35_2/testpic_2s/Manifest.mpd' },
    { type: 'DASH', value: 'https://dash.akamaized.net/digitalprimates/fraunhofer/480p_video/heaac_2_0_with_video/Sintel/sintel_480p_heaac2_0.mpd' },
    { type: 'DASH', value: 'https://cmafref.akamaized.net/cmaf/live-ull/2006350/akambr/out.mpd' },
    { type: 'DASH', value: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd' },
  ];
  
const SegmentedButtonDropdownsExample = (props) => {

    const { playerSelected } = props;
    const [items, setItems] = useState([]);
    const [manifest, setManifest] = useState('');

    useEffect(() => {
        switch (playerSelected) {
            case 'HLS':
                const hlsUris = uris.filter((uri) => uri.type === 'HLS');
                setItems(hlsUris);
            break;
            case 'DASH':
                const dashUris = uris.filter((uri) => uri.type === 'DASH');
                setItems(dashUris);
            break;
            default:
                setItems(uris);
        }
    }, [playerSelected]);

    const handleChange = (e) => {
        setManifest(e.target.value);
    }

    const handleSelect = (e) =>{
        setManifest(items[e].value);
    }
    

  return (
      <InputGroup className="mb-3">
        <DropdownButton
            id="dropdown-basic-button"
            className="floatRight"
            onSelect={handleSelect}
            title='URL'
        >
             {items.map((uri, index) =>( 
                    <Dropdown.Item key={index} eventKey={index}>
                        {uri.type + ' - ' + uri.value}
                    </Dropdown.Item>
                ))}
        </DropdownButton>
        <Form.Control name='manifest' value={manifest} onChange={handleChange}></Form.Control>
        <Button type='submit'>Start</Button>
      </InputGroup>
  );
}

export default SegmentedButtonDropdownsExample;