import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import List from './pages/List';

export default () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.url}`} component={List} />
    </Switch>
  );
};
