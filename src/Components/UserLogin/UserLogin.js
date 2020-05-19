import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import './UserLogin.css';

class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage : ''
    }
  }

  updateUserName = (event) => {
    this.props.setUserName(event.target.value)
  }

  updatePassword = (event) => {
    this.props.setPassword(event.target.value)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(!this.props.validateUser || !this.props.validatePassword) {
       this.setState({
         errorMessage : 'Please enter a valid email & password'
       })
    } else if (!this.props.stayType) {
      this.setState({
        errorMessage : 'Please select a staytype'
      })
    }
    else {
      this.props.history.push('/areas')
    }
  }

  render() {
  return (
    <section>
      <p className="UserLoginTitle">Login Below</p>
      <form>
        <input onChange={ this.updateUserName }
          placeholder="username"
          type="text"
          name="username"
        />
        <input onChange={ this.updatePassword }
          placeholder="password"
          type="password"
          name="password"
        />
      </form>
      <button type="button" onClick={this.handleSubmit} placeholder='Submit'>Sign-In</button>
      <p className='errorMessage'>{this.state.errorMessage}</p>
    </section>
  );
}
}

export default withRouter(UserLogin);
