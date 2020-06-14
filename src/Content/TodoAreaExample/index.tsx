import React from 'react';
import { Switch, useRouteMatch, Route } from 'react-router-dom';
import Home from './pages/Home';

export default () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.url}`} component={Home} />
    </Switch>
  );
};
