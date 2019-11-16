import React from 'react';
import { Box, Grid } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import Swiper from 'react-id-swiper';
import smallRoom from '../../assets/small_room.jpg';
import 'swiper/css/swiper.css';
import './style.css';

function SmallRoomItem() {
  const params = {
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };
  return (
    <div container className="container-room-item">
      <div className="container-img">
        <Swiper {...params} style={{ width: '100%', height: '100%' }}>
          <div>
            <img
              src={smallRoom}
              style={{ width: '100%', height: '100%', borderRadius: '4px' }}
              alt="img"
            />
          </div>
          <div>
            <img
              src={smallRoom}
              style={{ width: '100%', height: '100%', borderRadius: '4px' }}
              alt="img"
            />
          </div>
          <div>
            <img
              src={smallRoom}
              style={{ width: '100%', height: '100%', borderRadius: '4px' }}
              alt="img"
            />
          </div>
          <div>
            <img
              src={smallRoom}
              style={{ width: '100%', height: '100%', borderRadius: '4px' }}
              alt="img"
            />
          </div>
          <div>
            <img
              src={smallRoom}
              style={{ width: '100%', height: '100%', borderRadius: '4px' }}
              alt="img"
            />
          </div>
          <div>
            <img src={smallRoom} style={{ width: '100%', height: '100%' }} alt="img" />
          </div>
          <div>
            <img
              src={smallRoom}
              style={{ width: '100%', height: '100%', borderRadius: '4px' }}
              alt="img"
            />
          </div>
        </Swiper>
      </div>
      <div>
        <Grid container direction="row" justify="space-between" alignItems="center">
          <Box className="price">$ 1.5tr/đêm</Box>
          <Box style={{ fontSize: '14px' }}>
            <StarIcon style={{ color: '#C53858', fontSize: '14px', lineHeight: '18px' }} />
            4.95
          </Box>
        </Grid>

        <Box fontWeight="fontWeightBold" fontSize={16} style={{ lineHeight: '24px' }}>
          Biệt thự ngôi nhà nha
        </Box>
        <Box fontWeight="fontWeightBold" fontSize={14} style={{ lineHeight: '24px' }}>
          Ba dòng thui nha
        </Box>
        <Box fontWeight="fontWeightBold" fontSize={14} style={{ lineHeight: '24px' }}>
          Ahihi
        </Box>
      </div>
    </div>
  );
}

export default SmallRoomItem;
