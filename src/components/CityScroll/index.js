/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import './style.css';
import CityItem from '../CityItem';

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
  };

  return (
    <Swiper {...params}>
      <div>
        <CityItem></CityItem>
      </div>
      <div>
        <CityItem></CityItem>
      </div>
      <div>
        <CityItem></CityItem>
      </div>
      <div>
        <CityItem></CityItem>
      </div>
      <div>
        <CityItem></CityItem>
      </div>
      <div>
        <CityItem></CityItem>
      </div>
      <div>
        <CityItem></CityItem>
      </div>
      <div>
        <CityItem></CityItem>
      </div>
      <div>
        <CityItem></CityItem>
      </div>
      <div>
        <CityItem></CityItem>
      </div>
    </Swiper>
  );
}

export default CityScroll;
