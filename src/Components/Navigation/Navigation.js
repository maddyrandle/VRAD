
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Navigation.css';


const Navigation = () => {
  return (
    <nav>
      <Link to={ '/' } className="signOutBtn">Sign Out</Link>
    </nav>
  );
}

// change button css to link className

export default Navigation;
