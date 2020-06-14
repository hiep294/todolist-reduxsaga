import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HeaderOne from './HeaderOne';
import HeaderTwo from './HeaderTwo';
import Footer from './Footer';

const Layout = ({ children = <></> }) => {
  return (
    <>
      <Switch>
        <Route path="/login" exact>
          <HeaderTwo />
        </Route>
        <Route path="/">
          <HeaderOne />
        </Route>
      </Switch>
      {children}
      <Switch>
        <Route path="/">
          <Footer />
        </Route>
      </Switch>
    </>
  );
};

export default Layout;
