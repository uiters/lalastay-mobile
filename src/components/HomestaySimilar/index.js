/* eslint-disable no-plusplus */
import React from 'react';
import 'swiper/css/swiper.css';
import './style.css';
import { SmallRoomItemCompare } from 'components';
import { Grid, Container } from '@material-ui/core';

function HomestaySimilar() {
  return (
    <Container>
      <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
        <Grid item md={3} xs={6} lg={3} sm={4}>
          <SmallRoomItemCompare />
        </Grid>
        <Grid item md={3} xs={6} lg={3} sm={4}>
          <SmallRoomItemCompare />
        </Grid>
        <Grid item md={3} xs={6} lg={3} sm={4}>
          <SmallRoomItemCompare />
        </Grid>
        <Grid item md={3} xs={6} lg={3} sm={4}>
          <SmallRoomItemCompare />
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomestaySimilar;
