import React, { Component } from 'react';
import './UserStayType.css';

class UserStayType extends Component {
  render() {
    return (
      <section className="userStayType">
        <p>Please Choose a Booking Type</p>
        <section className="stayTypes">
          <button>Buissness</button>
          <button>Vacation</button>
          <button>Other</button>
        </section>
      </section>
    );
  }
}

export default UserStayType;
