import React from 'react';
import './Property.css'
import { Link } from 'react-router-dom'

const Property = ({name, areaid, listingid, selectedArea}) => {
  var listingImg = `/Images/${listingid}_a.jpg`

  return (
    <section className="propertyContainer">
      <div className='property'>
        <p className="name">{name}</p>
        <img src={`${listingImg}`} className='defaultListingImage' />
        <Link to={ `/areas/${areaid}/listings/${listingid}` } className="propertyBtn" areaid={areaid} listingid={listingid}>More Details</Link>
      </div>
    </section>
  )
}

export default Property;
