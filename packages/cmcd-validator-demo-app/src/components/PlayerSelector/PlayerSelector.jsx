import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const playerList = [
  { key: "SHAKA", value: "Shaka" },
  { key: "HLS", value: "hls.js" },
  { key: "DASH", value: "Dash.js" }
];

const PlayerSelector = ({setPlayerSelected}) => {  

  const [selected, setSelected] = useState({});
  const handleSelect = (key) => {
    setPlayerSelected(playerList[key].key);
    setSelected({ key, value: 'Player: ' + playerList[key].value });
  };

  return (
    <DropdownButton
      id="dropdown-basic-button"
      className="floatRight"
      onSelect={handleSelect}
      title={selected?.value || 'Select Player'}
    >
      {playerList.map((item, index) => {
        return (
          <Dropdown.Item key={index} eventKey={index}>
            {item.value}
          </Dropdown.Item>
        );
      })}
    </DropdownButton>
  )
}

export default PlayerSelector