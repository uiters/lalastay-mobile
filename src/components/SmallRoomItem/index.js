/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import StarIcon from '@material-ui/icons/Star';
import Swiper from 'react-id-swiper';
import smallRoom from '../../assets/small_room.jpg';
import 'swiper/css/swiper.css';
import './style.css';

const useStyles = makeStyles(() => ({
  containerImg: {
    width: '100%',
    marginBottom: '5px',
  },
  roomImg: {
    width: '100%',
    height: '100%',
    borderRadius: '4px',
  },
  address: {
    backgroundColor: '#FC6C85',
    borderRadius: '10px',
    padding: '2px 4px 4px 2px',
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
    spaceBetween: 10,
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
    <div className="container-room-item">
      <div className={classes.containerImg}>
        <Swiper {...params}>
          <div>
            <img
              src={smallRoom}
              style={{ width: '100%', height: '100%', borderRadius: '4px' }}
            ></img>
          </div>
          <div>
            <img
              src={smallRoom}
              style={{ width: '100%', height: '100%', borderRadius: '4px' }}
            ></img>
          </div>
          <div>
            <img
              src={smallRoom}
              style={{ width: '100%', height: '100%', borderRadius: '4px' }}
            ></img>
          </div>
          <div>
            <img
              src={smallRoom}
              style={{ width: '100%', height: '100%', borderRadius: '4px' }}
            ></img>
          </div>
          <div>
            <img
              src={smallRoom}
              style={{ width: '100%', height: '100%', borderRadius: '4px' }}
            ></img>
          </div>
          <div>
            <img
              src={smallRoom}
              style={{ width: '100%', height: '100%', borderRadius: '4px' }}
            ></img>
          </div>
          <div>
            <img
              src={smallRoom}
              style={{ width: '100%', height: '100%', borderRadius: '4px' }}
            ></img>
          </div>
          <div>
            <img
              src={smallRoom}
              style={{ width: '100%', height: '100%', borderRadius: '4px' }}
            ></img>
          </div>
          <div>
            <img
              src={smallRoom}
              style={{ width: '100%', height: '100%', borderRadius: '4px' }}
            ></img>
          </div>
          <div>
            <img
              src={smallRoom}
              style={{ width: '100%', height: '100%', borderRadius: '4px' }}
            ></img>
          </div>
        </Swiper>
      </div>
      <div style={{ position: 'relative' }}>
        <Box display="inline" className={classes.address}>
          Đồng nai
        </Box>
        <Box display="inline" className={classes.detailAddress}>
          Ngã tư sông ray, Đồng nai
        </Box>
        <Box display="inline" style={{ fontSize: '12px', position: 'absolute', right: 0 }}>
          <StarIcon style={{ color: '#C53858', fontSize: '12px' }}></StarIcon> 4.95
        </Box>
      </div>
      <div>
        <Box fontWeight="fontWeightBold" fontSize={24} style={{ lineHeight: '32px' }}>
          Biệt thự nhà tao hai dòng thôi nha
        </Box>
      </div>
      <Box fontSize={12} styleư={{ color: 'rgba(43, 43, 43, 0.8)' }}>
        2 người nha - 1 phòng
      </Box>
      <Box fontSize={20} fontWeight={600} style={{ color: 'rgba(43, 43, 43, 0.9)' }}>
        1,500,000/đêm
      </Box>
    </div>
  );
}

export default SmallRoomItem;
