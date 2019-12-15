import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import './style.css';
import CityItem from '../CityItem';
import tphcm from '../../assets/tphcm.png';
import quangninh from '../../assets/quangninh.png';
import danang from '../../assets/danang.png';
import hanoi from '../../assets/hanoi.png';
import hoian from '../../assets/hoian.png';
import dalat from '../../assets/dalat.png';
import vungtau from '../../assets/vungtau.png';

function CityScroll() {
  const params = {
    slidesPerView: 5,
    spaceBetween: 10,
    slidesPerGroup: 1,
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
    breakpoints: {
      1024: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      360: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  };

  return (
    <div className="container-city-scroll">
      <Swiper {...params}>
        <div>
          <CityItem image={tphcm} province="TP. Hồ Chí Minh" />
        </div>
        <div>
          <CityItem image={dalat} province="Đà Lạt" />
        </div>
        <div>
          <CityItem image={hoian} province="Hội An" />
        </div>
        <div>
          <CityItem image={vungtau} province="Vũng tàu" />
        </div>
        <div>
          <CityItem image={hanoi} province="Hà Nội" />
        </div>
        <div>
          <CityItem image={tphcm} province="TP. Hồ Chí Minh" />
        </div>
        <div>
          <CityItem image={quangninh} province="Quảng Ninh" />
        </div>
        <div>
          <CityItem image={danang} province="Đà Nẵng" />
        </div>
        <div>
          <CityItem image={tphcm} province="TP. Hồ Chí Minh" />
        </div>
        <div>
          <CityItem image={dalat} province="Đà Lạt" />
        </div>
      </Swiper>
    </div>
  );
}

export default CityScroll;
