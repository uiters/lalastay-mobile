import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { SmallRoomItem } from 'components';
import './style.css';

function RoomViewer({ tilte, sologen }) {
  const titles = [
    '[Lily Home] căn 1 ngủ tầng 4',
    'Hanami Service Apartment',
    'Home Sweet Home High Floor 1Br Apartment',
    'Mây homestay Vũng Tàu',
    'CityHomes ⭐️ Vinhomes Metropolis Hà Nội',
    'Apartment Newlife Bãi Cháy Hạ Long',
    'Gom Homestay Vũng Tàu',
    'Aloha Hanoi Homestay 24',
  ];
  const renderRom = () => {
    const result = [];
    for (let i = 0; i < 16; i += 1) {
      const index = Math.floor(Math.random() * 7);
      const item = (
        <Grid item md={3} lg={3} sm={4} key={i} className="container-room-view">
          <SmallRoomItem sale={i % 3 === 0} tilte={titles[index]} />
        </Grid>
      );
      result.push(item);
    }
    return result;
  };
  return (
    <>
      <div style={{ width: '100%', marginTop: '40px', marginBottom: '40px' }}>
        <Grid direction="row" container justify="center" alignItems="center" spacing={2}>
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
