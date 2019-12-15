/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Grid, Box } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import ss1 from '../../assets/ss1.jpg';
import './style.css';

function SearchItemForCompare() {
  return (
    <div>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid className="img-item">
          <img src={ss1} alt="ảnh" style={{ width: '100%', height: '100%' }} />
        </Grid>
        <Grid style={{ marginLeft: '15px' }}>
          <Box fontSize={18} fontWeight={600}>
            Biệt thự ngôi nhà ma
          </Box>
          <Box fontSize={12} fontWeight={600}>
            Đà lạt , Lâm đồng Việt nam
          </Box>
          <Box fontSize={12}>2 người - 1 phòng</Box>
          <Box fontSize={20} fontWeight={600}>
            1.5Tr/đêm <strike> 2.5tr</strike>
          </Box>
        </Grid>
        <Grid style={{ marginTop: '-50px' }}>
          <div style={{ display: 'flex' }}>
            <StarIcon style={{ color: '#9708CC', fontSize: '18px', marginLeft: '30px' }} />
            <div>4.9</div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default SearchItemForCompare;
