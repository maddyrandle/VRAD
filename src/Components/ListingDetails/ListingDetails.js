import React from 'react';
import PropertyFeatures from '../PropertyFeatures/PropertyFeatures';
import './ListingDetails.css'


const ListingDetails = ({name, address, beds, baths, costPerNight, features}) => {
  return (
    <section className="listingDetails">
      <h2>{name}</h2>
      <p>{address.street}, CO, {address.zip}</p>
      <ul className="propertyDetails">
        <li>{beds} Beds</li>
        <li>{baths} Baths</li>
        <li>{costPerNight.toLocaleString("en-US", {style: "currency", currency: "USD"})} Per Night</li>
        <li>Features will go here</li>
      </ul>
    </section>
  )
}
// <p>Features: { <PropertyFeatures features={features}/> }</p>

export default ListingDetails;
