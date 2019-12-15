import React from 'react';
import { Grid, Box } from '@material-ui/core';
import wifi from '../../assets/wifi.svg';
import tea from '../../assets/tea.svg';
import tivi from '../../assets/tivi.svg';
import hairdry from '../../assets/hairdry.svg';
import kettle from '../../assets/kettle.svg';
import map from '../../assets/map.PNG';
import { Comments, HomestaySimilar } from '../index';

import './style.css';

function BodyHomedetail() {
  return (
    <div>
      <Grid container direction="row" justify="space-between" alignItems="center">
        <Box className="name-home" fontSize={35} fontWeight={500}>
          Home statay Gâu đần
        </Box>
        <button className="variant-button" type="button">
          ĐẶT NGAY
        </button>
      </Grid>
      <Box fontSize={25} fontWeight={300} marginBottom={3} marginTop={3}>
        <i>
          Đà lạt, Lâm Đồng, Việt Nam - vị trí tuyệt vời xem <b>*Map</b>
        </i>
      </Box>
      <div>
        <Box fontWeight={300} fontSize={22} lineHeight={2} marginBottom={5}>
          Nằm ở trung tâm thành phố Đà lạt và chỉ cách quảng trường 2 phút đi bộ, chúng tôi cung cấp
          các lựa chọn phòng riêng và phòng ngủ tập thể dành cho các cá nhân, khách du lịch bụi và
          các nhóm khách. Nằm ở trung tâm thành phố Đà lạt và chỉ cách quảng trường 2 phút đi bộ,
          chúng tôi cung cấp các lựa chọn phòng riêng và phòng ngủ tập thể dành cho các cá nhân,
          khách du lịch bụi và các nhóm khách. Nằm ở trung tâm thành phố Đà lạt và chỉ cách quảng
          trường 2 phút đi bộ, chúng tôi cung cấp các lựa chọn phòng riêng và phòng ngủ tập thể dành
          cho các cá nhân, khách du lịch bụi và các nhóm khách.
        </Box>
        <div>
          <Box fontWeight={600} fontSize={22}>
            Tiện nghi
          </Box>
          <Grid container direction="row" justify="space-around" alignItems="center">
            <img className="convenient-img" src={wifi} alt="wifi" />
            <img className="convenient-img" src={hairdry} alt="hairdry" />
            <img className="convenient-img" src={tivi} alt="tivi" />
            <img className="convenient-img" src={tea} alt="tea" />
            <img className="convenient-img" src={kettle} alt="kettle " />
          </Grid>
        </div>

        <div>
          <table style={{ fontSize: '22px' }} className="container-table">
            <tr>
              <td>
                {' '}
                <Box fontWeight={600}>Loại homestaty</Box>
              </td>
              <td>Nhà riêng</td>
            </tr>
            <tr>
              <td>
                {' '}
                <Box fontWeight={600}>Thông tin nhà </Box>
              </td>
              <td>phòng khách, 1 phòng tắm, 1 phòng ngủ, 1 nhà bếp 2</td>
            </tr>
            <tr>
              <td>
                {' '}
                <Box fontWeight={600}>Giá </Box>{' '}
              </td>
              <td>1.5Tr</td>
            </tr>
            <tr>
              <td>
                {' '}
                <Box fontWeight={600}>Thời hian ở tối thiểu </Box>
              </td>
              <td>1 ngày</td>
            </tr>
            <tr>
              <td>
                {' '}
                <Box fontWeight={600}>Quy định </Box>
              </td>
              <td>
                Không được hút thuốc lá, không lớn tiếng ồn ào khi qua 11 giờ đêm và sau 5 giờ sáng.
                Phải trả tiền trước khi ở không được đem các chất cấm vào khu vực homestay
              </td>
            </tr>
            <tr>
              <td>
                {' '}
                <Box fontWeight={600}>Liên hệ</Box>
              </td>
              <td>
                {' '}
                <Box display="inline" marginRight={40}>
                  Số điện thoại: 0987654310
                </Box>
                <Box display="inline">Email: lalastay@gmail.com</Box>
              </td>
            </tr>
          </table>
          <Box fontSize={22} fontWeight={600}>
            Map
          </Box>
          <Box width="100%" height={250}>
            <img
              alt="map"
              src={map}
              style={{ width: '100%', height: '100%', alignItems: 'center' }}
            />
          </Box>
        </div>
        <Grid container direction="row" justify="space-around" alignItems="center">
          <Box fontSize={20} lineHeight={3} fontWeight={600} marginTop={4} marginBottom={2}>
            <i>Để lại Email hoặc số điện thoại để nhận ưu đãi tốt nhẩt</i>
          </Box>
          <div style={{ display: 'flex' }}>
            <Box display="inline" className="space-between" width={500}>
              <input placeholder="Nhập email ...  " className="search-input" />
            </Box>
            <Box display="inline" className="button-search-container">
              <button className="button-send-email" type="button" />
            </Box>
          </div>

          {/* <div style={{ marginBottom: '100px' }}>
            <Box display="inline" className="search-container" />
            <Box display="inline" className="button-search-container">
              <button className="b-search" type="button" />
            </Box>
          </div> */}
        </Grid>
        <div>
          <Box fontSize={25} lineHeight={3} fontWeight={600}>
            Homestay tương tự
          </Box>
          {/* <Grid direction="row" container justify="center" alignItems="center" spacing={1}>
            <Grid item md={3} xs={6} lg={3} sm={4}>
              <SmallRoomItemCompare />
            </Grid>
            <Grid item md={3} xs={6} lg={3} sm={4}>
              <SmallRoomItemCompare />
            </Grid>
            <Grid item md={3} xs={6} lg={3} sm={4}>
              <SmallRoomItemCompare />
            </Grid>
            <Grid item md={3} xs={6} lg={3} sm={4}>
              <SmallRoomItemCompare />
            </Grid>
          </Grid> */}
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
