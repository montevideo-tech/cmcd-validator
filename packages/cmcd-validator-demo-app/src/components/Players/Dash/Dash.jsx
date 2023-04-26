import React, { useRef, useEffect } from 'react';
import dashjs from 'dashjs';
import { CMCDQueryValidator } from "@montevideo-tech/cmcd-validator";


function DashPlayer({dispatchReqList, manifestURI }) {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if(playerRef.current)
      playerRef.current.attachSource(manifestURI);
  }, [manifestURI])

  useEffect(() => {
    
    if (videoRef.current) {
      const CMCD_MODE_QUERY = 'query';
      const video = videoRef.current;

      playerRef.current = dashjs.MediaPlayer().create();

      playerRef.current.initialize(video, manifestURI, true);
      playerRef.current.attachView(video);
      playerRef.current.updateSettings({
        streaming: {
          cmcd: {
            enabled: true,
            mode: CMCD_MODE_QUERY,
          }
        }
      });

      var origOpen = XMLHttpRequest.prototype.open;
      
      XMLHttpRequest.prototype.open = function(method, url) {
        dispatchReqList({type: 'saveQuery' , payload: { url: url, result: CMCDQueryValidator(url) }})
        origOpen.apply(this, arguments);
      };
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, []);

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
