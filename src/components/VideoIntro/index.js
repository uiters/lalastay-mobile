/* eslint-disable no-underscore-dangle */
import React from 'react';
import YouTube from 'react-youtube';

function VideoIntro() {
  const opts = {
    height: '500px',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };
  const _onReady = () => {
    // event.target.pauseVideo();
  };
  return (
    <>
      <YouTube videoId="NVk6tRk89xw" opts={opts} onReady={_onReady} />
    </>
  );
}

export default VideoIntro;
