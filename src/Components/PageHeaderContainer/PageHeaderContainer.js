import React, { Component } from 'react';
import LandingPageGreeting from '../LandingPageGreeting/LandingPageGreeting';
import Navigation from '../Navigation/Navigation';
import './PageHeaderContainer.css';

<<<<<<< HEAD

const PageHeaderContainer = ({ currentState }) => {
  return (
    <LandingPageGreeting currentState={currentState}/>
  );
}

=======
const PageHeaderContainer = () => {
  return (
    <React.Fragment>
      <LandingPageGreeting />
    </React.Fragment>
  );
}

>>>>>>> master
export default PageHeaderContainer;
