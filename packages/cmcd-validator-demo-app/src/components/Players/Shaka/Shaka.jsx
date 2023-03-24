import React, { useEffect, useRef, useState } from "react";
import ShakaPlayer from "shaka-player-react";
import muxjs from "mux.js";
import "shaka-player/dist/controls.css";
import "./Shaka.css";
import { DataWindow } from "../../DataWindow/DataWindow";
import { ValidatorView } from "../../ValidatorView/ValidatorView";
import { CMCDQueryValidator } from "@montevideo-tech/cmcd-validator";


// function setNewData (state, action) {
//   let aggregateArray = []

//   switch (action.type) {
//     case 'saveQuery': 
//       aggregateArray = [...state, action.payload];
//       aggregateArray.splice(
//         0,
//         aggregateArray.length - 15 > 0 ? aggregateArray.length - 15 : 0
//       );
//     break;
  
//     default:
//       break;
//   }

//   return aggregateArray
// }

function Shaka({dispatchReqList, manifestURI}) {
  window.muxjs = muxjs;
  const controllerRef = useRef(null);
  const firstUpdate = useRef(true);
  const [networkEngineFilterState, setNetworkEngineFilterState] = useState(false);
  const [url, setUrl] = useState(
    "https://demo.unified-streaming.com/k8s/live/stable/scte35-no-splicing.isml/.mpd"
  );

  const handleInput = (input) => {
    setUrl(input.target.value);
  };

  // const onButtonClick = () => {
  //   dispatchReqList({type: 'reset', payload: {}});
  //   const {
  //     /** @type {shaka.Player} */ player,
  //     /** @type {shaka.ui.Overlay} */ ui,
  //     /** @type {HTMLVideoElement} */ videoElement,
  //   } = controllerRef.current;

  //   player.configure({
  //     cmcd: {
  //       contentId: "testContentId",
  //       enabled: true,
  //       sessionId: "testSessionId",
  //       useHeaders: false,
  //     },
  //   });
  //   const networkEngine = player.getNetworkingEngine();
  //   if (!networkEngineFilterState){
  //     setNetworkEngineFilterState(true);
  //     networkEngine.registerRequestFilter((type, request) => {
  //       const urisToAdd = [...new Set(request.uris)];
  //       for (const uri of urisToAdd) {
  //         dispatchReqList({type: 'saveQuery' , payload: { url: uri, result: CMCDQueryValidator(uri) }})  
  //       }
  //     });
  //   }

  //   async function loadAsset() {
  //     // Load an asset.
  //     try {
  //       await player.load(url);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //     // Trigger play.
  //     videoElement.play();
  //   }
  //   loadAsset();
  // };

  useEffect(() => {
    console.log('shaka useEffect')
    
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
    <>
      <div className="mb-4 contet input-group d-flex justify-content-center">
        {/* <input
          className="text ms-2"
          placeholder="Manifest URL"
          onChange={handleInput}
        ></input>
        <button className="btn btn-primary" onClick={onButtonClick}>
          Start Shaka
        </button> */}
      </div>
      <div className="row">
        <div className="col-6">
          <div className="col-12 mb-4">
            <ShakaPlayer ref={controllerRef} />
          </div>
          {/* <ValidatorView output={validatorOutput} /> */}
        </div>
        {/* <div className="col-6">
          <DataWindow
            data={newData}
            setValidatorOutput={setValidatorOutput}
          />
        </div> */}
      </div>
    </>
  );
}

export default Shaka;