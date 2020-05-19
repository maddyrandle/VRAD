import React from 'react';
import './FavoriteListingsDetails.css';

const FavoriteListingsDetails = ({ favorites }) => {

  if (!favorites.length) {
    return (
      <h1>You do not have any listings saved.</h1>
    )
  } else {
    return (
      <h1>Render those Maddy!</h1>
    )
  }
}


export default FavoriteListingsDetails;
