import React from 'react';
import { Router } from '@reach/router';
import {
  Login,
  Home,
  Repos,
  RepoDetail,
  NotFound,
  Homedetail,
  HomeByArea,
  CompareHomestaty,
} from 'routes';
import { Navbar } from 'components';

function RouterConfig() {
  return (
    <>
      <Navbar />
      <Router>
        <Login path="/login" />
        <Home path="/" />
        <Repos path="/repo" />
        <RepoDetail path="repo/:name" />
        <Homedetail path="home-detail" />
        <HomeByArea path="home-by-area" />
        <CompareHomestaty path="compare-homestay" />
        <NotFound default />
      </Router>
    </>
  );
}

export default RouterConfig;
