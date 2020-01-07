import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
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
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  background-color: #fff;
`;
const HeaderTitle = styled.p`
  text-align: center;
  width: 80%;
  font-size: 18px;
  color: ${Color.text};
  font-weight: 500;
`;
const Icon = styled.div`
  color: #2B2B2B;
  font-size: 17px;
  color: ${Color.text};
  margin: auto 15px;
  transition: 250ms all ease-in-out;
  &:hover {
    cursor: pointer;
  }
`;
const LeftContainer = styled.div`
  width: 10%;
  display: flex;
  align-item: center;
`;
const RightContainer = styled.div`
  width: 10%;
  display: flex;
  align-item: center;
`;

const Header = ({ title }) => {
  const history = useHistory();
  return (
    <Container>
      <LeftContainer onClick={() => history.goBack()}>
        <Icon><ArrowBackIosIcon fontSize="inherit" /></Icon>
      </LeftContainer>
      <HeaderTitle>
        {title}
      </HeaderTitle>
      <RightContainer />
    </Container>
  );
};

export default Header;
