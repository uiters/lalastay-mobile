/* eslint-disable react/jsx-boolean-value */
import React, { useState, useEffect } from 'react';
import { SmallRoomItem, InputSearchForCompare, withLayout } from 'components';
import Swiper from 'react-id-swiper';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Container,
  Grid,
  Box,
} from '@material-ui/core';
import { navigate } from '@reach/router';
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
import addHome from '../../assets/addHome.PNG';

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

  const chooseHome = () => {
    setClose(false);
  };

  const closeHome = () => {
    setClose(true);
  };

  return (
    <Container>
      <div style={{ height: '100px' }} />
      <Box textAlign="center" fontSize={40}>
        So sánh homestay
      </Box>
      <InputSearchForCompare choose={chooseHome} />
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ width: '15%' }} />
            <TableCell style={{ width: '40%' }}>
              <div>
                {' '}
                <SmallRoomItem sale />
              </div>
            </TableCell>
            <TableCell style={{ width: '40%' }}>
              {close && (
                <div
                  style={{ position: 'relative', display: 'flex', justifyContent: 'space-between' }}
                >
                  <img style={{ idth: '250px', height: '300px' }} src={addHome} alt="anh" />
                </div>
              )}
              {!close && (
                <div
                  style={{ position: 'relative', display: 'flex', justifyContent: 'space-between' }}
                >
                  {' '}
                  <SmallRoomItem sale={false} compare={true} close={closeHome} />
                </div>
              )}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableRow>
          <TableCell>
            {' '}
            <Box fontWeight={600}>Tên homestay</Box>
          </TableCell>
          <TableCell>
            <Box fontWeight={600}>Homestaty gâu đần </Box>
          </TableCell>
          <TableCell>{!close && <Box fontWeight={600}>Biệt thự ngôi nhà ma</Box>}</TableCell>
        </TableRow>

        <TableBody>
          <TableRow>
            <TableCell>
              {' '}
              <Box fontWeight={600}>Đánh giá</Box>
            </TableCell>
            <TableCell>
              <StarIcon style={{ color: '#9708CC', fontSize: '18px' }} />
              <span style={{ fontSize: '15px' }}>4.0</span>
            </TableCell>
            {!close && (
              <TableCell style={{ fontSize: '12px' }}>
                <StarIcon style={{ color: '#9708CC', fontSize: '18px' }} />
                <span style={{ fontSize: '15px' }}>4.6</span>
              </TableCell>
            )}
          </TableRow>
          <TableRow>
            <TableCell>
              <Box fontWeight={600}>Loại homestay</Box>
            </TableCell>
            <TableCell>
              {' '}
              <Box> Nhà riêng</Box>
            </TableCell>
            <TableCell> {!close && <Box> Phòng riêng</Box>}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              {' '}
              <Box fontWeight={600}> Chi phí</Box>
            </TableCell>
            <TableCell>
              {' '}
              <Box>2,340,000VNĐ/ ngày</Box>
            </TableCell>
            <TableCell> {!close && <Box>2,340,000VNĐ/ ngày</Box>}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Box fontWeight={600}> Số khách tối đa</Box>
            </TableCell>
            <TableCell>
              {' '}
              <Box>3 người</Box>
            </TableCell>
            <TableCell> {!close && <Box>2 người</Box>}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              {' '}
              <Box fontWeight={600}>Quy định</Box>
            </TableCell>
            <TableCell>
              <Box>
                Không được hút thuốc lá, không lớn tiếng ồn ào khi qua 11 giờ đêm và sau 5 giờ sáng.
                Phải trả tiền trước khi ở không được đem các chất cấm vào khu vực homestay
              </Box>
            </TableCell>
            <TableCell>
              {!close && (
                <Box>
                  Không được hút thuốc lá, không lớn tiếng ồn ào khi qua 11 giờ đêm và sau 5 giờ
                  sáng. Phải trả tiền trước khi ở không được đem các chất cấm vào khu vực homestay
                </Box>
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Box fontWeight={600}>Địa chỉ</Box>
            </TableCell>
            <TableCell>
              <Box>Đà lạt, Lâm Đồng, Việt Nam</Box>
            </TableCell>
            <TableCell>{!close && <Box>Bảo Lộc, Lâm Đồng, Việt Nam</Box>}</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      {/* slide so sánh hai home stay */}

      <Grid direction="row" container justify="center" alignItems="center" spacing={1}>
        <Grid item md={6}>
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
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button className="variant-button" type="button">
              ĐẶT NGAY
            </button>
          </div>
        </Grid>
        <Grid item md={6}>
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
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  className="variant-button"
                  type="button"
                  onClick={() => navigate('/home-detail')}
                >
                  XEM CHI TIẾT
                </button>
              </div>
            </div>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default withLayout(CompareHomestaty);
