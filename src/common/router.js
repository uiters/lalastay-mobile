import React from 'react';
import { Router } from '@reach/router';
import { Login, Home, Repos, RepoDetail, NotFound } from 'routes';

function RouterConfig() {
  return (
    <Router>
      <Login path="/login" />
      <Home path="/" />
      <Repos path="/repo" />
      <RepoDetail path="repo/:name" />
      <NotFound default />
    </Router>
  );
}

export default RouterConfig;
