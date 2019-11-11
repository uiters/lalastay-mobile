import React from 'react';
import { Container } from '@material-ui/core';
import { Navbar, CityViewer, DiscountRoomViewer, RoomViewer, VideoIntro } from 'components';

function Home() {
  // const [isOpacity, setIsOpacity] = useState(0.2);

  // const listener = () => {
  //   if (window.pageYOffset >= 300) {
  //     setIsOpacity(1);
  //   } else {
  //     setIsOpacity(0.6);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', listener);
  //   return () => {
  //     window.removeEventListener('scroll', listener);
  //   };
  // });
  return (
    <>
      {/* <Navbar opacity={isOpacity} /> */}
      <Navbar />
      <VideoIntro />
      <Container>
        <CityViewer
          tilte="Địa điểm nổi bật hôm nay"
          content="Đây là những địa điểm nổi bật nhất Lalasttay"
        />
        <DiscountRoomViewer />
        <CityViewer
          tilte="Hay những địa điểm bạn chưa bao giờ tới"
          content="Lalastay sẽ dẫn bạn đến đây"
        />
        <RoomViewer />
      </Container>
    </>
  );
}

export default Home;
