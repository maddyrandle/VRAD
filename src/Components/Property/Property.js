import React from 'react';
import './Property.css'
import { Link } from 'react-router-dom'

const Property = (props) => {
  console.log('props: ', props.listing);
  return (
    <section className="propertyContainer">
      <div className='property'>
        <p className="name">{props.listing.name}</p>
        <p>IMAGE GOES HERE</p>
        <button>More Details</button>
      </div>
    </section>
  )
}
// <Link to={`/areas/${id}/listings`} className="propertyBtn" id={id}>More Details</Link>

export default Property;
