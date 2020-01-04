import React from 'react';
import styled from 'styled-components';
import { Color } from 'config';
import CommentHeader from './CommentHeader';
import Comment from './Comment';
import CommentInput from './CommentInput';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-item: center;
  margin-top: 30px;
`;
const SubContainer = styled.div`
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  align-item: center;
`;
const Button = styled.button`
  margin: 5px 0;
  padding: 2px;
  border-radius: 10px;
  background-color: ${Color.primary};
  color: #fff;
  border: none;
  &:click {
    border: none;
  }
`;

const data = [
  {
    id: 1,
    avatar:
      'https://images.unsplash.com/photo-1506901437675-cde80ff9c746?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    name: 'Lâm Trần',
    message: 'Ngon, bổ, rẻ nè',
    numLikes: 0,
    numComments: 0,
    minutes: 40,
  },
  {
    id: 2,
    avatar:
      'https://images.unsplash.com/photo-1567131308523-383d0fea9671?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    name: 'Thư Nguyễn',
    message: 'Giá cũng ổn, lễ này triển ngay',
    numLikes: 5,
    numComments: 0,
    minutes: 10,
  },
  {
    id: 3,
    avatar:
      'https://images.unsplash.com/photo-1506901437675-cde80ff9c746?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    name: 'Thanh Thảo',
    message: 'Xin coupon mọi người ơi',
    numLikes: 5,
    numComments: 2,
    minutes: 19,
  },
];

const data2 = [
  {
    id: 4,
    avatar:
      'https://images.unsplash.com/photo-1506901437675-cde80ff9c746?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    name: 'Ngọc Mẫn',
    message: 'Xịn xò',
    numLikes: 2,
    numComments: 0,
    minutes: 25,
  },
  {
    id: 5,
    avatar:
      'https://images.unsplash.com/photo-1506901437675-cde80ff9c746?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    name: 'Linh Lan',
    message: '.',
    numLikes: 5,
    numComments: 0,
    minutes: 10,
  },
];

const subData = [
  {
    id: 1,
    avatar:
      'https://images.unsplash.com/photo-1440589473619-3cde28941638?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    name: 'Thanh Ngọc',
    message: 'TET2020 nhé ấy',
    numLikes: 3,
    numComments: 0,
    minutes: 35,
  },
  {
    id: 2,
    avatar:
      'https://images.unsplash.com/photo-1520512202623-51c5c53957df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    name: 'Lam Thảo',
    message: 'Cảm ơn ấy luôn',
    numLikes: 2,
    numComments: 0,
    minutes: 50,
  },
];

function Comments() {
  return (
    <Container>
      <CommentHeader />
      <CommentInput />
      {data.map(item => (
        <Comment
          key={item.id}
          avatar={item.avatar}
          name={item.name}
          message={item.message}
          numLikes={item.numLikes}
          numComments={item.numComments}
          minutes={item.minutes}
        />
      ))}
      <SubContainer>
        <CommentInput />
        {subData.map(item => (
          <Comment
            key={item.id}
            avatar={item.avatar}
            name={item.name}
            message={item.message}
            numLikes={item.numLikes}
            numComments={item.numComments}
            minutes={item.minutes}
          />
        ))}
        <Button>Tải thêm</Button>
      </SubContainer>
      {data2.map(item => (
        <Comment
          key={item.id}
          avatar={item.avatar}
          name={item.name}
          message={item.message}
          numLikes={item.numLikes}
          numComments={item.numComments}
          minutes={item.minutes}
        />
      ))}
      <Button>Tải thêm</Button>
    </Container>
  );
}

export default Comments;
