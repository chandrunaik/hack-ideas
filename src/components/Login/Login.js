import wallpaper from './../../assets/images/undraw_programming.svg';
import Header from './../common/Header';
import LoginForm from './LoginForm';

import React from 'react';

function Login() {
  return (
    <div className="d-flex flex-column flex-fill login">
      <Header></Header>
      <div className="d-flex flex-fill  align-items-center justify-content-center">
        <img src={wallpaper} alt="wallpaper" width="500" />
        <LoginForm></LoginForm>
      </div>
    </div>
  );
}

export default Login;
