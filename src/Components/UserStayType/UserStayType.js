import React, { Component } from 'react';
import './UserStayType.css';

class UserStayType extends Component {
  render() {
    return (
      <section className="userStayType">
        <p>Please Choose a Booking Type</p>
        <section className="stayTypes">
          <button className="buisnessBtn">Buisness

          </button>
          <button className="vacationBtn">Vacation

          </button>
          <button className="otherBtn">Other

          </button>
        </section>
      </section>
    );
  }
}

export default UserStayType;
