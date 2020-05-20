import React from 'react';
import { Link } from 'react-router-dom';
import './FavoriteListingsDetails.css';

const FavoriteListingsDetails = ({ favorites, name, areaid, listingid, handleFarovites }) => {

  const handleFarovite = () => {
    handleFarovites(areaid, listingid)
  }

  return (
    <section className="propertyContainer">
      <div className='property'>
        <p className="name">{name}</p>
        <Link to={ `/areas/${areaid}/listings/${listingid}` } className="propertyBtn" areaID={areaid} listingID={listingid}>More Details</Link>
        <button className="favoritePropertyBtn" onClick={ handleFarovite }>Favorite/Unfavorite</button>
      </div>
    </section>
  )
}

export default FavoriteListingsDetails;
