import React from 'react';
import PropTypes from 'prop-types';
import './Neighborhood.css'
import { Link } from 'react-router-dom'

const Neighborhood = ({nickname, description, fullName, id}) => {
  var neighborhoodImg = `/Images/${nickname}.jpeg`
  return (
    <section className="neighborhoodContainer">
      <div className="nameContainer">
        <p className="fullName">{fullName}</p>
      </div>
      <div className="imageContainer">
        <img src={`${neighborhoodImg}`} className='neighborhoodImg' />
      </div>
      <div className="descriptionContainer">
        <p className="description">{description}</p>
      </div>
      <Link to={`/areas/${id}/listings`} className="neighborhoodBtn" id={id}>Checkout {nickname}</Link>
    </section>
  )
}

export default Neighborhood;

Neighborhood.propTypes = {
  nickname: PropTypes.string,
  description: PropTypes.string,
  fullName: PropTypes.string,
  id: PropTypes.number,
};
