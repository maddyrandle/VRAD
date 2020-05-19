import React from 'react';
import { Link } from 'react-router-dom';
import PropertyFeatures from '../PropertyFeatures/PropertyFeatures';
import './ListingDetails.css'

const ListingDetails = ({areaid, listingid, name, address, beds, baths, costPerNight, features, addPropertyToFavorites}) => {
  const handleFarovite = () => {
    addPropertyToFavorites(areaid, listingid)

  }

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
      <button className="favoritePropertyBtn" onClick={ handleFarovite }>Favorite this Property</button>
    </section>
  )
}

export default ListingDetails;
