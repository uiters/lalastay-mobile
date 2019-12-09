import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { SmallRoomItem } from 'components';

function RoomViewer({ tilte, sologen }) {
  const renderRom = () => {
    const result = [];
    for (let i = 0; i < 16; i += 1) {
      const item = (
        <Grid item md={3} xs={6} lg={3} sm={4} key={i}>
          <SmallRoomItem sale={i % 3 === 0} />
        </Grid>
      );
      result.push(item);
    }
    return result;
  };
  return (
    <>
      <div style={{ width: '100%', marginTop: '40px', marginBottom: '40px' }}>
        <Grid direction="row" container justify="center" alignItems="center" spacing={1}>
          <Grid item sm={12}>
            <div style={{ marginBottom: '20px' }}>
              <Box fontWeight={600} fontSize={24} color="#2B2B2B">
                {tilte}
              </Box>
              <Box fontWeight={300} fontSize={24} color="rgba(43, 43, 43, 0.8)">
                {sologen}
              </Box>
            </div>
          </Grid>
          {renderRom()}
        </Grid>
      </div>
    </>
  );
}

export default RoomViewer;
