import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { SmallRoomItem } from 'components';

function RoomViewer() {
  return (
    <>
      <div style={{ width: '100%', marginTop: '40px', marginBottom: '40px' }}>
        <div style={{ marginBottom: '20px' }}>
          <Box fontWeight={600} fontSize={24} color="#2B2B2B">
            Chổ này rẻ nhất luôn
          </Box>
          <Box fontWeight={300} fontSize={24} color="rgba(43, 43, 43, 0.8)">
            Đây là những chỗ ở rẻ nhất của Lalastay
          </Box>
        </div>
        <Grid container spacing={3}>
          <Grid item>
            <SmallRoomItem />
          </Grid>
          <Grid item>
            <SmallRoomItem />
          </Grid>
          <Grid item>
            <SmallRoomItem />
          </Grid>
          <Grid item>
            <SmallRoomItem />
          </Grid>
          <Grid item>
            <SmallRoomItem />
          </Grid>
          <Grid item>
            <SmallRoomItem />
          </Grid>
          <Grid item>
            <SmallRoomItem />
          </Grid>
          <Grid item>
            <SmallRoomItem />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default RoomViewer;
