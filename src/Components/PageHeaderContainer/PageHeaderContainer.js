import React, { Component } from 'react';
import LandingPageGreeting from '../LandingPageGreeting/LandingPageGreeting';
import Navigation from '../Navigation/Navigation';
import './PageHeaderContainer.css';


const PageHeaderContainer = ({ currentState }) => {
  return (
    <LandingPageGreeting currentState={currentState}/>
  );
}

export default PageHeaderContainer;
