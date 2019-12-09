/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import { CityViewer, RoomViewer, VideoIntro } from 'components';
import { Container } from '@material-ui/core';

function Home() {
  return (
    <div>
      <div>
        <VideoIntro />
      </div>
      <Container>
        <CityViewer
          tilte="Địa điểm nổi bật hôm nay"
          sologen="Đây là những địa điểm nổi bật nhất Lalasttay"
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
    </div>
  );
}

export default Home;
