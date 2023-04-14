import React, { useEffect, useState } from 'react'
import ShakaPlayer from '../Players/Shaka/Shaka'
import VideoJS from '../Players/VideoJs/VideoJs'
import HlsPlayer from '../Players/Hls/Hls'

const PlayerWrapper = ({playerSelected, playerDispatch, manifestURI}) => {
  const [palyerDisplayed, setPlayerDisplayed] = useState(<div></div>)

  useEffect(()=>{
    
    switch(playerSelected) {
      case 'SHAKA':
        return setPlayerDisplayed(<div><ShakaPlayer dispatchReqList={playerDispatch} manifestURI={manifestURI}/></div>)
      case 'HLS':
        return setPlayerDisplayed(<div><HlsPlayer dispatchReqList={playerDispatch} manifestURI={manifestURI}/></div>)
      case 'DASH': 
        return setPlayerDisplayed(<div>DASH</div>)
      case 'VIDEOJS': 
        return setPlayerDisplayed(<div><VideoJS dispatchReqList={playerDispatch} manifestURI={manifestURI}/></div>)
      default: 
        return setPlayerDisplayed(<div></div>)
    }

  },[playerSelected, manifestURI])

  return (
      palyerDisplayed
  )
}

export default PlayerWrapper;