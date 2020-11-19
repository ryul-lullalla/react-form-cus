import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import GlobalStyles from '../styles/GlobalStyles';

const Routes = () => {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route exact path="/" />
      </Switch>
    </Router>
  );
};

export default Routes;
