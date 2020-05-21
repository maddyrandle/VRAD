import React from 'react';
import PropTypes from 'prop-types';
import './SelectedNeighborhoodDetails.css';

const SelectedNeighborhoodDetails = ({selectedArea}) => {
  return (
    <section className="subHeaderWrapper">
      <h2 className="areaName">{selectedArea.area}</h2>
      <p className="areaDetails">{selectedArea.details.about}</p>
    </section>
  )
}

export default SelectedNeighborhoodDetails;

SelectedNeighborhoodDetails.propTypes = {
  selectedArea: PropTypes.string,
};
