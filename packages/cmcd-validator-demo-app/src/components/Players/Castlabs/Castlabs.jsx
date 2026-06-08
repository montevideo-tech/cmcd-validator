import React, { useState, useEffect, useRef, useCallback } from 'react'

import { clpp } from '@castlabs/prestoplay'
import '@castlabs/prestoplay/cl.mse'
import '@castlabs/prestoplay/cl.dash'
import '@castlabs/prestoplay/cl.hls'
import '@castlabs/prestoplay/cl.htmlcue'
import '@castlabs/prestoplay/cl.ttml'
import '@castlabs/prestoplay/cl.vtt'
import '@castlabs/prestoplay/clpp.styles.css'

import muxjs from "mux.js";
window.muxjs = muxjs;

clpp.install(clpp.dash.DashComponent)
clpp.install(clpp.hls.HlsComponent)
clpp.install(clpp.htmlcue.HtmlCueComponent)
clpp.install(clpp.ttml.TtmlComponent)
clpp.install(clpp.vtt.VttComponent)
clpp.log.setLogLevel(clpp.log.Level.INFO)

import { CMCDQueryValidator } from "@montevideo-tech/cmcd-validator";

const Castlabs = ({dispatchReqList, manifestURI}) => {
  const playerRef = useRef();

  const createPlayerRef = useCallback((videoElement) => {
    if (!videoElement) {
      return;
    }

    playerRef.current = new clpp.Player(videoElement, { })
    playerRef.current.getNetworkEngine().addResponseModifier((response) => {
      const uri = response.uri;
      dispatchReqList({
        type: 'saveQuery',
        payload: { url: uri, result: CMCDQueryValidator(uri) }
      });
      return response;
    });
  }, []);

  // Cleanup useEffect
  useEffect(() => {
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    }
  }, [])

  useEffect(() => {
    if (!manifestURI || !playerRef.current) {
      return;
    }

    playerRef.current.load({
      cmcd: {
        enabled:true,
        deliveryMode: 'query',
      },
      source: manifestURI,
      autoplay: true,
    });
  }, [manifestURI])

  return (
    <div>
      <video height={360} controls ref={createPlayerRef} />
    </div>
  )
}

export default Castlabs;
