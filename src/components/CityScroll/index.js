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
          <CityItem />
        </div>
        <div>
          <CityItem />
        </div>
        <div>
          <CityItem />
        </div>
        <div>
          <CityItem />
        </div>
        <div>
          <CityItem />
        </div>
        <div>
          <CityItem />
        </div>
        <div>
          <CityItem />
        </div>
        <div>
          <CityItem />
        </div>
        <div>
          <CityItem />
        </div>
        <div>
          <CityItem />
        </div>
      </Swiper>
    </div>
  );
}

export default CityScroll;
