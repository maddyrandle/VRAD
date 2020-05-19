import React from 'react';
import './FavoriteListingsDetails.css';

const FavoriteListingsDetails = ({ favorites, name, areaid, listingid }) => {

  if (!favorites.length) {
    return (
      <h1>You do not have any listings saved.</h1>
    )
  } else {
    return (
      <section className="propertyContainer">
        <div className='property'>
          <p className="name">{name}</p>
          <p>IMAGE GOES HERE</p>
          <button className="propertyBtn">More Details</button>
        </div>
      </section>
    )
  }
}


export default FavoriteListingsDetails;
// <Link to={ `/areas/${areaid}/listings/${listingid}` } className="propertyBtn" areaID={areaid} listingID={listingid}>More Details</Link>
