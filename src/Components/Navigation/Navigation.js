
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Navigation.css';


const Navigation = (props) => {

  const handleSignOut = () => {
    props.resetState();
  }

  return (
    <nav>
      <Link to={ '/' } className="signOutBtn" onClick={ handleSignOut }>Sign Out</Link>
    </nav>
  );
}

// change button css to link className

export default Navigation;
