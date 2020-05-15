import React from 'react';
import './UserStayType.css';

const UserStayType = ({ getPurpose }) => {
  const handleChange = (event) => {
    event.preventDefault();
    if (event.target.id === event.target.id) {
      getPurpose(event.target.id);
    }
  }

  return (
    <section className="userStayType">
      <p>Please Choose a Booking Type</p>
      <section className="stayTypes">
        <button className="buisnessBtn" id="buisness" onClick={ handleChange }>
          Buisness
          <img src="https://image.flaticon.com/icons/svg/857/857676.svg" id="buisness" />

        </button>
        <button className="vacationBtn" id="vacation" onClick={ handleChange }>
          Vacation
          <img className="vacationBtnImg" src="https://image.flaticon.com/icons/svg/2905/2905677.svg" id="vacation" />

        </button>
        <button className="otherBtn" id="other" onClick={ handleChange }>
          Other
          <img className="otherBtnImg" src="https://image.flaticon.com/icons/svg/684/684834.svg" id="vacation" />
        </button>
      </section>
    </section>
  );
}

export default UserStayType;
