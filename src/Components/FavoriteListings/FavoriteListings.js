import React from 'react';
import PropTypes from 'prop-types';
import './FavoriteListings.css';

const FavoriteListings = ({ currentState, resetState }) => {
  return (
    <h1 className="favoritesHeader">Favorites</h1>
  );
}

export default FavoriteListings;

FavoriteListings.propTypes = {
  currentState: PropTypes.object,
  resetState: PropTypes.func,
};
