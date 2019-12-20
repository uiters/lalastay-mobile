/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { Box, Grid } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import Swiper from 'react-id-swiper';
import { Link, navigate } from '@reach/router';
import PersonIcon from '@material-ui/icons/Person';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import withWidth from '@material-ui/core/withWidth';
import smallRoom from '../../assets/small_room.jpg';
import 'swiper/css/swiper.css';
import './style.css';

import ss1 from '../../assets/ss1.jpg';
import ss2 from '../../assets/ss2.jpg';
import ss3 from '../../assets/ss3.jpg';
import ss4 from '../../assets/ss4.jpg';
import ss5 from '../../assets/ss5.jpg';
import ss6 from '../../assets/ss6.jpg';
import ss7 from '../../assets/ss7.jpg';
import ss8 from '../../assets/ss8.jpg';
import ss9 from '../../assets/ss9.jpg';

function SmallRoomItem(props) {
  useEffect(() => {
    try {
      // trying to use new API - https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    } catch (error) {
      // just a fallback for older browsers
      window.scrollTo(0, 0);
    }
  }, []);
  const imgs = [ss1, ss2, ss3, ss4, ss5, ss6, ss7, ss8, ss9];
  const params = {
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    height: 300,
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
              src={imgs ? imgs[Math.floor(Math.random() * 8)] : smallRoom}
              style={{ width: '100%', height: '100%', borderRadius: '4px', objectFit: 'cover' }}
              alt="img"
            />
          </div>
          <div>
            <img
              src={imgs ? imgs[Math.floor(Math.random() * 8)] : smallRoom}
              style={{ width: '100%', height: '100%', borderRadius: '4px', objectFit: 'cover' }}
              alt="img"
            />
          </div>
          <div>
            <img
              src={imgs ? imgs[Math.floor(Math.random() * 8)] : smallRoom}
              style={{ width: '100%', height: '100%', borderRadius: '4px', objectFit: 'cover' }}
              alt="img"
            />
          </div>
          <div>
            <img
              src={imgs ? imgs[Math.floor(Math.random() * 8)] : smallRoom}
              style={{ width: '100%', height: '100%', borderRadius: '4px', objectFit: 'cover' }}
              alt="img"
            />
          </div>
          <div>
            <img
              src={smallRoom}
              style={{ width: '100%', height: '100%', borderRadius: '4px', objectFit: 'cover' }}
              alt="img"
            />
          </div>
          <div>
            <img
              src={imgs ? imgs[Math.floor(Math.random() * 8)] : smallRoom}
              style={{ width: '100%', height: '100%' }}
              alt="img"
            />
          </div>
          <div>
            <img
              src={imgs ? imgs[Math.floor(Math.random() * 8)] : smallRoom}
              style={{ width: '100%', height: '100%', borderRadius: '4px', objectFit: 'cover' }}
              alt="img"
            />
          </div>
        </Swiper>
        <div className="container-top">
          <div className="province">Đồng Nai</div>
          {props.sale && (
            <div className="sale">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <ArrowDownwardIcon
                  style={{ color: '#1BE72F', fontSize: '15px', fontWeight: '700' }}
                />
                <div>35%</div>
              </div>
            </div>
          )}
        </div>
        {props.compare && (
          <div>
            <HighlightOffIcon
              style={{ right: '0px', position: 'absolute', zIndex: 10, fontSize: '28px' }}
              onClick={() => {
                props.close();
              }}
            />
          </div>
        )}
      </div>

      <div style={{ padding: '0 4px' }} onClick={() => navigate('/home-detail')}>
        <Grid container direction="row" justify="space-between" alignItems="center">
          <Box fontWeight={600} fontSize={18}>
            <Box display="inline" color="#9708CC" style={{ marginLeft: '5px' }}>
              $
            </Box>
            <Box display="inline" color="#2B2B2B">
              {' '}
              1.5tr {props.width === 'xs' ? '' : '/đêm'}
            </Box>
            {props.sale === true && (
              <Box display="inline" fontWeight={300}>
                <strike style={{ marginLeft: '5px' }}> 2.5tr</strike>
              </Box>
            )}
          </Box>
          <Box style={{ fontSize: '14px' }}>
            <div style={{ display: 'flex' }}>
              <div>
                <StarIcon style={{ color: '#9708CC', fontSize: '14px' }} />
              </div>

              <div>4.95</div>
            </div>
          </Box>
        </Grid>
        <div style={{ display: 'flex', fontSize: '14px', alignItems: 'center' }}>
          <Box>
            <PersonIcon style={{ color: '#9708CC', fontSize: '18px' }} />
          </Box>

          <Box>3 người - 1 phòng</Box>
        </div>
        <Box fontWeight={600} fontSize={18} style={{ lineHeight: '25px' }}>
          <Link to="/home-detail" style={{ color: 'rgba(43, 43, 43, 0.8)' }}>
            <div className="showMore" style={{ webkitBoxOrient: 'vertical' }}>
              PVL service apartment near Thảo Điền - Sunshine With Bacony - 301
            </div>
          </Link>
        </Box>
      </div>
    </div>
  );
}

export default withWidth()(SmallRoomItem);
