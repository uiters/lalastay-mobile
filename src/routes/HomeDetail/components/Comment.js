import React from 'react';
import styled from 'styled-components';
import { Color } from 'config';

const Main = styled.div`
  display: flex;
  align-item: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Image = styled.img`
  width: 40px;
  height: 40px;
  background-size: auto;
  border-radius: 40px;
  margin-right: 10px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f0f2f5;
  padding: 10px;
  border-radius: 10px;
`;
const Name = styled.a`
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;
const Message = styled.p`
  margin: 0px;
  overflow: hidden !important;
  text-overflow: ellipsis;
`;
const WrappedOption = styled.div`
  cursor: pointer;
  margin: auto 0;
  margin-left: 10px;
`;
const Option = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #dddcdd;
`;
const Action = styled.p`
  margin: 0px;
  cursor: pointer;
  margin-right: 5px;
  color: ${Color.primary}
  font-size: 12px;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }

`;
const Time = styled.p`
  margin: 0px;
  margin-right: 5px;
  color: ${Color.text}
  font-size: 12px;
`;

function Comment({ avatar, name, message, numLikes, numComments, minutes }) {
  return (
    <Main style={{ marginTop: '5px', marginBottom: '5px' }}>
      <Image alt="avatar" src={avatar} />
      <Container>
        <Main>
          <Content>
            <Name href="http://github.com/cuongw">{name}</Name>
            <Message>{message}</Message>
          </Content>
          <WrappedOption>
            <Option>...</Option>
          </WrappedOption>
        </Main>
        <Main>
          <Action>{!numLikes ? 'Thích' : `Thích(${numLikes})`}</Action>
          <Action style={{ fontSize: '10px' }}>.</Action>
          <Action>{!numComments ? 'Bình luận' : `Bình luận(${numComments})`}</Action>
          <Time style={{ fontSize: '10px', fontWeight: 'bold' }}>.</Time>
          <Time>{`${minutes} phút`}</Time>
        </Main>
      </Container>
    </Main>
  );
}

export default Comment;
