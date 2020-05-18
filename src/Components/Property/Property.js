import React from 'react';
import './Property.css'
import { Link } from 'react-router-dom'

const Property = ({name, areaID, listingID, selectedArea}) => {
  var listingImg = `/Images/${listingID}_a.jpg`
  console.log(selectedArea.details.listings);
  console.log(areaID);
  console.log(listingID);
  return (
    <section className="propertyContainer">
      <div className='property'>
        <p className="name">{name}</p>
        <p>IMAGE GOES HERE</p>
        <img src={`${listingImg}`} className='listingImage' />
        <Link to={ `/areas/${areaID}/listings/${listingID}` } className="propertyBtn" areaID={areaID} listingID={listingID}>More Details</Link>
      </div>
    </section>
  )
}

export default Property;
