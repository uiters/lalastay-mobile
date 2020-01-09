/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Grid } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import withWidth from '@material-ui/core/withWidth';

import './style.css';

function CommentReview(props) {
  const RenderRating = () => {
    // eslint-disable-next-line prefer-const
    let result = [];
    for (let i = 1; i <= props.rating; i++) {
      result.push(
        <div key={i}>
          <StarIcon style={{ fontSize: '18px', color: '#FF9EB5' }} />
        </div>,
      );
    }
    for (let j = props.rating + 1; j <= 5; j++) {
      result.push(
        <div key={j}>
          <StarIcon style={{ fontSize: '18px', color: 'rgba(150, 150, 150, 0.2)' }} />
        </div>,
      );
    }
    return result;
  };

  return (
    <Grid container className="container-comment-review">
      <Grid item md={1} xs={2}>
        <div className="container-avatar">
          <img
            src={props.avatar}
            alt="img"
            style={{ width: '100%', height: '100%', borderRadius: '50%' }}
          />
        </div>
      </Grid>
      <Grid item md={11} xs={10}>
        <div className="container-content-comment">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <div
              style={{
                display: props.width === 'xs' ? 'block' : 'flex',
                alignItems: 'center',
              }}
            >
              {console.log('klaka', props.width)}
              <div>
                <h6
                  style={{
                    fontSize: '16px',
                    color: '#000000',
                    fontWeight: 'bold',
                    marginRight: '15px',
                  }}
                >
                  {props.name}
                </h6>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <RenderRating />
              </div>
            </div>
            <div style={{ marginLeft: props.width === 'xs' ? '0px' : '40px' }}>
              <small>{props.minutes} phút</small>
            </div>
          </div>
          <div style={{ fontSize: '16px', fontWeight: '300px' }}>{props.message}</div>
        </div>
      </Grid>
    </Grid>
  );
}

export default withWidth()(CommentReview);
