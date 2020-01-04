import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { IonApp } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {
  Home,
  HomeDetail,
  HomeByArea,
  Payment,
  Invoice,
  CompareHomestay,
  ComingSoon
} from 'routes';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App = () => (
  <IonApp>
    <IonReactRouter>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/home-detail" component={HomeDetail} />
        <Route path="/home-by-area" component={HomeByArea} />
        <Route path="/compare-homestay" component={CompareHomestay} />
        <Route path="/payment" component={Payment} />
        <Route path="/invoice" component={Invoice} />
        <Route path="/coming-soon" component={ComingSoon} />
        <Route component={ComingSoon} />
      </Switch>
    </IonReactRouter>
  </IonApp>
);

export default App;
