import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
  position: sticky;
  z-index: 2;
  bottom: 0;
  width: 100%;
  display: flex;
  align-item: center;
  justify-center: center;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  padding: 15px;
`;
const LeftContainer = styled.div`
  width: 70%;
  display: flex;
  align-item: center;
`;
const RightContainer = styled.div`
  width: 30%;
  display: flex;
  align-item: center;
  justify-content: flex-end;
`;
const Button = styled.input`
  background: #fc6c85;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: 2px;
  font-style: normal;
  font-size: 18px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;

  &:hover {
    cursor: pointer;
  }
`;

const BottomNavigation = ({ title }) => {
  const history = useHistory();
  return (
    <Container>
      <LeftContainer onClick={() => history.goBack()}>
        <span
          style={{ color: 'gray', fontSize: '18px', textDecoration: 'line-through', marginRight: '10px', fontWeight: '400', marginTop: 'auto', marginBottom: 'auto' }}
        >
          1.500k/đêm
        </span>
        <span style={{ fontSize: '18px', marginTop: 'auto', marginBottom: 'auto' }}>1.235k/đêm</span>
      </LeftContainer>
      <RightContainer>
        <Button
          style={{
            marginTop: 'auto', marginBottom: 'auto'
          }}
          className="payment-button2"
          type="button"
          value="ĐẶT PHÒNG"
          onClick={() => history.push('/payment')}
        />
      </RightContainer>
    </Container>
  );
};

export default BottomNavigation;



