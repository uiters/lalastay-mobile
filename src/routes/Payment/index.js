import React, { useEffect, useState } from 'react';
import { IonContent } from '@ionic/react'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import DateRangeIcon from '@material-ui/icons/DateRange';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import WarningOutlinedIcon from '@material-ui/icons/WarningOutlined';
import { useHistory } from 'react-router-dom'
import { Header } from 'components';
import './style.css';

const Payment = () => {
  const history = useHistory();
  const [value, setValue] = useState('');
  const [doCancel, setDoCancel] = useState(false);
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
  const matches = useMediaQuery('(min-width:768px)');
  const fixedStyle = matches
    ? {
      position: 'fixed',
      right: '96px',
    }
    : {};
  return (
    <IonContent>
      <Header title="Thông tin đặt phòng" />
      <Grid
        container
        spacing={0}
        style={{ padding: matches ? '48px 96px' : '16px', position: 'relative' }}
      >
        <Grid item xs={12} sm={6} md={6}>
          <p className="payment-top-title">Thông tin đặt phòng</p>
          <p className="payment-sub-title1">4 ngày tại Xinh Homestay</p>
          <div className="payment-checkin-checkout">
            <div className="payment-checkin" style={{ marginRight: '10px' }}>
              <p className="payment-checkin-line" />
              <p className="payment-checkin-title">Check in</p>
              <p className="payment-checkin-date">22/11/2019</p>
              <p className="payment-checkin-day">Thứ 2</p>
            </div>
            <div className="payment-checkin">
              <p className="payment-checkin-line" style={{ backgroundColor: '#27C200' }} />
              <p className="payment-checkin-title">Check out</p>
              <p className="payment-checkin-date">25/11/2019</p>
              <p className="payment-checkin-day">Thứ 5</p>
            </div>
          </div>
          <p className="payment-sub-title2">Những điều cần chú ý</p>
          <div className="payment-container-content1">
            <p className="payment-content1">
              <p style={{ fontWeight: 'bold', margin: '0px' }}>Trách nhiệm vật chất</p>
              Khách hàng chịu mọi trách nhiệm thiệt hại về tài sản đã gây ra tại chỗ ở trong thời
              gian lưu trú.
            </p>
            <p className="payment-content1">
              <p style={{ fontWeight: 'bold', margin: '0px' }}>Nội quy chổ ở</p>
              Cho phép hút thuốc lá Không khuyến khích mang vật nuôi vào nhà
            </p>
          </div>
          <p className="payment-sub-title3">Thông tin của bạn</p>
          <div className="payment-form">
            <div className="payment-form-field">
              <p className="payment-title">
                <span style={{ color: '#EA2F2F' }}>*</span>Họ tên
              </p>
              <input className="payment-input" value="Thien Chi Vi" />
            </div>
            <div className="payment-form-field">
              <p className="payment-title">
                <span style={{ color: '#EA2F2F' }}>*</span>Email
              </p>
              <input className="payment-input" value="moemoecf98@gmail.com" />
            </div>
            <div className="payment-form-field">
              <p className="payment-title">
                <span style={{ color: '#EA2F2F' }}>*</span>Số điện thoại
              </p>
              <input className="payment-input" value="84124545453" />
            </div>
          </div>
          <p className="payment-sub-title4">Mã giảm giá</p>
          <div className="payment-coupon">
            <input
              className="payment-input"
              disabled={doCancel}
              style={
                doCancel
                  ? {
                    backgroundColor: 'rgba(150, 150, 150, 0.2)',
                    borderColor: 'rgba(150, 150, 150, 0.2)',
                    width: '50%',
                  }
                  : { width: '50%' }
              }
              onChange={e => setValue(e.target.value)}
              value={value}
            />
            <input
              className="payment-button1"
              type="button"
              onClick={() => {
                // eslint-disable-next-line no-unused-expressions
                doCancel && setValue('');
                setDoCancel(!doCancel);
              }}
              value={doCancel ? 'LOẠI BỎ' : 'ÁP DỤNG'}
            />
          </div>
        </Grid>
        <Grid item xs={0} sm={2} md={2} />
        <Grid item xs={12} sm={4} md={4} className="payment-right-section" style={fixedStyle}>
          <div className="payment-avatar-section">
            <div>
              <p className="payment-homestay-name">Xinh Homestay</p>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <LocationOnOutlinedIcon style={{ color: '#DADADA', fontSize: '16px' }} />
                <span className="payment-location">Biên Hòa, Đồng Nai</span>
              </div>
            </div>
            <div>
              <img
                style={{ borderRadius: '4px' }}
                alt="logo"
                height="90"
                width="120"
                src="https://images.unsplash.com/photo-1521184353961-da28cce0de77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
              />
            </div>
          </div>
          <div className="payment-customer-section">
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: '6px',
              }}
            >
              <DateRangeIcon style={{ color: '#DADADA', fontSize: '16px', marginRight: '4px' }} />
              <span className="payment-daterange">4 đêm • 22/11/2019 - 26/11/2019</span>
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
              <span className="payment-people">4 người</span>
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
              <span className="payment-daterange">Không vật nuôi, không hút thuốc</span>
            </div>
          </div>
          <div className="payment-fee-section">
            <div className="payment-fee-item">
              <p className="payment-fee-name">Chi phí thuê 4 đêm</p>
              <p className="payment-fee-price" style={{ fontWeight: 600 }}>
                15 000đ
              </p>
            </div>
            <div className="payment-fee-item">
              <p className="payment-fee-name">Dọn dẹp</p>
              <p className="payment-fee-price">1 000đ</p>
            </div>
            <div className="payment-fee-item">
              <p className="payment-fee-name">Ăn trưa</p>
              <p className="payment-fee-price">12 000đ</p>
            </div>
            <div className="payment-fee-item">
              <p className="payment-fee-name">Nước</p>
              <p className="payment-fee-price">200đ</p>
            </div>
            <div className="payment-fee-item">
              <p className="payment-fee-name" style={{ fontWeight: 700 }}>
                Toàn bộ chi phí
              </p>
              <p className="payment-fee-price" style={{ fontWeight: 700 }}>
                28 200đ
              </p>
            </div>
          </div>
          <p className="payment-rule" style={{ fontWeight: 'bold' }}>
            Chính sách hủy
          </p>
          <p className="payment-rule">
            Linh hoạt : Khách sẽ được hoàn trả lại tiền đầy đủ nếu huỷ trong vòng 48 giờ sau khi đặt
            phòng và ít nhất 24 giờ trước khi nhận phòng. Nếu khách hàng không thoả được các điểm
            nêu trên sẽ không được hoàn lại phí dịch vụ.
          </p>
        </Grid>
      </Grid>
      <input
        style={{
          marginLeft: matches ? '96px' : '16px',
          marginBottom: matches ? '48px' : '16px',
        }}
        className="payment-button2"
        type="button"
        value="ĐẶT NGAY"
        onClick={() => history.push('/invoice')}
      />
    </IonContent>
  );
};

export default Payment;
