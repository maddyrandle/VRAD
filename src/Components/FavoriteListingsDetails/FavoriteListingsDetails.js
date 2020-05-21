import React from 'react';
import { Link } from 'react-router-dom';
import './FavoriteListingsDetails.css';

const FavoriteListingsDetails = ({ favorites, name, areaid, listingid, handleFarovites }) => {
  var listingImg = `/Images/${listingid}_a.jpg`

  const handleFarovite = () => {
    handleFarovites(areaid, listingid)
  }

  return (
    <section className="propertyContainer">
      <div className='property'>
        <div className="nameContainer">
          <p className="name">{name}</p>
        </div>
        <div className="favoritedPropertyImgContainer">
          <img src={`${listingImg}`} className='favoritedPropertyImg' />
        </div>
        <Link to={ `/areas/${areaid}/listings/${listingid}` } className="propertyBtn" areaid={areaid} listingid={listingid}>More Details</Link>
        <button className="favoritePropertyBtn" onClick={ handleFarovite }>Unfavorite</button>
      </div>
    </section>
  )
}

export default FavoriteListingsDetails;
