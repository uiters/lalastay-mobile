/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import StarIcon from '@material-ui/icons/Star';
import Swiper from 'react-id-swiper';
import smallRoom from '../../assets/small_room.jpg';
import 'swiper/css/swiper.css';
import './style.css';

const useStyles = makeStyles(() => ({
  roomImg: {
    width: '100%',
    height: '100%',
    borderRadius: '4px',
  },
  address: {
    backgroundColor: '#FC6C85',
    borderRadius: '10px',
    padding: '2px 8px',
    fontSize: '12px',
    color: '#FFFFFF',
    fontWeight: 600,
  },
  detailAddress: {
    fontSize: '12px',
    color: 'rgba(43, 43, 43, 0.8)',
    fontWeight: 600,
  },
}));

function SmallRoomItem() {
  const classes = useStyles();
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
            <img src={smallRoom} style={{ width: '100%', height: '100%', borderRadius: '4px' }} />
          </div>
          <div>
            <img src={smallRoom} style={{ width: '100%', height: '100%', borderRadius: '4px' }} />
          </div>
          <div>
            <img src={smallRoom} style={{ width: '100%', height: '100%', borderRadius: '4px' }} />
          </div>
          <div>
            <img src={smallRoom} style={{ width: '100%', height: '100%', borderRadius: '4px' }} />
          </div>
          <div>
            <img src={smallRoom} style={{ width: '100%', height: '100%', borderRadius: '4px' }} />
          </div>
          <div>
            <img src={smallRoom} style={{ width: '100%', height: '100%' }} />
          </div>
          <div>
            <img
              src={smallRoom}
              style={{ width: '100%', height: '100%', borderRadius: '4px' }}
            ></img>
          </div>
          <div>
            <img src={smallRoom} style={{ width: '100%', height: '100%', borderRadius: '4px' }} />
          </div>
          <div>
            <img src={smallRoom} style={{ width: '100%', height: '100%', borderRadius: '4px' }} />
          </div>
          <div>
            <img src={smallRoom} style={{ width: '100%', height: '100%', borderRadius: '4px' }} />
          </div>
        </Swiper>
      </div>
      <div>
        <div style={{ height: '100%' }}>
          <Grid container direction="row" justify="space-between" alignItems="center">
            <Box className={classes.address}>Đồng nai</Box>
            <Box className={classes.detailAddress} paddingLeft={1}>
              Ngã tư sông ray, Đồng nai
            </Box>
            <Box style={{ fontSize: '12px' }}>
              <StarIcon style={{ color: '#C53858', fontSize: '12px' }}></StarIcon> 4.95
            </Box>
          </Grid>
        </div>
        <div>
          <Box fontWeight="fontWeightBold" fontSize={22} style={{ lineHeight: '26px' }}>
            Biệt thự nhà tao hai dòng thôi nha
          </Box>
        </div>
        <Box fontSize={12} style={{ color: 'rgba(43, 43, 43, 0.8)' }}>
          2 người nha - 1 phòng
        </Box>
        <Box fontSize={16} fontWeight={600} style={{ color: 'rgba(43, 43, 43, 0.9)' }}>
          1,500,000/đêm
        </Box>
      </div>
    </div>
  );
}

export default SmallRoomItem;
