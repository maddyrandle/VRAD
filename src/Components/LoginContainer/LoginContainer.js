import React, { Component } from 'react';
import Title from '../Title/Title';
import UserStayType from '../UserStayType/UserStayType';
import UserLogin from '../UserLogin/UserLogin';
import './LoginContainer.css';

const LoginContainer = () => {
  return (
    <section className="loginContainerWrapper">
      <section className="loginContainer">
        <Title />
        <form>
          <UserStayType />
          <UserLogin />
        </form>
      </section>
    </section>
  );
}

export default LoginContainer;
