import React from 'react';
import styled from 'styled-components';
import { Color } from 'config';

const Container = styled.div`
  display: flex;
  width: 100%;
  align-item: center;
  justify-content: space-between;
  background-color: #f0f2f5;
  padding: 10px;
  border-radius: 10px;
`;
const TextInput = styled.input`
  padding: 0px;
  font-size: 14px;
  border: none;
  background-color: #f0f2f5;
  caret-color: ${Color.primary};
  &:placeholder {
    color: #dddcdd;
  }
  &:focus {
    outline: none;
  }
`;
const IconGroup = styled.div`
  display: flex;
`;
const WrappedIcon = styled.div`
  margin: auto 5px;
`;
const Icon = styled.i`
  font-size: 16px;
  color: ${Color.primary};
`;

const Input = () => {
  return (
    <Container>
      <TextInput placeholder="Write a comment..." />
      <IconGroup>
        <WrappedIcon>
          <Icon className="fas fa-smile" />
        </WrappedIcon>
        <WrappedIcon>
          <Icon className="fas fa-camera" />
        </WrappedIcon>
      </IconGroup>
    </Container>
  );
};

Input.defaultProps = {
  value: '',
};

export default Input;
