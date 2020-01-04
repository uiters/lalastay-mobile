import React from 'react';
import { IonContent } from '@ionic/react'
import { Navbar } from 'components';

function withLayout(WrappedComponent) {
  return class extends React.Component {
    render() {
      return (
        <>
          <Navbar />
          <IonContent>
            <WrappedComponent {...this.props} />
          </IonContent>
        </>
      );
    }
  };
}

export default withLayout;
