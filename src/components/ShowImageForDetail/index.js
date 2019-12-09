/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import Swiper from 'react-id-swiper';
import Carousel, { Modal, ModalGateway } from 'react-images';

import './style.css';
import s1 from '../../assets/s1.jpg';
import s2 from '../../assets/s2.jpg';
import s3 from '../../assets/s3.jpg';
import s4 from '../../assets/s4.jpg';
import s5 from '../../assets/s5.jpg';

function ShowImageForDetail() {
  const params = {
    slidesPerView: 3,
    spaceBetween: 10,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    const temp = modalIsOpen;
    setModalIsOpen(!temp);
  };

  const imgs = [s1, s2, s3, s4, s5, s3, s2, s4, s5];
  const images = [{ src: s1 }, { src: s2 }, { src: s3 }, { src: s4 }, { src: s5 }];
  return (
    <div>
      <div className="conatiner-slie-img">
        <Swiper {...params}>
          {imgs &&
            imgs.map((img, index) => {
              return (
                <div className="slie-img" key={new Date() + index}>
                  <img src={img} alt="ảnh" className="image" onClick={() => setModalIsOpen(true)} />
                </div>
              );
            })}
        </Swiper>
      </div>
      <ModalGateway>
        {modalIsOpen ? (
          <Modal onClose={toggleModal}>
            <Carousel views={images} />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}

export default ShowImageForDetail;
