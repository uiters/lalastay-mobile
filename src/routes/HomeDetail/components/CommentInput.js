import React from 'react';
import styled from 'styled-components';
import Input from './Input';

const Container = styled.div`
  width: 100%;
  display: flex;
  align-item: center;
  margin: 5px 0;
`;
const Image = styled.img`
  width: 40px;
  height: 40px;
  background-size: auto;
  border-radius: 40px;
  margin-right: 10px;
`;

const CommentInput = () => {
  return (
    <Container>
      <Image alt="avatar" src="https://avatars0.githubusercontent.com/u/34389409?v=4" />
      <Input />
    </Container>
  );
};

export default CommentInput;
