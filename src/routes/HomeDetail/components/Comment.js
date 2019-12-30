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

function Comment() {
  return (
    <Main style={{ marginTop: '5px', marginBottom: '5px' }}>
      <Image alt="avatar" src="https://avatars0.githubusercontent.com/u/34389409?v=4" />
      <Container>
        <Main>
          <Content>
            <Name href="http://github.com/cuongw">Cuong Duy Nguyen</Name>
            <Message>Ngon lành cành đào, quá xịn!</Message>
          </Content>
          <WrappedOption>
            <Option>...</Option>
          </WrappedOption>
        </Main>
        <Main>
          <Action>Thích(1)</Action>
          <Action style={{ fontSize: '10px' }}>.</Action>
          <Action>Bình luận(2)</Action>
          <Time style={{ fontSize: '10px', fontWeight: 'bold' }}>.</Time>
          <Time>5 phút</Time>
        </Main>
      </Container>
    </Main>
  );
}

export default Comment;
