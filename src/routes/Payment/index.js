import React, { useEffect } from 'react';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import DateRangeIcon from '@material-ui/icons/DateRange';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import WarningOutlinedIcon from '@material-ui/icons/WarningOutlined';
import { navigate } from '@reach/router';
import Breadcrumb from './components/Breadcrumb';
import './style.css';

const Payment = () => {
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
  return (
    <>
      <Breadcrumb />
      <div className="container">
        <div className="left-section">
          <p className="title">Thông tin đặt phòng</p>
          <p className="sub-title1">4 ngày tại Xinh Homestay</p>
          <div className="checkin-checkout">
            <div className="checkin" style={{ marginRight: '10px' }}>
              <p className="checkin-line" />
              <p className="checkin-title">Check in</p>
              <p className="checkin-date">22/11/2019</p>
              <p className="checkin-day">Tuesday</p>
            </div>
            <div className="checkin">
              <p className="checkin-line" style={{ backgroundColor: '#C2000C' }} />
              <p className="checkin-title">Check out</p>
              <p className="checkin-date">22/11/2019</p>
              <p className="checkin-day">Tuesday</p>
            </div>
          </div>
          <p className="sub-title2">Những điều cần chú ý</p>
          <div className="container-content1">
            <p className="content1">
              Bạn sẽ chịu trách nhiệm cho bất kỳ thiệt hại nào đối với tài sản cho thuê do bạn hoặc
              nhóm của bạn gây ra trong thời gian lưu trú.
            </p>
          </div>
          <p className="sub-title3">Thông tin của bạn</p>
          <div className="form">
            <div className="form-field">
              <p className="title">
                <span style={{ color: '#EA2F2F' }}>*</span>Họ tên
              </p>
              <input className="input" value="Thien Chi Vi" />
            </div>
            <div className="form-field">
              <p className="title">
                <span style={{ color: '#EA2F2F' }}>*</span>Email
              </p>
              <input className="input" value="moemoecf98@gmail.com" />
            </div>
            <div className="form-field">
              <p className="title">
                <span style={{ color: '#EA2F2F' }}>*</span>Số điện thoại
              </p>
              <input className="input" value="84124545453" />
            </div>
          </div>
          <p className="sub-title4">Mã khuyến mãi</p>
          <div className="coupon">
            <input className="input" style={{ width: '50%' }} value="6969" />
            <input className="button1" type="button" value="ÁP DỤNG" />
          </div>
          <input
            className="button2"
            type="button"
            value="ĐẶT NGAY"
            onClick={() => navigate('/invoice')}
          />
        </div>
        <div className="right-section">
          <div className="avatar-section">
            <div>
              <p className="homestay-name">Xinh Homestay</p>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <LocationOnOutlinedIcon style={{ color: '#DADADA', fontSize: '16px' }} />
                <span className="location">Biên Hòa, Đồng Nai</span>
              </div>
            </div>
            <div>
              <img
                alt="logo"
                height="90"
                width="90"
                src="https://images.unsplash.com/photo-1503431128871-cd250803fa41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              />
            </div>
          </div>
          <div className="customer-section">
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: '6px',
              }}
            >
              <DateRangeIcon style={{ color: '#DADADA', fontSize: '16px', marginRight: '4px' }} />
              <span className="daterange">4 đêm • 22/11/2019 - 26/11/2019</span>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: '6px',
              }}
            >
              <PersonOutlineOutlinedIcon
                style={{ color: '#DADADA', fontSize: '16px', marginRight: '4px' }}
              />
              <span className="people">4 người</span>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: '6px',
              }}
            >
              <WarningOutlinedIcon
                style={{ color: '#DADADA', fontSize: '16px', marginRight: '4px' }}
              />
              <span className="daterange">Không vật nuôi, không hút thuốc</span>
            </div>
          </div>
          <div className="fee-section">
            <div className="fee-item">
              <p className="fee-name">Chi phí thuê 4 đêm</p>
              <p className="fee-price" style={{ fontWeight: 600 }}>
                15 000đ
              </p>
            </div>
            <div className="fee-item">
              <p className="fee-name">Dọn dẹp</p>
              <p className="fee-price">1 000đ</p>
            </div>
            <div className="fee-item">
              <p className="fee-name">Ăn trưa</p>
              <p className="fee-price">12 000đ</p>
            </div>
            <div className="fee-item">
              <p className="fee-name">Nước</p>
              <p className="fee-price">200đ</p>
            </div>
            <div className="fee-item">
              <p className="fee-name" style={{ fontWeight: 700 }}>
                Toàn bộ chi phí
              </p>
              <p className="fee-price" style={{ fontWeight: 700 }}>
                28 200đ
              </p>
            </div>
          </div>
          <p className="rule">Chính sách hủy</p>
          <p className="rule">
            Linh hoạt : Khách sẽ được hoàn trả lại tiền đầy đủ nếu huỷ trong vòng 48 giờ sau khi đặt
            phòng và ít nhất 24 giờ trước khi nhận phòng. Nếu khách hàng không thoả được các điểm
            nêu trên sẽ không được hoàn lại phí dịch vụ.
          </p>
        </div>
      </div>
    </>
  );
};

export default Payment;
