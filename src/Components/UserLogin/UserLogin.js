import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import './UserLogin.css';

const UserLogin = (props) => {
  var errorMessage;


  const updateUserName = (event) => {
    props.setUserName(event.target.value)
  }
  const updatePassword = (event) => {
    props.setPassword(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!props.validateUser || !props.validatePassword) {
      console.log(1);
      console.log(errorMessage.innerHTML);
       errorMessage = 'Please enter a valid email & password'
    } else if (!props.stayType) {
      console.log(2);
       errorMessage = 'Please select a staytype'
    }
    else {
      props.history.push('/areas')
    }
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
        <button type="button" onClick={handleSubmit} placeholder='Submit'>Sign-In</button>
      </form>
      <p className='errorMessage'>test</p>

    </section>
  );
}

export default withRouter(UserLogin);


// <Link to={() => {if (!props.stayType || !props.validateUser || !props.validatePassword) {
  //   return '/'
  // } else {
    //   return '/areas'
    // }
    // }}
    //   className="UserLoginBtn">Login
    // </Link>
