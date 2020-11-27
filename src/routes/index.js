import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainPageTemplate from '../pages/mainPage';
import { LoginPageTemplate } from '../pages/loginPage';
import { Header, Container } from '../components';

import { Counter } from '../pages';

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={props => <MainPageTemplate {...props} />}
        />
        <Route exact path="/login" component={LoginPageTemplate} />
        <Route exact path="/inputTest" component={Container} />
        <Route exact path="/counter" component={Counter} />
      </Switch>
    </Router>
  );
};

export default Routes;
