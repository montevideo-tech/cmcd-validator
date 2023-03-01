import React, { useEffect, useRef, useState } from "react";
import ShakaPlayer from "shaka-player-react";
import "shaka-player/dist/controls.css";
import "./shakaExample.css";
import { DataWindow } from "./DataWindow";

export function ShakaExample() {
  const controllerRef = useRef(null);
  const [text, setText] = useState([{}]);
  const [newText, setNewText] = useState([{}]);
  const onButtonClick = () => {
    const {
      /** @type {shaka.Player} */ player,
      /** @type {shaka.ui.Overlay} */ ui,
      /** @type {HTMLVideoElement} */ videoElement,
    } = controllerRef.current;

    console.log(player);
    player.configure({
      cmcd: {
        contentId: "TEST",
        enabled: true,
        sessionId: "asdfasdfa",
        useHeaders: false,
      },
    });
    const networkEngine = player.getNetworkingEngine();
    console.log(networkEngine);
    networkEngine.registerRequestFilter((type, request) => {
      console.log(newText);
      const newUris = [{}];
      const urisToAdd = [...new Set(request.uris)];
      for (const uri of urisToAdd) {
        if (!text.find((e) => e.url === uri))
          newUris.push({ url: uri, result: uri });
      }
      console.log("newUris-> ", newUris);
      setNewText(newUris);
    });
    async function loadAsset() {
      // Load an asset.
      await player.load(
        "https://demo.unified-streaming.com/k8s/live/stable/scte35-no-splicing.isml/.mpd"
      );
      // Trigger play.
      videoElement.play();
    }
    loadAsset();
  };
  useEffect(() => {
    console.log("newText ->", newText);
    const aggregateArray = [...text, ...newText];
    aggregateArray.splice(
      0,
      aggregateArray.length - 15 > 0 ? aggregateArray.length - 15 : 0
    );
    setText(aggregateArray);
    console.log(`aggregateArray length : ${aggregateArray.length}`);
    console.log(text.length);
  }, [newText]);
  return (
    <>
      <button onClick={onButtonClick}>Start Shaka</button>
      <div className="shakaPlayerContainer">
        <div>
          <ShakaPlayer width="720" height="540" ref={controllerRef} />
        </div>
        <DataWindow text={text} />
      </div>
    </>
  );
}
