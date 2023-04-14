import React from 'react';
import videojs from 'video.js';
import { CMCDQueryValidator } from '@montevideo-tech/cmcd-validator';
import 'video.js/dist/video-js.css';
import '@montevideo-tech/videojs-cmcd'

export const VideoJS = (props) => {
  const videoRef = React.useRef(null);
  const playerRef = React.useRef(null);
  const {manifestURI, dispatchReqList } = props;
  
  React.useEffect(() => {

    const options = {
      autoplay: true,
      controls: true,
      responsive: true,
      plugins: {cmcd: {}},
      fluid: true,
      
      sources: [{
        src: manifestURI
      }]

    }
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode. 
      const videoElement = document.createElement("video-js");

      videoElement.classList.add('vjs-big-play-centered');
      videoRef.current.appendChild(videoElement);

      const player = playerRef.current = videojs(videoElement, options, () => {
        console.log('player is ready');
      });

      player.cmcd();

    // You could update an existing player in the `else` block here
    // on prop change, for example:
    } else {
      const player = playerRef.current;
      
      player.autoplay(options.autoplay);
      player.src(options.sources);
      player.cmcd();

      var origOpen = XMLHttpRequest.prototype.open;
      XMLHttpRequest.prototype.open = function() {
        const uri = arguments[1]
        dispatchReqList({type: 'saveQuery' , payload: { url: uri, result: CMCDQueryValidator(uri) }})
        origOpen.apply(this, arguments);
      };
      
    }
  }, [videoRef, manifestURI]);

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div data-vjs-player>
      <div ref={videoRef}></div>
    </div>
  );
}

export default VideoJS;