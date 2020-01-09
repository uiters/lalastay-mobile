/* eslint-disable no-plusplus */
import React from 'react';
import { Grid, Box } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import { CommentReviews } from '../index';

import './style.css';

function Rating() {
  const RenderIconRating = ({ total, munberLoading, numberRating }) => {
    const result = [];
    for (let i = 1; i <= numberRating; i++) {
      result.push(
        <Box key={i}>
          <StarIcon style={{ color: '#FF9EB5', fontSize: '23px' }} />
        </Box>,
      );
    }
    for (let j = numberRating + 1; j <= 5; j++) {
      result.push(
        <Box key={j}>
          <StarIcon style={{ color: '#E5E5E5', fontSize: '23px' }} />
        </Box>,
      );
    }
    result.push(
      <Box className="loading">
        <Box
          style={{
            width:
              munberLoading === 5
                ? '180px'
                : munberLoading === 4
                ? '150px'
                : munberLoading === 3
                ? '100px'
                : munberLoading === 2
                ? '50px'
                : munberLoading === 1
                ? '10px'
                : '0px',
            backgroundColor: '#FF9EB5',
            height: '18px',
          }}
        />
      </Box>,
    );
    result.push(<Box>{total}</Box>);
    return result;
  };

  const RenderButonBar = () => {
    const result = [];
    result.push(
      <div className="button-bar" key={99} style={{ backgroundColor: '#FC6C85', color: '#ffffff' }}>
        <div>Tất cả</div>
      </div>,
    );
    for (let i = 5; i >= 1; i--) {
      result.push(
        <div className="button-bar" key={i}>
          <div style={{ fontWeight: 'bold' }}>{i}</div>
          <div style={{ marginTop: '4px' }}>
            <StarIcon style={{ color: '#FF9EB5', fontSize: '16px' }} />
          </div>
        </div>,
      );
    }
    return result;
  };

  return (
    <Grid container style={{ marginTop: '15px' }}>
      <Grid item xs={12} md={4} sm={4} style={{ marginBottom: '20px' }}>
        <Grid container direction="row" justify="flex-start" alignItems="center">
          <Box>
            <StarIcon style={{ color: '#FF9EB5', marginRight: '10px', fontSize: '30px' }} />
          </Box>
          <Box style={{ fontSize: '35px', fontWeight: '600' }}>4.9</Box>
          <Box style={{ marginTop: '20px' }}>/5</Box>
        </Grid>
        <Grid>225 đánh giá</Grid>
      </Grid>
      <Grid item xs={12} md={8} sm={8}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          style={{ marginBottom: '15px' }}
        >
          <RenderIconRating total={125} munberLoading={5} numberRating={5} />
        </Grid>

        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          style={{ marginBottom: '15px' }}
        >
          <RenderIconRating total={299} munberLoading={4} numberRating={4} />
        </Grid>

        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          style={{ marginBottom: '15px' }}
        >
          <RenderIconRating total={10} munberLoading={3} numberRating={3} />
        </Grid>

        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          style={{ marginBottom: '15px' }}
        >
          <RenderIconRating total={5} munberLoading={2} numberRating={2} />
        </Grid>

        <Grid container direction="row" justify="flex-start" alignItems="flex-start">
          <RenderIconRating total={1} munberLoading={1} numberRating={1} />
        </Grid>
      </Grid>
      <Grid item xs={12} style={{ margin: '15px 0' }}>
        <Grid container direction="row" justify="flex-start" alignItems="flex-start">
          <RenderButonBar />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <CommentReviews />
      </Grid>
    </Grid>
  );
}

export default Rating;
