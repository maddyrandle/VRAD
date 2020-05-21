import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './LandingPageGreeting.css';

const LandingPageGreeting = ({currentState}) => {
  let greetingMessage;

  if(currentState.stayType === 'buisness') {
    greetingMessage = 'Denver receives accolades from far and wide, including some of the top meeting planners in the country. All our properties are in or around the major buissness hubs of Denver.'
  } else if (currentState.stayType === 'vacation') {
      greetingMessage = 'Welcome to Denver where 300 days of sunshine, a thriving cultural scene, diverse neighborhoods and natural beauty combine for the worlds most spectacular playground.'
  } else if (currentState.stayType === 'other'){
      greetingMessage = 'Whether you\'re a seasoned visitor to Denver or here for the first time, you will find that all our listings are within a short distance to every major attraction and buissness in the Denver Metropolitan area.'
  }

  return (
    <header>
      <h1 className="welcomeMessage">
        Welcome To The Mile High City
      </h1>
      <p className="greetingMessage">
        {greetingMessage}
      </p>
    </header>
  );
}

export default LandingPageGreeting;

LandingPageGreeting.propTypes = {
  currentState: PropTypes.object,
};
