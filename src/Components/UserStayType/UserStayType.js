import React, { Component } from 'react';
import './UserStayType.css';

class UserStayType extends Component {
  render() {
    return (
      <section className="userStayType">
        <p>Please Choose a Booking Type</p>
        <section className="stayTypes">
          <button className="buisnessBtn">
            Buisness
            <img src="https://image.flaticon.com/icons/svg/857/857676.svg" />

          </button>
          <button className="vacationBtn">
            Vacation
            <img className="vacationBtnImg" src="https://image.flaticon.com/icons/svg/2905/2905677.svg" />

          </button>
          <button className="otherBtn">
            Other
            <img className="otherBtnImg" src="https://image.flaticon.com/icons/svg/684/684834.svg" />
          </button>
        </section>
      </section>
    );
  }
}

export default UserStayType;
