import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Welcome from '~/pages/Welcome';
import SignUp from '~/pages/SignUp';
import Home from '~/pages/Home';
import NotFound from '~/pages/NotFound';

export default function routes() {
  return (
    <Switch>
      <Route path="/" exact component={Welcome} />
      <Route path="/register" component={SignUp} />
      <Route path="/home" component={Home} isPrivate />
      <Route component={NotFound} />
    </Switch>
  );
}
