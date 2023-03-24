import React, { useEffect, useReducer, useRef, useState } from "react";
import ShakaPlayer from "shaka-player-react";
import muxjs from "mux.js";
import "shaka-player/dist/controls.css";
import "./ShakaExample.css";
import { DataWindow } from "./DataWindow";
import { ValidatorView } from "./ValidatorView";
import { CMCDQueryValidator } from "@montevideo-tech/cmcd-validator";

function setNewData (state, action) {
  let aggregateArray = []

  switch (action.type) {
    case 'saveQuery': 
      aggregateArray = [...state, action.payload];
      aggregateArray.splice(
        0,
        aggregateArray.length - 15 > 0 ? aggregateArray.length - 15 : 0
      );
    break;
  
    default:
      break;
  }

  return aggregateArray
}

export function ShakaExample() {
  window.muxjs = muxjs;
  const controllerRef = useRef(null);
  const [newData, dispatch] = useReducer(setNewData, []);
  const [validatorOutput, setValidatorOutput] = useState("");
  const [networkEngineFilterState, setNetworkEngineFilterState] = useState(false);
  const [url, setUrl] = useState(
    "https://demo.unified-streaming.com/k8s/live/stable/scte35-no-splicing.isml/.mpd"
  );

  const handleInput = (input) => {
    setUrl(input.target.value);
  };

  const onButtonClick = () => {
    dispatch({type: 'reset', payload: {}});
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
          dispatch({type: 'saveQuery' , payload: { url: uri, result: CMCDQueryValidator(uri) }})  
        }
      });
    }

    async function loadAsset() {
      // Load an asset.
      try {
        await player.load(url);
      } catch (error) {
        console.log(error);
      }
      // Trigger play.
      videoElement.play();
    }
    loadAsset();
  };

  return (
    <>
      <div className="mb-4 contet input-group d-flex justify-content-center">
        <input
          className="text ms-2"
          placeholder="Manifest URL"
          onChange={handleInput}
        ></input>
        <button className="btn btn-primary" onClick={onButtonClick}>
          Start Shaka
        </button>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="col-12 mb-4">
            <ShakaPlayer ref={controllerRef} />
          </div>
          <ValidatorView output={validatorOutput} />
        </div>
        <div className="col-6">
          <DataWindow
            data={newData}
            setValidatorOutput={setValidatorOutput}
          />
        </div>
      </div>
    </>
  );
}
