
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Navigation.css';


const Navigation = (props) => {
  const numFavorites = props.currentState.favorites.length;
  const handleSignOut = () => {
    props.resetState();
    props.getData();
  }

  return (
    <nav>
      <Link to={ '/' } className="signOutBtn" onClick={ handleSignOut }>Sign Out</Link>

      <Link to={ '/favorites' } className="favoritesBtn">Favorites ({numFavorites})</Link>
    </nav>
  );
}

export default Navigation;
