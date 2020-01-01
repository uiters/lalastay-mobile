/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Box } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';

import './style.css';

function Comment(props) {
  function random(length) {
    return Math.floor(Math.random() * length);
  }
  return (
    <>
      <div
        style={{ width: '100%' }}
        className="container-comment"
        style={{ backgroundColor: props.color ? `${props.color}` : '#C4C4C4' }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Box>
            <img src={props.img} className="avatar" alt="avatar" />
          </Box>
          <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Box>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontSize: '18px', fontWeight: '600' }}>{props.name}</div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <StarIcon style={{ color: '#CC4FFF', fontSize: '15px' }} />
                    <div>3.0</div>
                  </div>
                </div>
              </Box>
              <Box marginLeft={2}>
                {props.content !== '' && <p style={{ fontSize: '18px' }}>{props.content}</p>}
                {props.content === '' && (
                  <input className="comment-content" placeholder="Bình luận..." />
                )}
              </Box>
            </div>
            {props.content !== '' && (
              <div style={{ marginLeft: '5%' }}>
                <Box display="inline" marginRight={1}>
                  (1)Thích
                </Box>
                <Box display="inline"> (2)Trả lời</Box>
              </div>
            )}
          </div>
        </div>
        {props.content && (
          <Box style={{ padding: '10px', paddingRight: '40px' }}>
            <p className="comment-time">{`${random(59)} phút`}</p>
          </Box>
        )}
      </div>
    </>
  );
}

export default Comment;
