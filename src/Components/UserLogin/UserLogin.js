import React, { Component } from 'react';
import './UserLogin.css';

class UserLogin extends Component {
  constructor() {
    super();
      this.state = {
        username: '',
        password: ''
      }
  }

  updateUserName = (event) => {
    this.setState({ username: event.target.value })
  }

  updatePassword = (event) => {
    this.setState({ password: event.target.value })
  }

  preventDefault = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <section>
        <p className="UserLoginTitle">Login Below</p>
        <div>

          <input onChange={ this.updateUserName }
            placeholder="username"
            type="text"
            name="username"/>

          <input onChange={ this.updatePassword }
            placeholder="password"
            type="password"
            name="password"/>

        </div>
        <button className="UserLoginBtn" disabled={ !this.state.username.length && !this.state.password.length } onClick={ this.preventDefault }>Login</button>
      </section>
    );
  }
}

export default UserLogin;
