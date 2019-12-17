import React from 'react';
import { Grid, Box } from '@material-ui/core';
import WifiIcon from '@material-ui/icons/Wifi';
import PersonIcon from '@material-ui/icons/Person';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import GavelIcon from '@material-ui/icons/Gavel';
import HomeIcon from '@material-ui/icons/Home';
import { navigate } from '@reach/router';
import { Comments, HomestaySimilar } from '../index';
import garden from '../../assets/garden.png';
import parking from '../../assets/parking.png';
import bando from '../../assets/bando.png';

import './style.css';

function BodyHomedetail() {
  return (
    <div style={{ fontSize: '18px' }}>
      <Grid container direction="row" justify="space-between" alignItems="center">
        <Box className="name-home" fontSize={26} fontWeight="bold">
          Home statay Gâu đần
        </Box>
        <button
          className="variant-button"
          type="button"
          onClick={() => {
            navigate('/payment');
          }}
        >
          ĐẶT NGAY
        </button>
      </Grid>
      <Box fontSize={14} fontWeight={300} lineHeight={2} marginBottom={2}>
        Đà lạt, Lâm Đồng, Việt Nam
      </Box>
      <div>
        <div>
          <Box fontWeight={300} fontSize={18} lineHeight={1.5} marginBottom={2}>
            Mia Mia toạ lạc tại Bùi Thị Xuân, phường 8, tp Đà Lạt. Quãng đường bạn cần di chuyển rất
            gần để đến trung tâm tthành phố sương mù sầm uất Đà Lạt mộng mơ chỉ mất từ 8 - 13 phút.
          </Box>
          <Box fontWeight={300} fontSize={18} lineHeight={1.5} marginBottom={2}>
            Chúng tôi có chỗ đậu xe ô tô rộng rãi cho quý khách đi tham quan du lịch theo hội, nhóm,
            theo đoàn hay gia đình,...
          </Box>
          <Box fontWeight={300} fontSize={18} lineHeight={1.5} marginBottom={2}>
            Phòng ở tại Mia Mia thì vô cùng sạch sẽ, thoáng mát, có nhà vệ sinh riêng. View xung
            quanh rất thoáng, đa số là Villa và những ngôi nhà lồng bao phủ, 1 trong những nét rất
            đặc trưng của Đà Lạt.
          </Box>
        </div>
        <div style={{ marginTop: '60px' }}>
          <Grid>
            {/* Tiện nghi */}
            <Grid container spacing={3}>
              <Grid item xs={2}>
                <Box fontWeight={600}>Tiện nghi</Box>
              </Grid>
              <Grid item xs={10} style={{ lineHeight: '30px' }}>
                <Box style={{ display: 'flex' }}>
                  <Box display="inline">
                    <WifiIcon style={{ color: '#9708CC', marginRight: '5px' }} />
                  </Box>
                  <Box display="inline">Wifi miễn phí</Box>
                </Box>
                <Box style={{ display: 'flex' }}>
                  <Box display="inline">
                    <img alt="img" src={garden} style={{ marginRight: '5px' }} />
                  </Box>
                  <Box display="inline">Có sân vườn</Box>
                </Box>
                <Box style={{ display: 'flex' }}>
                  <Box display="inline">
                    <img alt="img" src={parking} style={{ marginRight: '5px' }} />
                  </Box>
                  <Box display="inline" marginBottom={1}>
                    Có chỗ đậu xe
                  </Box>
                </Box>
              </Grid>
            </Grid>
            {/* Số khách */}
            <Grid
              container
              spacing={3}
              style={{ height: '80px', background: 'rgba(43, 43, 43, 0.1)' }}
              justify="center"
              alignItems="center"
            >
              <Grid item xs={2}>
                <Box fontWeight={600}>Số khách</Box>
              </Grid>
              <Grid item xs={10}>
                <Box style={{ display: 'flex' }}>
                  <Box display="inline">
                    <PersonIcon style={{ color: '#9708CC', marginRight: '5px' }} />
                  </Box>
                  <Box display="inline"> 1 người</Box>
                </Box>
              </Grid>
            </Grid>
            {/* Thông tin giá */}
            <Grid
              container
              spacing={3}
              style={{ height: '80px', marginTop: '10px', marginBottom: '10px' }}
              justify="center"
              alignItems="center"
            >
              <Grid item xs={2}>
                <Box fontWeight={600}>Thông tin giá</Box>
              </Grid>
              <Grid item xs={10}>
                <Box style={{ display: 'flex' }}>
                  <Box display="inline">
                    <AttachMoneyIcon style={{ color: '#9708CC', marginRight: '5px' }} />
                  </Box>
                  <Box display="inline"> 2,340,000 VNĐ/ ngày</Box>
                </Box>
              </Grid>
            </Grid>
            {/* Thông tin chi tiết */}
            <Grid container spacing={3} style={{ background: 'rgba(43, 43, 43, 0.1)' }}>
              <Grid item xs={2}>
                <Box fontWeight={600}>Thông tin chi tiết</Box>
              </Grid>
              <Grid item xs={10}>
                <Box style={{ display: 'flex' }}>
                  <Box display="inline">
                    <HomeIcon style={{ color: '#9708CC', marginRight: '5px' }} />
                  </Box>
                  <Box display="inline">
                    <Box>1 phòng khách</Box>
                    <Box>1 phòng tắm</Box>
                    <Box>1 phòng ngủ</Box>
                    <Box>1 nhà bếp</Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            {/* Thông tin liên hệ */}
            <Grid
              container
              spacing={3}
              style={{ height: '80px', marginTop: '10px', marginBottom: '10px' }}
            >
              <Grid item xs={2}>
                <Box fontWeight={600}>Liên hệ</Box>
              </Grid>
              <Grid item xs={10}>
                <Box style={{ display: 'flex' }}>
                  <Box display="inline">
                    <PhoneIcon style={{ color: '#9708CC', marginRight: '5px' }} />
                  </Box>
                  <Box display="inline">0981853641</Box>
                </Box>
                <Box style={{ display: 'flex' }}>
                  <Box display="inline">
                    <EmailIcon style={{ color: '#9708CC', marginRight: '5px' }} />
                  </Box>
                  <Box display="inline">16521214@gmail.com</Box>
                </Box>
              </Grid>
            </Grid>
            {/* Quy định */}
            <Grid container spacing={3} style={{ background: 'rgba(43, 43, 43, 0.1)' }}>
              <Grid item xs={2}>
                <Box fontWeight={600}>Quy định</Box>
              </Grid>
              <Grid item xs={10}>
                <Box style={{ display: 'flex' }}>
                  <Box display="inline">
                    <GavelIcon style={{ color: '#9708CC', marginRight: '5px' }} />
                  </Box>
                  <Box display="inline">
                    Không được hút thuốc lá, không lớn tiếng ồn ào khi qua 11 giờ đêm và sau 5 giờ
                    sáng. Phải trả tiền trước khi ở không được đem các chất cấm vào khu vực homestay
                  </Box>
                </Box>
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Box fontWeight={600} marginTop={5}>
                  Bản đổ
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box>
                  <img alt="img" src={bando} style={{ width: '100%', height: '450px' }} />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container direction="row" justify="space-between" alignItems="center">
            <Box fontSize={18} lineHeight={3} fontWeight={600} marginTop={4} marginBottom={2}>
              Để lại Email và số điện thoại để nhận được ưu đãi tốt nhất
            </Box>
            <div style={{ display: 'flex' }}>
              <Box display="inline" className="space-between" width={500}>
                <input placeholder="Nhâp email ...  " className="search-input" />
              </Box>
              <Box display="inline" className="button-search-container">
                <button className="button-send-email" type="button" />
              </Box>
            </div>
          </Grid>
        </div>

        <div>
          <Box fontSize={18} lineHeight={3} fontWeight={600}>
            Homestay tương tự
          </Box>
          <HomestaySimilar />
        </div>
        <div>
          <Box marginTop={5} marginBottom={2} fontSize={22} fontWeight={500}>
            Đánh giá và bình luận
          </Box>
          <div>
            <Comments />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodyHomedetail;
