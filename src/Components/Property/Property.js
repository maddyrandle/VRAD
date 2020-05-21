import React from 'react';
import './Property.css';
import { Link } from 'react-router-dom';

const Property = ({name, areaid, listingid, selectedArea}) => {
  var listingImg = `/Images/${listingid}_a.jpg`

  return (
    <section className="propertyContainer">
      <div className="propertyNameContainer">
        <p className="propertyName">{name}</p>
      </div>
      <div className="propertyImageContainer">
        <img src={`${listingImg}`} className='defaultListingImage' />
      </div>
      <Link to={ `/areas/${areaid}/listings/${listingid}` } className="moreDetailsBtn" areaid={areaid} listingid={listingid}> More Details </Link>
    </section>
  )
}

export default Property;
