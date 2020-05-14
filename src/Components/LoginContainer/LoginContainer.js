import React, { Component } from 'react';
import Title from '../Title/Title';
import UserStayType from '../UserStayType/UserStayType';
import UserLogin from '../UserLogin/UserLogin';
import './LoginContainer.css';

const LoginContainer = ({ getPurpose }) => {
  return (
    <section className="loginContainerWrapper">
      <section className="loginContainer">
        <Title />
        <form>
          <UserStayType getPurpose={ getPurpose }/>
          <UserLogin />
        </form>
      </section>
    </section>
  );
}

export default LoginContainer;
