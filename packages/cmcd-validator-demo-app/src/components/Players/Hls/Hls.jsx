import React, { useEffect, useRef, RefObject, useState } from 'react'
import Hls, { hlsConfig } from 'hls.js'
import { CMCDQueryValidator } from '@montevideo-tech/cmcd-validator';
import Alert from 'react-bootstrap/Alert';

function HlsPlayer({
  manifestURI,
  dispatchReqList,
}) {
  
  const autoPlay = true;
  const videoRef = useRef(null);
  const [req,setReq] = useState('');

  useEffect(() => {
    dispatchReqList(req);
  },[req])

  useEffect(() => {
    let hls;
    const video = videoRef.current;

    function _initPlayer() {
        if (hls != null) {
            hls.destroy();
        }

        const newHls = new Hls({
            enableWorker: false,
            cmcd: true,
            ...hlsConfig,
        });

        newHls.on(Hls.Events.MANIFEST_LOADED, function(event, data) {
          setReq({type: 'saveQuery' , payload: { url: data.url, result: CMCDQueryValidator(data.url) }});
          // dispatchReqList({type: 'saveQuery' , payload: { url: uri, result: CMCDQueryValidator(data.url) }});
        })
        
        newHls.on(Hls.Events.FRAG_LOADED, function(event, data) {
          setReq({type: 'saveQuery' , payload: { url: data.networkDetails.responseURL, result: CMCDQueryValidator(data.networkDetails.responseURL) }});
          // dispatchReqList({type: 'saveQuery' , payload: { url: uri, result: CMCDQueryValidator(data.networkDetails.responseURL) }});
        });

        newHls.on(Hls.Events.LEVEL_LOADED, function(event, data) {
          setReq({type: 'saveQuery' , payload: { url: data.networkDetails.responseURL, result: CMCDQueryValidator(data.networkDetails.responseURL) }});
          // dispatchReqList({type: 'saveQuery' , payload: { url: uri, result: CMCDQueryValidator(data.networkDetails.responseURL) }});
        });

        if(videoRef.current != null){
            newHls.attachMedia(videoRef.current);
        }

        newHls.on(Hls.Events.MEDIA_ATTACHED, () => {
            newHls.loadSource(manifestURI);
            newHls.on(Hls.Events.MANIFEST_PARSED, () => {
                if (autoPlay) {
                  videoRef?.current
                    ?.play()
                    .catch(() =>
                      console.log(
                        'Unable to autoplay prior to user interaction with the dom.'
                      )
                    );
                }
            });
        });

        newHls.on(Hls.Events.ERROR, function (event, data) {
            if (data.fatal) {
              switch (data.type) {
                case Hls.ErrorTypes.NETWORK_ERROR:
                  newHls.startLoad();
                  break;
                case Hls.ErrorTypes.MEDIA_ERROR:
                  newHls.recoverMediaError();
                  break;
                default:
                  _initPlayer();
                  break;
              }
            }
        });

        hls= newHls;
    };

    if (Hls.isSupported()) {
        _initPlayer();
    };

    return () => {
        if (hls != null) {
            hls.destroy();
        }
    };
  },[autoPlay, videoRef, manifestURI]);

  if(Hls.isSupported()) return <video ref={videoRef} autoPlay={autoPlay} controls/>;

  //change this return for Hls not supported.
  return (
    <Alert variant="danger">
      <Alert.Heading>Oh snap! HLS is not supported!</Alert.Heading>
      <p>
        Sorry, your browser does not support HLS video playback. Try with another player or switching browsers!
      </p>
    </Alert>
  );
}

export default HlsPlayer;
