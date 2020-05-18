import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './UserLogin.css';

const UserLogin = (props) => {

  const updateUserName = (event) => {
    props.setUserName(event.target.value)
  }
  const updatePassword = (event) => {
    props.setPassword(event.target.value)
  }

  return (
    <section>
      <p className="UserLoginTitle">Login Below</p>
      <form>
        <input onChange={ updateUserName }
          placeholder="username"
          type="text"
          name="username"
        />
        <input onChange={ updatePassword }
          placeholder="password"
          type="password"
          name="password"
        />
      </form>

      <Link to={() => {if (!props.stayType || !props.validateUser || !props.validatePassword) {
        return '/'
      } else {
        return '/areas'
      }
      }}
        className="UserLoginBtn">Login
      </Link>

    </section>
  );
}

export default UserLogin;
