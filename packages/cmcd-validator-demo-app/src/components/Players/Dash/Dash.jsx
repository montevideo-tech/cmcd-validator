import React, { useRef, useEffect } from 'react';
import dashjs from 'dashjs';
import { CMCDQueryValidator } from "@montevideo-tech/cmcd-validator";


function DashPlayer({dispatchReqList, manifestURI }) {
  const videoRef = useRef(null);
  
  useEffect(() => {
    var CMCD_DATA_GENERATED = dashjs.MetricsReporting.events.CMCD_DATA_GENERATED;
    var CMCD_MODE_QUERY = 'query'; /* as query parameters */
    var CMCD_MODE_HEADER = 'header'; /* as HTTP headers */
    var version;
    const player = dashjs.MediaPlayer().create();
    player.initialize(videoRef.current, manifestURI, true);
    version = player.getVersion();
    console.log(version)
    player.on(CMCD_DATA_GENERATED, handleCmcdDataGeneratedEvent);

    player.on(dashjs.MediaPlayer.events, function(event) {
      console.log(event);
      console.log('acaaaaaaaaaaaaaaaaaaaaaaaa')
      //text.innerText += 'CMCD Requested: ' + cmcd + '\n';
    });


    player.updateSettings({
      streaming: {
          cmcd: {
              enabled: true, /* enable reporting of cmcd parameters */
              // sid: 'b248658d-1d1a-4039-91d0-8c08ba597da5', /* session id send with each request */
              // cid: '21cf726cfe3d937b5f974f72bb5bd06a', /* content id send with each request */
               mode: CMCD_MODE_QUERY,
              // enabledKeys: ['br', 'd', 'ot', 'tb' , 'bl', 'dl', 'mtp', 'nor', 'nrr', 'su' , 'bs', 'rtp' , 'cid', 'pr', 'sf', 'sid', 'st', 'v']
          }
      }
  });


    function handleCmcdDataGeneratedEvent(event) {
      //console.log(event);
      log('type: ' + event.mediaType);
      log('file: ' + event.url.split('/').pop())
      var mode = player.getSettings().streaming.cmcd.mode;
      var data = mode === CMCD_MODE_HEADER ? getKeysForHeaderMode(event) : getKeysForQueryMode(event);
      var keys = Object.keys(data);
      keys = keys.sort();
      for (var key of keys) {
          log(key.padEnd(4) + ': ' + event.cmcdData[key]);
      }
      log('');
  }

  function getKeysForQueryMode(event) {
      var cmcdData = {};
      var cmcdString = event.cmcdString;
      var cmcdraw = event.url;
      console.log(event);
      dispatchReqList({type: 'saveQuery' , payload: { url: event.url, result: CMCDQueryValidator(cmcdString) }})
      extractKeyValuePairs(cmcdString, cmcdData);

      return cmcdData;
  }

  function getKeysForHeaderMode(event) {
      var cmcdData = {};
      var keys = Object.keys(event.headers);

      for (var key of keys) {
          extractKeyValuePairs(event.headers[key], cmcdData)
      }
      
      return cmcdData
  }

  function extractKeyValuePairs(cmcdString, cmcdData) {
      if (cmcdString === '') {
          return;
      }
      var keyValuePairs = cmcdString.split(',');

      keyValuePairs.forEach(function (keyValuePair) {
          var data = keyValuePair.split('=');
          var key = data[0];
          var value = data[1];

          cmcdData[key] = value;
      })

  }

  function log(msg) {
      msg = msg.length > 200 ? msg.substring(0, 200) + '...' : msg;
      //console.log(msg);
  }

  }, [manifestURI]);

  return (
    <video
      ref={videoRef}
      controls
      width="640"
      height="360"
    />
  );
}



export default DashPlayer;