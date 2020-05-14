import React, { Component } from 'react';
import './UserLogin.css';

class UserLogin extends Component {
  render() {
    return (
      <section>
        <p className="UserLoginTitle">Login Below</p>
        <div>
          <input placeholder="username" type="text"/>
          <input placeholder="password" type="password"/>
        </div>
        <button className="UserLoginBtn" disabled>Login</button>
      </section>
    );
  }
}

export default UserLogin;
