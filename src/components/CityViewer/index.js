/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Box } from '@material-ui/core';
import CityScroll from '../CityScroll';

function CityViewer(props) {
  return (
    <div style={{ marginBottom: '40px' }}>
      <div style={{ marginBottom: '20px' }}>
        <Box fontWeight={600} fontSize={24} color="#2B2B2B">
          {props.tilte}
        </Box>
        <Box fontWeight={300} fontSize={24} color="rgba(43, 43, 43, 0.8)">
          {props.sologen}
        </Box>
      </div>
      <CityScroll />
    </div>
  );
}

export default CityViewer;
