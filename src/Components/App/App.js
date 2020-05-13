import React, { Component } from 'react';
import Title from '../Title/Title';
import UserStayType from '../UserStayType/UserStayType';
import UserLogin from '../UserLogin/UserLogin';
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="App">
        <section className="loginContainerWrapper">
          <section className="loginContainer">
            <Title />
            <form>
              <UserStayType />
              <UserLogin />
            </form>
          </section>
        </section>
      </main>
    );
  }
}

export default App;
