/* eslint-disable no-underscore-dangle */
import React from 'react';
import YouTube from 'react-youtube';
import './style.css';

function VideoIntro() {
  const opts = {
    height: '500px',
    width: '100%',
    playerVars: {
      autoplay: false,
    },
  };
  const _onReady = () => {
    // event.target.playVideo();
  };
  return (
    <div
      style={{
        marginBottom: '40px',
        height: '500px',
        position: 'relative',
      }}
    >
      <YouTube videoId="NVk6tRk89xw" opts={opts} onReady={_onReady} />
      {/* <div
        style={{
          height: '500px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: 0,
        }}
      >
        <div style={{ width: '25%' }}>
          <div className="title">
            <p>Mang đến sự tiện lợi </p>
            <p>và nhanh chóng</p>
            <div>
              <button className="button-wiew" type="button">
                {'Xem thêm >'}
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default VideoIntro;
