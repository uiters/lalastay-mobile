import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { SmallRoomItem } from 'components';

function DiscountRoomViewer() {
  return (
    <>
      <div style={{ width: '100%', marginBottom: '40px' }}>
        <div style={{ marginBottom: '20px' }}>
          <Box fontWeight={600} fontSize={24} color="#2B2B2B">
            Các chỗ được đặt nhiều nhất
          </Box>
          <Box fontWeight={300} fontSize={24} color="rgba(43, 43, 43, 0.8)">
            Đây là những chỗ nỗi bất nhất của Lalastay
          </Box>
        </div>
        <Grid direction="row" container justify="center" alignItems="flex-start" spacing={2}>
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

export default DiscountRoomViewer;
