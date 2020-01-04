import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Color } from 'config';

const Container = styled.div`
  position: sticky;
  z-index: 2;
  top: 0;
  width: 100%;
  display: flex;
  align-item: center;
  height: 57px;
  box-shadow: 0px 2px 6px rgba(43, 43, 43, 0.2);
  background-color: #fff;
`;
const HeaderTitle = styled.p`
  text-align: center;
  width: 60%;
  font-size: 18px;
  color: ${Color.text};
  font-weight: bold;
`;
const Icon = styled.i`
  font-size: 24px;
  color: ${Color.text};
  margin: auto 15px;
  transition: 250ms all ease-in-out;
  &:hover {
    cursor: pointer;
  }
`;
const LeftContainer = styled.div`
  width: 20%;
  display: flex;
  align-item: center;
`;
const RightContainer = styled.div`
  width: 20%;
  display: flex;
  align-item: center;
`;

const Header = ({title}) => {
  const history = useHistory();
  return (
    <Container>
      <LeftContainer onClick={() => history.goBack()}>
        <Icon className="fas fa-chevron-left" />
      </LeftContainer>
      <HeaderTitle>
        {title}
      </HeaderTitle>
      <RightContainer />
    </Container>
  );
};

export default Header;
