import React, { Component } from 'react';
import LoginContainer from '../LoginContainer/LoginContainer';
import PageHeaderContainer from '../PageHeaderContainer/PageHeaderContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="App">
        <LoginContainer />
      </main>
    );
  }
}

export default App;


// <section className="landingPageWrapper">
//   <PageHeaderContainer />
// </section>
