/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-plusplus */
import React from 'react';
import './style.css';
import { Grid, Box, Container } from '@material-ui/core';
import { SmallRoomItem, VideoIntro } from 'components';

function HomeByArea() {
  const renderRom = () => {
    const result = [];
    for (let i = 1; i < 53; i++) {
      const item = (
        <Grid item md={3} xs={6} lg={3} sm={4} key={i}>
          <SmallRoomItem sale={i % 3 === 0 ? true : false} />
        </Grid>
      );
      result.push(item);
    }
    return result;
  };
  return (
    <>
      <VideoIntro />
      <Container>
        <div style={{ marginBottom: '20px' }}>
          {' '}
          <button type="button" className="button-best-fit">
            Phù hợp nhất
          </button>
          <button type="button" className="outline-button">
            {' '}
            Rẻ nhất{' '}
          </button>
          <button type="button" className="outline-button">
            {' '}
            Đang khuyến mãi{' '}
          </button>
          <select className="outline-button">
            <option>Lựa chọn khác</option>
            <option>A</option>
            <option>B</option>
          </select>
        </div>

        <Box fontWeight={400} fontSize={24} marginBottom={3}>
          Có 415 điểm phù hợp với bạn
        </Box>
        <Grid direction="row" container justify="center" alignItems="center" spacing={1}>
          {renderRom()}
        </Grid>
      </Container>
    </>
  );
}

export default HomeByArea;
