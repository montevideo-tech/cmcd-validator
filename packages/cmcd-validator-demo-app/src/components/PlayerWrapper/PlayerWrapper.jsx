import React, { useEffect, useState } from 'react'
import ShakaPlayer from '../Players/Shaka/Shaka'
import VideoJS from '../Players/VideoJs/VideoJs'
import DashPlayer from '../Players/Dash/Dash'
import HlsPlayer from '../Players/Hls/Hls'
import BitmovinPlayer from '../Players/Bitmovin/Bitmovin'

const PlayerWrapper = ({playerSelected, playerDispatch, manifestURI}) => {
  const [palyerDisplayed, setPlayerDisplayed] = useState(<div></div>)

  useEffect(()=>{
    console.log('manifest updated 1');
    
    switch(playerSelected) {
      case 'SHAKA':
        return setPlayerDisplayed(<div><ShakaPlayer dispatchReqList={playerDispatch} manifestURI={manifestURI}/></div>)
      case 'HLS':
        return setPlayerDisplayed(<div><HlsPlayer dispatchReqList={playerDispatch} manifestURI={manifestURI}/></div>)
      case 'DASH': 
        return setPlayerDisplayed(<div><DashPlayer dispatchReqList={playerDispatch} manifestURI={manifestURI}/></div>)
      case 'VIDEOJS': 
        return setPlayerDisplayed(<div><VideoJS dispatchReqList={playerDispatch} manifestURI={manifestURI}/></div>)
      case 'BITMOVIN': 
        return setPlayerDisplayed(<div><BitmovinPlayer dispatchReqList={playerDispatch} manifestURI={manifestURI}/></div>)
      default: 
        return setPlayerDisplayed(<div></div>)
    }

  },[playerSelected, manifestURI])

  return (
      palyerDisplayed
  )
}

export default PlayerWrapper;