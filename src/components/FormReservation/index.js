import React from 'react';
import { Box } from '@material-ui/core';
import { navigate } from '@reach/router';
import DateRangeIcon from '@material-ui/icons/DateRange';
import './style.css';

function InformationUserForm() {
  return (
    <div style={{ position: 'relative' }}>
      <div className="conatiner-reservation">
        <div style={{ textAlign: 'center' }}>
          <Box fontSize={25} fontWeight={600}>
            Đặt Phòng
          </Box>
        </div>
        <div style={{ textAlign: 'center' }}>
          <ul>
            <li className="magin-15">
              <div className="date-arrival">
                <input placeholder="Ngày đến" className="input-reservation " type="datetime" />
                <DateRangeIcon
                  style={{ position: 'absolute', right: 0, top: 8, color: 'rgba(151, 8, 204,0.5)' }}
                />
              </div>
            </li>
            <li className="magin-15">
              <div className="date-arrival">
                <input placeholder="Ngày đi" className="input-reservation" type="datetime" />
                <DateRangeIcon
                  style={{ position: 'absolute', right: 0, top: 8, color: 'rgba(151, 8, 204,0.5)' }}
                />
              </div>
            </li>
            <li className="magin-15">
              <div>
                <input
                  placeholder="Người lớn"
                  type="number"
                  min={1}
                  className="input-reservation"
                />
              </div>
            </li>
            <li className="magin-15">
              <div>
                <input placeholder="Trẻ em" type="number" min={0} className="input-reservation" />
              </div>
            </li>
            <li className="magin-15">
              <div>
                <button className="book-room" type="button" onClick={() => navigate('/payment')}>
                  ĐẶT PHÒNG
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default InformationUserForm;
