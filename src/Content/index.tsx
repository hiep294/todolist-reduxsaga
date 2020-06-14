import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Todo from './TodoAreaExample';

const Body = () => {
  return (
    <Switch>
      <Route path="/todos">
        <Todo />
      </Route>
    </Switch>
  );
};
export default Body;
