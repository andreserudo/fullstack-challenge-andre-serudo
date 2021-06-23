import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, Schools } from '../pages';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/schools" component={Schools} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
