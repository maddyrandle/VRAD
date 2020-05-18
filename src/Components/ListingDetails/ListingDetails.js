import React from 'react';
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
        <li className="propertyFeatures">{features.join(', ')}</li>
      </ul>
    </section>
  )
}


export default ListingDetails;
