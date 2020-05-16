import React from 'react';
import './Neighborhood.css'
import { Link } from 'react-router-dom'

const Neighborhood = ({nickname, description, fullName, id}) => {
  return (
    <section className="neighborhoodContainer">
      <div className='neighborhood'>
        <p className="fullName">{fullName}</p>
        <p>IMAGES GO HERE</p>
        <p className="description">{description}</p>
        <Link to={`/areas/${id}/listings`} className="neighborhoodBtn" id={id}>Checkout {nickname}</Link>
      </div>
    </section>
  )
}

export default Neighborhood;
