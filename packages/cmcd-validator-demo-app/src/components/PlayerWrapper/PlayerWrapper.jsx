import React, { useEffect, useState } from 'react'
import ShakaPlayer from '../Players/Shaka/Shaka'
import DashPlayer from '../Players/Dash/Dash'
import Dash from '../Players/Dash/Dash'

const PlayerWrapper = ({playerSelected, playerDispatch, manifestURI}) => {
  const [palyerDisplayed, setPlayerDisplayed] = useState(<div></div>)

  useEffect(()=>{
    
    switch(playerSelected) {
      case 'SHAKA':
        return setPlayerDisplayed(<div><ShakaPlayer dispatchReqList={playerDispatch} manifestURI={manifestURI}/></div>)
      case 'HLS':
        return setPlayerDisplayed(<div>HLS</div>)
      case 'DASH': 
        return setPlayerDisplayed(<div><DashPlayer dispatchReqList={playerDispatch} manifestURI={manifestURI}/></div>)
      default: 
        return setPlayerDisplayed(<div></div>)
    }

  },[playerSelected, manifestURI])

  return (
      palyerDisplayed
  )
}

export default PlayerWrapper;