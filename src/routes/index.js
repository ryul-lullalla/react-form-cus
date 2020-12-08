import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainPageTemplate from '../pages/mainPage';
import { LoginPageTemplate } from '../pages/loginPage';
import { Header } from '../components';

import { Counter, SignUpPageTemplate } from '../pages';

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
        <Route exact path="/signUp" component={SignUpPageTemplate} />
        <Route exact path="/counter" component={Counter} />
      </Switch>
    </Router>
  );
};

export default Routes;
