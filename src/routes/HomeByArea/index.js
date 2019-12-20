/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-plusplus */
import React, { useState } from 'react';
import './style.css';
import { Grid, Box, Container } from '@material-ui/core';
import { SmallRoomItem, VideoIntro, withLayout } from 'components';

function HomeByArea() {
  // Khi su luoi bieng len ngoi
  const [phuHopNhat, setPhuHopNhat] = useState(true);
  const [reNhat, setReNhat] = useState(false);
  const [dangKhuuyenMai, setDangKhuyenMai] = useState(false);
  const [luaChonKhac, setuLuaChonKhac] = useState(false);

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
          <Grid direction="row" container justify="flex-start" alignItems="center" spacing={1}>
            <Grid item>
              <button
                type="button"
                className={phuHopNhat ? 'button-best-fit' : 'outline-button'}
                onClick={() => {
                  setPhuHopNhat(true);
                  setReNhat(false);
                  setDangKhuyenMai(false);
                  setuLuaChonKhac(false);
                }}
              >
                Phù hợp nhất
              </button>
            </Grid>
            <Grid item>
              <button
                type="button"
                className={reNhat ? 'button-best-fit' : 'outline-button'}
                onClick={() => {
                  setPhuHopNhat(false);
                  setReNhat(true);
                  setDangKhuyenMai(false);
                  setuLuaChonKhac(false);
                }}
              >
                Rẻ nhất
              </button>
            </Grid>
            <Grid item>
              <button
                type="button"
                className={dangKhuuyenMai ? 'button-best-fit' : 'outline-button'}
                onClick={() => {
                  setPhuHopNhat(false);
                  setReNhat(false);
                  setDangKhuyenMai(true);
                  setuLuaChonKhac(false);
                }}
              >
                Đang khuyến mãi
              </button>
            </Grid>

            <Grid item>
              <select
                className={luaChonKhac ? 'button-best-fit' : 'outline-button'}
                onClick={() => {
                  setPhuHopNhat(false);
                  setReNhat(false);
                  setDangKhuyenMai(false);
                  setuLuaChonKhac(true);
                }}
              >
                <option>Lựa chọn khác</option>
                <option>Ở nhiều nhất</option>
                <option>Bình chọn tốt nhất</option>
              </select>
            </Grid>
          </Grid>
        </div>

        <Box fontWeight={400} fontSize={24} marginBottom={3}>
          Có 415 điểm phù hợp với bạn
        </Box>
        <Grid direction="row" container justify="center" alignItems="center" spacing={2}>
          {renderRom()}
        </Grid>
      </Container>
    </>
  );
}

export default withLayout(HomeByArea);
