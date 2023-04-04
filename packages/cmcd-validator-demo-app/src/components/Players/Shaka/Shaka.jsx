import React, { useEffect, useRef, useState } from "react";
import ShakaPlayer from "shaka-player-react";
import muxjs from "mux.js";
import "shaka-player/dist/controls.css";
import "./Shaka.css";
import { CMCDQueryValidator } from "@montevideo-tech/cmcd-validator";

function Shaka({dispatchReqList, manifestURI}) {
  window.muxjs = muxjs;
  const controllerRef = useRef(null);
  const firstUpdate = useRef(true);
  const [networkEngineFilterState, setNetworkEngineFilterState] = useState(false);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    const {
      /** @type {shaka.Player} */ player,
      /** @type {shaka.ui.Overlay} */ ui,
      /** @type {HTMLVideoElement} */ videoElement,
    } = controllerRef.current;

    player.configure({
      cmcd: {
        contentId: "testContentId",
        enabled: true,
        sessionId: "testSessionId",
        useHeaders: false,
      },
    });
    const networkEngine = player.getNetworkingEngine();
    if (!networkEngineFilterState){
      setNetworkEngineFilterState(true);
      networkEngine.registerRequestFilter((type, request) => {
        const urisToAdd = [...new Set(request.uris)];
        for (const uri of urisToAdd) {
          dispatchReqList({type: 'saveQuery' , payload: { url: uri, result: CMCDQueryValidator(uri) }})  
        }
      });
    }

    async function loadAsset() {
      // Load an asset.
      try {
        await player.load(manifestURI);
      } catch (error) {
        console.log(error);
      }
      // Trigger play.
      videoElement.play();
    }
    loadAsset();

  }, [manifestURI])
  
  return (
      <ShakaPlayer ref={controllerRef} />
  );
}

export default Shaka;