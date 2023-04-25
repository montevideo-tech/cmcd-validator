import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import { CMCDQueryValidator } from '@montevideo-tech/cmcd-validator';
import 'video.js/dist/video-js.css';
import '@montevideo-tech/videojs-cmcd'

export const VideoJS = (props) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const {manifestURI, dispatchReqList } = props;
  
<<<<<<< HEAD
  useEffect(() => {

=======
  React.useEffect(() => {
    
>>>>>>> develop
    const options = {
      autoplay: true,
      controls: false,
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
      
      const player = playerRef.current = videojs(videoElement, options);
      
      player.cmcd();
      
      player.on('ready', () => {player.controls(true);});
      // You could update an existing player in the `else` block here
      // on prop change, for example:
    } else {
      const player = playerRef.current;
      
      player.autoplay(options.autoplay);
      player.src(options.sources);
      player.cmcd();      
    }
  }, [videoRef, manifestURI]);

  // Dispose the Video.js player when the functional component unmounts
  useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  useEffect(()=> {
    var origOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url) {
      dispatchReqList({type: 'saveQuery' , payload: { url: url, result: CMCDQueryValidator(url) }})
      origOpen.apply(this, arguments);
    };
  }, [])

  return (
    <div data-vjs-player>
      <div ref={videoRef}></div>
    </div>
  );
}

export default VideoJS;