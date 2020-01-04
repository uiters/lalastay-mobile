import React from 'react';
import { IonContent } from '@ionic/react';
import { Container } from '@material-ui/core';
import { BodyHomedetail, ShowImageForDetail } from 'components';
import Header from './components/Header';
import './style.css';

function Homedetail() {
  return (
    <IonContent>
      <Header title='DIAMOND 💎 HOMESTAY SAPA' />
      <ShowImageForDetail />
      <Container>
        <BodyHomedetail />
      </Container>
    </IonContent>
  );
}

export default Homedetail;
