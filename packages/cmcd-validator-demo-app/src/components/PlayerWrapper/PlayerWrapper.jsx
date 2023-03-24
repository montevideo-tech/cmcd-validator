import React, { useEffect, useState } from 'react'
import ShakaPlayer from '../Players/Shaka/Shaka'

const PlayerWrapper = ({playerSelected, playerDispatch, manifestURI}) => {
  const [palyerDisplayed, setPlayerDisplayed] = useState(<div></div>)

  useEffect(() => {
    console.log('changing manifest wrapper', manifestURI)
  }, [manifestURI])

  useEffect(()=>{
    console.log(playerSelected)
    switch(playerSelected) {
      case 'SHAKA':
        return setPlayerDisplayed(<div><ShakaPlayer dispatchReqList={playerDispatch} manifestURI={manifestURI}/></div>)
      case 'HLS':
        return setPlayerDisplayed(<div>HLS</div>)
      case 'DASH': 
        return setPlayerDisplayed(<div>DASH</div>)
      default: 
        return setPlayerDisplayed(<div></div>)
    }

  },[playerSelected, manifestURI])

  return (
      palyerDisplayed
  )
}

export default PlayerWrapper;