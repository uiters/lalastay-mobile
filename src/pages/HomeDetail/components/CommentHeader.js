import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-item: center;
`;
const Label = styled.label`
  position: relative;
  &:before {
    content: '';
    right: 4px;
    top: 1px;
    width: 23px;
    height: 18px;
    background: #fff;
    position: absolute;
    pointer-events: none;
    display: block;
  }
  &:after {
    content: '\f078';
    font-family: 'FontAwesome';
    font-size: 11px;
    color: #aaa;
    right: 8px;
    top: 4px;
    padding: 0 0 2px;
    position: absolute;
    pointer-events: none;
  }
`;
const Title = styled.p`
  margin: auto 0px;
  margin-right: 60px;
  font-size: 18px;
  font-weight: bold;
`;
const Select = styled.select`
  font-family: 'Font Awesome 5 Free', Open Sans;
  width: 170px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 0px 10px;
  font-size: 14px;
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid rgba(43, 43, 43, 0.4);
  &:hover {
    border: 1px solid rgba(43, 43, 43, 0.4);
  }
`;
const Option = styled.option`
  font-size: 18px;
`;

function CommentHeader() {
  return (
    <Container>
      <Title>13 bình luận</Title>
      <Label>
        <Select>
          <Option>Mới nhất</Option>
          <Option>Nhận xét hàng đầu</Option>
        </Select>
      </Label>
    </Container>
  );
}

export default CommentHeader;
