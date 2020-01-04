/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import { CityViewer, RoomViewer, withLayout, Footer } from 'components';
import { Container } from '@material-ui/core';
import './style.css';

function Home() {
  return (
    <div style={{ position: 'relative' }}>
      <div
        className="video"
        style={{
          position: 'relative',
          paddingBottom: '42.857142857%' /* 21:9 */,
          height: '0px',
          overflow: 'hidden',
          marginBottom: '40px',
        }}
      >
        <iframe
          title="video"
          style={{
            position: 'absolute',
            left: 0,
            width: '100%',
            height: '100%',
          }}
          src="https://www.youtube.com/embed/NU5ff6vRktI?rel=0&amp;controls=0&amp;autoplay=1&amp;loop=1000&amp;mute=1&amp;showinfo=0&amp;start=12&amp;"
          frameBorder={0}
          allow="autoplay; encrypted-media "
        />
      </div>
      <div className="img-introduce">
        <div className="title-introduce">
          <div>Đồng Nai đang chờ bạn khám phá, còn chờ đợi gì nữa?</div>
          <div className="button-xemngay">
            <button type="button" className="variant-button">
              XEM NGAY {'>'}
            </button>
          </div>
        </div>
      </div>
      <Container>
        <CityViewer
          tilte="Địa điểm nổi bật hôm nay"
          sologen="Đây là những địa điểm nổi bật nhất Lalastay"
        />
        <RoomViewer
          sale={true}
          tilte="Chỗ này rẻ nhất luôn"
          sologen="Đây là những chỗ ở rẻ bật nhất của lalastay"
        />
        <CityViewer
          tilte="Hay những địa điểm bạn chưa bao giờ tới"
          sologen="Lalastay sẽ dẫn bạn đến đây"
        />
        <RoomViewer
          sale={false}
          tilte="Các chỗ ở được đặt nhiều nhất nhất"
          sologen="Đây là những chỗ ở nổi bật nhất của lalastay"
        />
      </Container>
      <Footer />
    </div>
  );
}

export default withLayout(Home);
