import React, {useEffect, useRef} from 'react'
import { Player } from 'bitmovin-player';
import 'bitmovin-player/bitmovinplayer-ui.css';

const DELIMITER = '&nbsp;'
const CMCD_KEYS = {
  EncodedBitrate: 'br',
  BufferLength: 'bl',
  BufferStarvation: 'bs',
  ContentId: 'cid',
  ObjectDuration: 'd',
  Deadline: 'dl',
  MeasuredThroughput: 'mtp',
  NextObjectRequest: 'nor',
  NextRangeRequest: 'nrr',
  ObjectType: 'ot',
  PlaybackRate: 'pr',
  RequestedMaximumThroughput: 'rtp',
  StreamingFormat: 'sf',
  SessionId: 'sid',
  StreamType: 'st',
  Startup: 'su',
  TopBitrate: 'tb',
  CmcdVersion: 'v',
}

export const Bitmovin = ({manifestURI}) => {
    
    const playerRef = useRef(null);

    useEffect(() => {
        // cmcdSessionId = uuidv4();

        // const cmcdConfig = {
        //     useQueryArgs: true,
        //     sessionId: cmcdSessionId,
        //     contentId: '1111-111111-111111-11111',
        // };

        const playerConfig = {
            key: '29ba4a30-8b5e-4336-a7dd-c94ff3b25f30',
            analytics: {
              key: '45adcf9b-8f7c-4e28-91c5-50ba3d442cd4',
              videoId: 'cmcd'
            },
            playback: {
              muted: true,
              autoplay: true,
            // },
            // network: {
                
            //   preprocessHttpRequest: (type, request) => {
            //     const cmcdRequest =  cmcdIntegration.preprocessHttpRequest(type, request);
            //     cmcdRequest.then((result)=>{
            //       logValidator(CmcdQueryValidator(result.url))
            //     })
            //     return cmcdRequest},
        
            //   preprocessHttpResponse: cmcdIntegration.preprocessHttpResponse,
            // },
            // adaptation: {
            //   onVideoAdaptation: cmcdIntegration.onVideoAdaptation,
            //   onAudioAdaptation: cmcdIntegration.onAudioAdaptation,
            }
        };
        const playerContainer = document.getElementById('player-container');

        const player = new Player(playerContainer, playerConfig);
        
        playerRef.current = player;

        return () => {      
            playerRef.current.destroy();
        }
    }, [])
    
    useEffect(() => {
        console.log('manifest updated');
        if (playerRef.current) {
            console.log('manifest:', manifestURI);
            playerRef.current.load({
                hls: manifestURI,
            });
        }
    }, [manifestURI])


    return (
        <div id="player" className="tv-frame" >
            <div id="player-container" className='bitmovinplayer-container aspect-16x9'></div>
        </div>
        // <div id="player-container" className='bitmovinplayer-container aspect-16x9'></div>
    )
}

export default Bitmovin;
