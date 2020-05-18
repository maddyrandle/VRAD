import React from 'react';
import './Property.css'
import { Link } from 'react-router-dom'

const Property = ({name, areaID, listingID}) => {
  return (
    <section className="propertyContainer">
      <div className='property'>
        <p className="name">{name}</p>
        <p>IMAGE GOES HERE</p>
        <Link to={ `/areas/${areaID}/listings/${listingID}` } className="propertyBtn" areaID={areaID} listingID={listingID}>More Details</Link>
      </div>
    </section>
  )
}

export default Property;
