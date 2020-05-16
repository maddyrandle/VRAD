import React, { Component } from 'react';
import LandingPageGreeting from '../LandingPageGreeting/LandingPageGreeting';
import Navigation from '../Navigation/Navigation';
import './PageHeaderContainer.css';

const PageHeaderContainer = () => {
  return (
    <React.Fragment>
      <LandingPageGreeting />
    </React.Fragment>
  );
}

export default PageHeaderContainer;
