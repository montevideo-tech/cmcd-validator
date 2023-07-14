import React, {useEffect, useRef} from 'react'
import { Player, PlayerConfig, SourceConfig } from "bitmovin-player";
import { UIFactory } from "bitmovin-player-ui";
import { CmcdConfig, CmcdIntegration } from "@bitmovin/player-web-integration-cmcd";
import { CMCDQueryValidator } from '@montevideo-tech/cmcd-validator';
import 'bitmovin-player/bitmovinplayer-ui.css';


export const Bitmovin = ({manifestURI, dispatchReqList}) => {
    
    const playerRef = useRef(null);

    useEffect(() => {
        
        const playerConfig = {
            key: 'a123ef80-bd55-4d1f-9572-efb1a4064a27',
            playback: {
                autoplay: true,
                muted: true,
            },
        };
        
        const cmcdConfig = {
            useQueryArgs: true,
            sessionId: '6e2fb550-c457-11e9-bb97-0800200c9a66',
            contentId: '1111-111111-111111-11111',
        };

        const cmcdIntegration = new CmcdIntegration(cmcdConfig);

        playerConfig.network = {
            preprocessHttpRequest: (type, request) => {
                const cmcdRequest =  cmcdIntegration.preprocessHttpRequest(type, request);
                cmcdRequest.then((result)=>{
                    dispatchReqList({type: 'saveQuery' , payload: { url: result.url, result: CMCDQueryValidator(result.url) }});
                })
                return cmcdRequest
            },
            preprocessHttpResponse: cmcdIntegration.preprocessHttpResponse,
        }

        playerConfig.adaptation = {
            desktop: {
                onVideoAdaptation: cmcdIntegration.onVideoAdaptation,
                onAudioAdaptation: cmcdIntegration.onAudioAdaptation,
            },
            mobile: {
                onVideoAdaptation: cmcdIntegration.onVideoAdaptation,
                onAudioAdaptation: cmcdIntegration.onAudioAdaptation,
            },
        }

        const playerContainer = document.getElementById('player-container');

        const player = new Player(playerContainer, playerConfig);

        UIFactory.buildDefaultUI(player);
        
        playerRef.current = player;

        cmcdIntegration.setPlayer(player);

        return () => {      
            playerRef.current.destroy();
        }
    }, [])
    

    useEffect(() => {
        if (playerRef.current) {
            const mediaType = manifestURI.endsWith('.m3u8') ? 'hls' 
            : (manifestURI.endsWith('.mpd') ? 'dash' : null);
            
            if (mediaType) {
                playerRef.current.load({
                    [mediaType]: manifestURI,
                });
            }
        }
    }, [manifestURI])


    return (
        <div id="player-container" className='bitmovinplayer-container aspect-16x9'></div>
    )
}

export default Bitmovin;
