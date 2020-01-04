import React, { useEffect } from 'react';
import { IonContent } from '@ionic/react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import DateRangeIcon from '@material-ui/icons/DateRange';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import WarningOutlinedIcon from '@material-ui/icons/WarningOutlined';
import { useHistory } from 'react-router-dom'
import { Header, BottomNavigation } from 'components';
import './style.css';

const Payment = () => {
  const history = useHistory();
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
  return (
    <IonContent>
      <Header title='Hóa đơn đặt phòng' />
      <div className="invoice-container" style={{ padding: matches ? '48px 96px' : '16px' }}>
        <div className="invoice-left-section">
          <div className="invoice-avatar-section">
            <div>
              <p className="invoice-homestay-name">Xinh Homestay</p>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <LocationOnOutlinedIcon style={{ color: '#DADADA', fontSize: '16px' }} />
                <span className="invoice-location">Biên Hòa, Đồng Nai</span>
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
          <div className="invoice-customer-section">
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: '6px',
              }}
            >
              <DateRangeIcon style={{ color: '#DADADA', fontSize: '16px', marginRight: '4px' }} />
              <span className="invoice-daterange">4 đêm • 22/11/2019 - 26/11/2019</span>
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
              <span className="invoice-people">4 người</span>
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
              <span className="invoice-daterange">Không vật nuôi, không hút thuốc</span>
            </div>
          </div>
          <div className="invoice-fee-section">
            <div className="invoice-fee-item">
              <p className="invoice-fee-name">Chi phí thuê 4 đêm</p>
              <p className="invoice-fee-price" style={{ fontWeight: 600 }}>
                15 000đ
              </p>
            </div>
            <div className="invoice-fee-item">
              <p className="invoice-fee-name">Dọn dẹp</p>
              <p className="invoice-fee-price">1 000đ</p>
            </div>
            <div className="invoice-fee-item">
              <p className="invoice-fee-name">Ăn trưa</p>
              <p className="invoice-fee-price">12 000đ</p>
            </div>
            <div className="invoice-fee-item">
              <p className="invoice-fee-name">Nước</p>
              <p className="invoice-fee-price">200đ</p>
            </div>
            <div className="invoice-fee-item">
              <p className="invoice-fee-name" style={{ fontWeight: 700 }}>
                Toàn bộ chi phí
              </p>
              <p className="invoice-fee-price" style={{ fontWeight: 700 }}>
                28 200đ
              </p>
            </div>
          </div>
          <p className="invoice-rule" style={{ fontWeight: 'bold' }}>
            Chính sách hủy
          </p>
          <p className="invoice-rule">
            Linh hoạt : Khách sẽ được hoàn trả lại tiền đầy đủ nếu huỷ trong vòng 48 giờ sau khi đặt
            phòng và ít nhất 24 giờ trước khi nhận phòng. Nếu khách hàng không thoả được các điểm
            nêu trên sẽ không được hoàn lại phí dịch vụ.
          </p>
        </div>
        <div className="invoice-right-section">
          <input
            className="invoice-button2"
            type="button"
            value="TRANG CHỦ"
            onClick={() => history.push('/')}
          />
          <input className="invoice-button1" type="button" value="TIẾP TỤC XEM" />
        </div>
      </div>
      <BottomNavigation />
    </IonContent>
  );
};

export default Payment;
