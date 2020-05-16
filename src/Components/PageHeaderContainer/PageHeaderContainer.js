import React from 'react';
import LandingPageGreeting from '../LandingPageGreeting/LandingPageGreeting';
import Navigation from '../Navigation/Navigation';
import './PageHeaderContainer.css';

const PageHeaderContainer = ({ currentState }) => {
  return (
    <React.Fragment>
      <LandingPageGreeting currentState={currentState}/>
    </React.Fragment>
  );
}


export default PageHeaderContainer;
