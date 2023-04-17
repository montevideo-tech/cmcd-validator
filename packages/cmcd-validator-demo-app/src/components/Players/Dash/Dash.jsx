import React, { useRef, useEffect } from 'react';
import dashjs from 'dashjs';
import { CMCDQueryValidator } from "@montevideo-tech/cmcd-validator";


function DashPlayer({dispatchReqList, manifestURI }) {
  const videoRef = useRef(null);

  useEffect(() => {
    
    var CMCD_MODE_QUERY = 'query';
    const player = dashjs.MediaPlayer().create();
    player.initialize(videoRef.current, manifestURI, true);
    player.updateSettings({
        streaming: {
            cmcd: {
                enabled: true,
                 mode: CMCD_MODE_QUERY,
            }
        }
    });
    var origOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url) {
      console.log(url);
      dispatchReqList({type: 'saveQuery' , payload: { url: url, result: CMCDQueryValidator(url) }})
      origOpen.apply(this, arguments);
    };
    // player.on(dashjs.MediaPlayer.events.FRAGMENT_LOADING_COMPLETED, function(e) {
    //   console.log(e.request.url)
    //   dispatchReqList({type: 'saveQuery' , payload: { url: e.request.url, result: CMCDQueryValidator(e.request.url) }})
    // });
    // player.on(dashjs.MediaPlayer.events.MANIFEST_LOADED, function(e) {
    //   console.log(e.data.url)
    //   dispatchReqList({type: 'saveQuery' , payload: { url: e.data.url, result: CMCDQueryValidator(e.data.url) }})
    // });
  }, [manifestURI]);

  return (
    <video
      ref={videoRef}
      controls
      width="100%"
      height="100%"
    />
  );
}
export default DashPlayer;
