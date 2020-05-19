
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Navigation.css';


const Navigation = (props) => {

  const handleSignOut = () => {
    props.resetState();
    props.getData();
  }

  const handleFavorites = () => {
    console.log('hereoooo')
  }

  return (
    <nav>
      <Link to={ '/' } className="signOutBtn" onClick={ handleSignOut }>Sign Out</Link>
      <Link to={ '/favorites' } className="favoritesBtn" onClick={ handleFavorites }>Favorites</Link>
    </nav>
  );
}

export default Navigation;
