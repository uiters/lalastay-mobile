import React from 'react';
import './style.css';
// import ImageForDetail from 'components/ImageForDetail';
import { BodyHomedetail, ShowImageForDetail } from 'components';
import { Container } from '@material-ui/core';

function Homedetail() {
  return (
    <div>
      <ShowImageForDetail />
      <Container>
        <BodyHomedetail />
      </Container>
    </div>
  );
}

export default Homedetail;
