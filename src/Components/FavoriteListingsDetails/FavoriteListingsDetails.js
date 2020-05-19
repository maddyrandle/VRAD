import React from 'react';
import './FavoriteListingsDetails.css';

const FavoriteListingsDetails = ({ favorites }) => {

  if (!favorites.length) {
    return (
      <h1>You do not have any listings saved.</h1>
    )
  } else {
    return (
      <h1>hi</h1>
    )
  }
}


export default FavoriteListingsDetails;
