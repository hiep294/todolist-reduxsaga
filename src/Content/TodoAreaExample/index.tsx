import React from 'react';
import { Switch, Route } from 'react-router-dom';
import List from './pages/List';

export default () => {
  // const match = useRouteMatch();
  // => should not use match, it is not friendly for search global
  return (
    <Switch>
      <Route path="/todos" component={List} />
    </Switch>
  );
};
