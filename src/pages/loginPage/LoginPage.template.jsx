import React from 'react';

import LoginPage from './LoginPage.component';

import { user } from '../../data';

const LoginPageTemplate = () => {
  console.log({ user });
  return (
    <>
      <LoginPage />
    </>
  );
};

export default LoginPageTemplate;
