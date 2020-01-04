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

function Comments() {
  return (
    <Container>
      <CommentHeader />
      <CommentInput />
      <Comment />
      <Comment />
      <SubContainer>
        <CommentInput />
        <Comment />
        <Comment />
        <Button>Tải thêm</Button>
      </SubContainer>
      <Comment />
      <Comment />
      <SubContainer>
        <CommentInput />
        <Comment />
        <Comment />
      </SubContainer>
      <Comment />
      <Comment />
      <Button>Tải thêm</Button>
    </Container>
  );
}

export default Comments;
