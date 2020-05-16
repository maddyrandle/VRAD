import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './UserLogin.css';

const UserLogin = (props) => {
  var errorMessage = ''

  const updateUserName = (event) => {
    props.setUserName(event.target.value)
  }
  const updatePassword = (event) => {
    props.setPassword(event.target.value)
  }
  const test = () => {
    console.log(3);
    errorMessage = 'please select a stay type'
  }

  const handleLogin = (event) => {
    // event.preventDefault();
    if (!props.stayType) {
      console.log(1);
      test()
       errorMessage = 'please select a stay type'
    } else if (!props.stayType || !props.validateUser) {
      console.log(2);
      errorMessage = 'please enter a valid username and password'
    }
  }

  return (
    <section>
      <p className="UserLoginTitle">Login Below</p>
      <form>
        <input onChange={ updateUserName }
          placeholder="username"
          type="text"
          name="username"/>

          <input onChange={ updatePassword }
            placeholder="password"
            type="password"
            name="password"/>
      </form>

      <Link to={() => {if (!props.stayType || !props.validateUser || !props.validatePassword) {
        return '/'
      } else {
        return '/areas'
      }
      }}
        className="UserLoginBtn">Login
      </Link>
      <h2>{errorMessage}</h2>
    </section>
  );
}

export default UserLogin;
