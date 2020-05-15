import React, { Component } from 'react';
import Title from '../Title/Title';
import UserStayType from '../UserStayType/UserStayType';
import UserLogin from '../UserLogin/UserLogin';
import './LoginContainer.css';

const LoginContainer = ({ getPurpose, setUserName, setPassword, stayType, validateUser, validatePassword }) => {
  return (
    <section className="loginContainerWrapper">
      <section className="loginContainer">
        <Title />
        <form>
          <UserStayType
            getPurpose={ getPurpose }
          />
          <UserLogin
            setUserName={ setUserName }
            setPassword={ setPassword }
            stayType={ stayType }
            validateUser={ validateUser}
            validatePassword= { validatePassword }
          />
        </form>
      </section>
    </section>
  );
}

export default LoginContainer;
