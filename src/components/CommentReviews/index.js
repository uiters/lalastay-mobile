/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
/* eslint-disable array-callback-return */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { CommentReview } from '../index';

import './style.css';

function CommentReviews() {
  const data = [
    {
      id: 1,
      avatar:
        'https://images.unsplash.com/photo-1506901437675-cde80ff9c746?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
      name: 'Lâm Trần',
      message: 'Phòng rộng quá. Giá cả hợp lý, chất lượng, phục vụ tốt',
      minutes: 40,
      rating: 5,
    },
    {
      id: 2,
      avatar:
        'https://images.unsplash.com/photo-1567131308523-383d0fea9671?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      name: 'Thư Nguyễn',
      message: 'Giá cũng ổn, lễ này triển ngay',

      minutes: 10,
      rating: 3,
    },
    {
      id: 3,
      avatar:
        'https://images.unsplash.com/photo-1506901437675-cde80ff9c746?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
      name: 'Thanh Thảo',
      message: 'Cảnh đẹp, chủ nhà thân thiện',

      minutes: 19,
      rating: 4,
    },
    {
      id: 4,
      avatar:
        'https://images.unsplash.com/photo-1506901437675-cde80ff9c746?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
      name: 'Ngọc Mẫn',
      message: 'Nói chung là rất tốt, mà chủ nhà xấu trai quá nên cho 3 sao',
      minutes: 25,
      rating: 3,
    },
    {
      id: 5,
      avatar:
        'https://images.unsplash.com/photo-1506901437675-cde80ff9c746?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
      name: 'Linh Lan',
      message: 'Không có gì để chê cả',
      minutes: 10,
      rating: 5,
    },
  ];

  const RenderComments = () => {
    let result = [];
    if (data.length > 0) {
      result = data.map((item, index) => {
        return (
          <CommentReview
            key={index}
            name={item.name}
            message={item.message}
            minutes={item.minutes}
            avatar={item.avatar}
            rating={item.rating}
          />
        );
      });
    }
    return result;
  };
  return (
    <>
      <RenderComments />
      <button type="button" className="button-xemthem">
        XEM THÊM
      </button>
    </>
  );
}

export default CommentReviews;
