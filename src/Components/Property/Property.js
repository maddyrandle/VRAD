import React from 'react';
import './Property.css';
import { Link } from 'react-router-dom';

const Property = ({name, areaID, listingID, selectedArea}) => {
  var listingImg = `/Images/${listingID}_a.jpg`

  return (
    <section className="propertyContainer">
      <div className="propertyNameContainer">
        <p className="propertyName">{name}</p>
      </div>
      <div className="propertyImageContainer">
        <img src={`${listingImg}`} className='defaultListingImage' />
      </div>
      <Link to={ `/areas/${areaID}/listings/${listingID}` } className="moreDetailsBtn" areaID={areaID} listingID={listingID}> More Details </Link>
    </section>
  )
}

export default Property;
