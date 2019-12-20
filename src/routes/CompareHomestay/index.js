/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-boolean-value */
import React, { useState, useEffect } from 'react';
import { InputSearchForCompare, withLayout } from 'components';
import Swiper from 'react-id-swiper';
import { Box, Container, Grid } from '@material-ui/core';
import { navigate } from '@reach/router';
import WifiIcon from '@material-ui/icons/Wifi';
import StarIcon from '@material-ui/icons/Star';
import ss1 from '../../assets/ss1.jpg';
import ss2 from '../../assets/ss2.jpg';
import ss3 from '../../assets/ss3.jpg';
import ss4 from '../../assets/ss4.jpg';
import ss5 from '../../assets/ss5.jpg';
import ss6 from '../../assets/ss6.jpg';
import ss7 from '../../assets/ss7.jpg';
import ss8 from '../../assets/ss8.jpg';
import ss9 from '../../assets/ss9.jpg';
import ss10 from '../../assets/ss10.jpg';
import garden from '../../assets/garden.png';
import parking from '../../assets/parking.png';

import './style.css';

function CompareHomestaty() {
  const [gallerySwiper, setGallerySwiper] = useState(null);
  const [thumbnailSwiper, setThumbnailSwiper] = useState(null);
  const [_gallerySwiper, setGallerySwiper_] = useState(null);
  const [_thumbnailSwiper, setThumbnailSwiper_] = useState(null);
  const [close, setClose] = useState(false);

  const gallerySwiperParams = {
    getSwiper: setGallerySwiper,
    spaceBetween: 10,
    slidesPerView: 'auto',
    centeredSlides: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };

  const thumbnailSwiperParams = {
    getSwiper: setThumbnailSwiper,
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 'auto',
    touchRatio: 0.2,
    slideToClickedSlide: true,
  };

  useEffect(() => {
    if (gallerySwiper !== null && thumbnailSwiper !== null) {
      gallerySwiper.controller.control = thumbnailSwiper;
      thumbnailSwiper.controller.control = gallerySwiper;
    }
  }, [gallerySwiper, thumbnailSwiper]);

  const seGallerySwiperParams = {
    getSwiper: setGallerySwiper_,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };

  const seThumbnailSwiperParams = {
    getSwiper: setThumbnailSwiper_,
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 'auto',
    touchRatio: 0.2,
    slideToClickedSlide: true,
  };

  useEffect(() => {
    if (
      _gallerySwiper !== null &&
      _gallerySwiper.controller &&
      _thumbnailSwiper !== null &&
      _thumbnailSwiper.controller
    ) {
      _gallerySwiper.controller.control = _thumbnailSwiper;
      _thumbnailSwiper.controller.control = _gallerySwiper;
    }
  }, [_gallerySwiper, _thumbnailSwiper]);

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
  const chooseHome = () => {
    setClose(false);
  };

  const closeHome = () => {
    setClose(true);
  };

  return (
    <Container>
      <div style={{ height: '100px' }} />
      <Box fontSize={32} fontWeight="bold">
        So sánh homestay
      </Box>
      <InputSearchForCompare choose={chooseHome} />

      {/* slide so sánh hai home stay */}
      <Grid direction="row" container justify="center" alignItems="center" spacing={1}>
        <Grid item md={1} />
        <Grid item md={4}>
          <div className="container-show-image">
            <Swiper {...gallerySwiperParams}>
              <div className="swiper-slide ">
                <img style={{ width: '100%', height: '100%' }} src={ss1} alt="img" />
              </div>
              <div className="swiper-slide">
                <img style={{ width: '100%', height: '100%' }} src={ss2} alt="img" />
              </div>
              <div className="swiper-slide">
                <img style={{ width: '100%', height: '100%' }} src={ss3} alt="img" />
              </div>
              <div className="swiper-slide">
                <img style={{ width: '100%', height: '100%' }} src={ss4} alt="img" />
              </div>
              <div>
                <img style={{ width: '100%', height: '100%' }} src={ss5} alt="img" />
              </div>
            </Swiper>
            <div className="container-thum">
              <Swiper {...thumbnailSwiperParams}>
                <img className="slide-under swiper-slide swiper-slide-active" src={ss1} alt="img" />

                <img className="slide-under swiper-slide" src={ss2} alt="img" />

                <img className="slide-under swiper-slide" src={ss3} alt="img" />

                <img className="slide-under swiper-slide" src={ss4} alt="img" />

                <img className="slide-under swiper-slide" src={ss5} alt="img" />
              </Swiper>
            </div>
          </div>
          <Box fontSize={25}>Tuấn Vũ Homestay Đà Lạt - Double Doraemon Room 2</Box>
          <Box fontSize={20}>
            <i>
              <u>Đà Lạt, Lâm Đồng Việt Nam</u>
            </i>
          </Box>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
            <button
              className="variant-button"
              type="button"
              onClick={() => navigate('/home-detail')}
            >
              CHI TIẾT {'>>'}
            </button>
          </div>
        </Grid>
        <Grid item md={2} />
        <Grid item md={4}>
          {!close && (
            <div className="container-show-image">
              <Swiper {...seGallerySwiperParams}>
                <div className="swiper-slide">
                  <img style={{ width: '100%', height: '100%' }} src={ss6} alt="img" />
                </div>
                <div className="swiper-slide">
                  <img style={{ width: '100%', height: '100%' }} src={ss7} alt="img" />
                </div>
                <div className="swiper-slide">
                  <img style={{ width: '100%', height: '100%' }} src={ss8} alt="img" />
                </div>
                <div className="swiper-slide">
                  <img style={{ width: '100%', height: '100%' }} src={ss9} alt="img" />
                </div>
                <div>
                  <img style={{ width: '100%', height: '100%' }} src={ss10} alt="img" />
                </div>
                <div className="swiper-slide" />
                <img style={{ width: '100%', height: '100%' }} src={ss6} alt="img" />
                <div className="swiper-slide">
                  <img style={{ width: '100%', height: '100%' }} src={ss7} alt="img" />
                </div>
                <div className="swiper-slide">
                  <img style={{ width: '100%', height: '100%' }} src={ss8} alt="img" />
                </div>
                <div className="swiper-slide">
                  <img style={{ width: '100%', height: '100%' }} src={ss9} alt="img" />
                </div>
                <div>
                  <img style={{ width: '100%', height: '100%' }} src={ss10} alt="img" />
                </div>
              </Swiper>
              <div className="container-thum">
                <Swiper {...seThumbnailSwiperParams}>
                  <img className="slide-under swiper-slide" src={ss6} alt="img" />

                  <img className="slide-under swiper-slide" src={ss7} alt="img" />

                  <img className="slide-under swiper-slide" src={ss8} alt="img" />

                  <img className="slide-under swiper-slide" src={ss9} alt="img" />

                  <img className="slide-under swiper-slide" src={ss10} alt="img" />
                  <img className="slide-under swiper-slide" src={ss6} alt="img" />

                  <img className="slide-under swiper-slide" src={ss7} alt="img" />

                  <img className="slide-under swiper-slide" src={ss8} alt="img" />

                  <img className="slide-under swiper-slide" src={ss9} alt="img" />

                  <img className="slide-under swiper-slide" src={ss10} alt="img" />
                </Swiper>
              </div>
              <Box fontSize={25}>Tuấn Vũ Homestay Đà Lạt - Double Doraemon Room 2</Box>
              <Box fontSize={20}>
                <i>
                  <u>Đà Lạt, Lâm Đồng Việt Nam</u>
                </i>
              </Box>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
                <button
                  className="variant-button"
                  type="button"
                  onClick={() => navigate('/home-detail')}
                >
                  CHI TIẾT {'>>'}
                </button>
              </div>
            </div>
          )}
        </Grid>
        <Grid item md={1} />
      </Grid>
      <div className="content-compare">
        <div style={{ display: 'flex', alignItems: 'center', margin: '15px 0px' }}>
          <Box marginRight={3}>
            <Box display="inline">
              <StarIcon style={{ color: '#9708CC', fontSize: '16px' }} />
            </Box>
            <Box display="inline">4.95</Box>
          </Box>
          <Box className="divde_200 " />
          <Box fontSize={24} marginLeft={3} marginRight={3}>
            Đánh giá
          </Box>
          <Box className="divde_200 " />
          <Box>
            <Box display="inline" marginLeft={3}>
              <StarIcon style={{ color: '#9708CC', fontSize: '16px' }} />
            </Box>
            <Box display="inline">4.95</Box>
          </Box>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '15px 0px',
            backgroundColor: 'rgba(196, 196, 196, 0.15)',
            width: '100%',
            justifyContent: 'center',
          }}
        >
          <Box marginRight={3}>
            <Box style={{ display: 'flex' }}>
              <Box>
                <WifiIcon style={{ color: '#9708CC', marginRight: '5px' }} />
              </Box>
              <Box>Wifi miễn phí</Box>
            </Box>
            <Box style={{ display: 'flex' }}>
              <Box display="inline">
                <img alt="img" src={garden} style={{ marginRight: '5px' }} />
              </Box>
              <Box display="inline">Có sân vườn</Box>
            </Box>
            <Box style={{ display: 'flex' }}>
              <Box>
                <img alt="img" src={parking} style={{ marginRight: '5px' }} />
              </Box>
              <Box marginBottom={1}>Có chỗ đậu xe</Box>
            </Box>
          </Box>
          <Box className="divde_150 " />
          <Box fontSize={24} marginLeft={3} marginRight={3}>
            Tiện nghi
          </Box>
          <Box className="divde_150 " />
          <Box marginLeft={3}>
            <Box style={{ display: 'flex' }}>
              <Box>
                <WifiIcon style={{ color: '#9708CC', marginRight: '5px' }} />
              </Box>
              <Box>Wifi miễn phí</Box>
            </Box>
            <Box style={{ display: 'flex' }}>
              <Box display="inline">
                <img alt="img" src={garden} style={{ marginRight: '5px' }} />
              </Box>
              <Box display="inline">Có sân vườn</Box>
            </Box>
            <Box style={{ display: 'flex' }}>
              <Box>
                <img alt="img" src={parking} style={{ marginRight: '5px' }} />
              </Box>
              <Box marginBottom={1}>Có chỗ đậu xe</Box>
            </Box>
          </Box>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', padding: '15px 0px' }}>
          <Box marginRight={3}>
            <Box>2,345,000 VNĐ/ngày</Box>
          </Box>
          <Box className="divde_200 " />
          <Box fontSize={24} marginLeft={3} marginRight={3}>
            Giá
          </Box>
          <Box className="divde_200 " />
          <Box>
            <Box>2,345,000 VNĐ/ngày</Box>
          </Box>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '15px 0px',
            backgroundColor: 'rgba(196, 196, 196, 0.15)',
            width: '100%',
            justifyContent: 'center',
          }}
        >
          <Box marginRight={3}>
            <Box> 3 người</Box>
          </Box>
          <Box className="divde_150 " />
          <Box fontSize={24} marginLeft={3} marginRight={3}>
            Số khách
          </Box>
          <Box className="divde_150 " />
          <Box display="inline" marginLeft={3}>
            <Box>4 người</Box>
          </Box>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '15px 0px',
          }}
        >
          <Box marginRight={3}>
            <Box>Nhà riêng</Box>
          </Box>
          <Box className="divde_200 " />
          <Box fontSize={24} marginLeft={3} marginRight={3}>
            Loại homestay
          </Box>
          <Box className="divde_200 " />
          <Box marginLeft={3}>
            <Box>Khách sạn</Box>
          </Box>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '15px 0px',
            backgroundColor: 'rgba(196, 196, 196, 0.15)',
            width: '100%',
            justifyContent: 'center',
          }}
        >
          <Box marginRight={3}>
            <Box>2 km</Box>
          </Box>
          <Box className="divde_200 " />
          <Box fontSize={24} marginLeft={3} marginRight={3}>
            Khoảng cách từ bạn
          </Box>
          <Box className="divde_200 " />
          <Box marginLeft={3}>
            <Box> 3 km</Box>
          </Box>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '15px 0px',
            width: '100%',
            justifyContent: 'center',
          }}
        >
          <Box marginRight={3}>
            <Box>Thung lũng tình yêu, Quảng trường, chợ đêm</Box>
          </Box>
          <Box className="divde_200 " />
          <Box fontSize={24} marginLeft={3} marginRight={3}>
            Gần với
          </Box>
          <Box className="divde_200 " />
          <Box marginLeft={3}>
            <Box>Cáp treo, Sân bay, núi langbian, Thác Preen</Box>
          </Box>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '15px 0px',
            width: '100%',
            justifyContent: 'center',
            backgroundColor: 'rgba(196, 196, 196, 0.15)',
          }}
        >
          <Box marginRight={3}>
            Không được hút thuốc lá, không lớn tiếng ồn ào khi qua 11 giờ đêm và sau 5 giờ sáng.
            Phải trả tiền trước khi ở không được đem các chất cấm vào khu vực homesta
          </Box>
          <Box className="divde_150 " />
          <Box fontSize={24} marginLeft={3} marginRight={3}>
            Quy định
          </Box>
          <Box className="divde_150 " />
          <Box marginLeft={3}>
            Không được hút thuốc lá, không lớn tiếng ồn ào khi qua 11 giờ đêm và sau 5 giờ sáng.
            Phải trả tiền trước khi ở không được đem các chất cấm vào khu vực homestay
          </Box>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginBottom: '50px',
        }}
      >
        <div>
          <button
            className="variant-button datcho"
            type="button"
            onClick={() => navigate('/payment')}
          >
            ĐẶT NGAY
          </button>
        </div>
        <div>
          <button
            className="variant-button datcho"
            type="button"
            onClick={() => navigate('/payment')}
          >
            ĐẶT NGAY
          </button>
        </div>
      </div>
    </Container>
  );
}

export default withLayout(CompareHomestaty);
