import React from 'react';
import './style.css';
// import ImageForDetail from 'components/ImageForDetail';
import { BodyHomedetail, ShowImageForDetail, withLayout, Footer } from 'components';
import { Container } from '@material-ui/core';

function Homedetail() {
  return (
    <div>
      <ShowImageForDetail />
      <Container>
        <BodyHomedetail />
      </Container>
      <Footer />
    </div>
  );
}

export default withLayout(Homedetail);
