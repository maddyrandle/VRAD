
import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import './LandingPageGreeting.css';


const LandingPageGreeting = () => {
  return (
    <header className="landingPageGreeting">
      <h1>WELCOME TO THE MILE HIGH CITY</h1>
      <h2>Welcome to Denver where 300 days of sunshine, a thriving cultural scene, diverse neighborhoods and natural beauty combine for the world's most spectacular playground.</h2>
      <h2>Please check below for a comprehensive list of all neighborhoods with available rentals</h2>
      <Navigation />
    </header>
  );
}

export default LandingPageGreeting;
