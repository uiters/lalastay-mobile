/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Grid, Box } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import ss1 from '../../assets/ss1.jpg';
import './style.css';

function SearchItemForCompare() {
  return (
    <Grid direction="row" container justify="center" alignItems="center">
      <Grid item md={3}>
        <img src={ss1} alt="ảnh" style={{ width: '100%', height: '100%', borderRadius: '4px' }} />
      </Grid>
      <Grid item md={7}>
        <div style={{ paddingLeft: '10px' }}>
          <Box fontSize={18} fontWeight={600}>
            Tuấn Vũ Homestay Đà Lạt
          </Box>
          <Box fontSize={18} fontWeight={600}>
            Double Doraemon Room 2
          </Box>
          <Box fontSize={12} fontWeight={600}>
            Đà lạt , Lâm đồng Việt nam
          </Box>
        </div>
      </Grid>
      <Grid item md={2}>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <StarIcon style={{ color: '#9708CC', fontSize: '18px' }} />
          <div>4.9</div>
        </div>
      </Grid>
    </Grid>
  );
}

export default SearchItemForCompare;
