import React, { useEffect, useRef, RefObject, useState } from 'react'
import Hls, { Config, hlsConfig } from 'hls.js'
import { CMCDQueryValidator } from '@montevideo-tech/cmcd-validator';

function HlsPlayer({
  manifestURI,
  dispatchReqList,
}) {
  
  const autoPlay = true;
  const videoRef = useRef(null);
  const [req,setReq] = useState('');

  useEffect(() => {
    // console.log(req);
    dispatchReqList(req);
  },[req])

  useEffect(() => {
    let hls;

    function _initPlayer() {
        if (hls != null) {
            hls.destroy();
        }

        const newHls = new Hls({
            enableWorker: false,
            cmcd: true,
            ...hlsConfig,
        });
        
        newHls.on(Hls.Events.FRAG_LOADING, function(event, data) {
          setReq({type: 'saveQuery' , payload: { url: data.frag.baseurl, result: CMCDQueryValidator(data.frag.baseurl) }});
          dispatchReqList({type: 'saveQuery' , payload: { url: uri, result: CMCDQueryValidator(data.frag.baseurl) }});
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
  },[autoPlay,videoRef, manifestURI]);

  if(Hls.isSupported()) return <video ref={videoRef} autoPlay={autoPlay} controls/>;

  //change this return for Hls not supported.
  return <video ref={videoRef} manifestURI={manifestURI} autoPlay={autoPlay} controls/>;
}

export default HlsPlayer;
