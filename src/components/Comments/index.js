/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
/* eslint-disable array-callback-return */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { Comment } from '../index';
import avatar from '../../assets/avatar.jpg';
import avatar1 from '../../assets/avatar1.jpg';
import avatar2 from '../../assets/avatar2.jpg';

import './style.css';

function Comments() {
  const avatars = [avatar, avatar1, avatar2];
  const names = ['Thiện', 'Trang', 'Cương'];
  const [showMore, setShowMore] = useState(false);
  const [comments, setComments] = useState([
    {
      tile: 'Cảnh đẹp, phục vụ tốt, phù hợp giá tiền',
      subCmt: ['Thật không bạn', 'Phù hợp cho những bạn thích khám phá'],
    },
    {
      tile: 'Cảnh đẹp, phục vụ tốt, phù hợp giá tiền',
      subCmt: ['Thật không bạn', 'Phù hợp cho những bạn thích khám phá'],
    },
  ]);
  const show = () => {
    setShowMore(true);
  };
  return (
    <>
      <Comment content="" color="#FFFFFF" img={avatars[2]} name={names[2]} />
      {comments.map((_comment, _index) => {
        const temp = [];
        temp.push(
          <Comment
            content={_comment.tile}
            img={avatars[_index]}
            name={names[_index]}
            key={_index}
          />,
        );
        _comment.subCmt.map((_sub, _index) => {
          const item = (
            <div style={{ marginLeft: '5%' }}>
              <Comment
                content={_sub}
                color="rgba(43, 43, 43, 0.1)"
                img={avatars[_index]}
                name={names[_index]}
                key={_index}
              />
            </div>
          );
          temp.push(item);
        });
        return temp;
      })}
      {!showMore && (
        <div style={{ width: '100%', textAlign: 'center' }}>
          <button
            onClick={show}
            style={{
              border: 'none',
              backgroundColor: 'transparent',
              marginBottom: '20px',
              fontSize: '18px',
            }}
            className="more"
          >
            Xem thêm ...
          </button>
        </div>
      )}
      {showMore &&
        comments.map((_comment, _index) => {
          const temp = [];
          temp.push(
            <Comment
              key={_index}
              content={_comment.tile}
              img={avatars[_index]}
              name={names[_index]}
            />,
          );
          _comment.subCmt.map((_sub, _index) => {
            const item = (
              <div style={{ marginLeft: '5%' }}>
                <Comment
                  ket={_index + new Date()}
                  content={_sub}
                  color="rgba(43, 43, 43, 0.1)"
                  img={avatars[_index]}
                  name={names[_index]}
                />
              </div>
            );
            temp.push(item);
          });
          return temp;
        })}
    </>
  );
}

export default Comments;
