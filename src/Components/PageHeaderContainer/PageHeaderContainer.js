import React from 'react';
import PropTypes from 'prop-types';
import LandingPageGreeting from '../LandingPageGreeting/LandingPageGreeting';
import SelectedNeighborhoodDetails from '../SelectedNeighborhoodDetails/SelectedNeighborhoodDetails'
import FavoriteListings from '../FavoriteListings/FavoriteListings'
import Navigation from '../Navigation/Navigation';
import './PageHeaderContainer.css';

const PageHeaderContainer = ({ currentState, renderCondition, selectedArea, resetState, getData }) => {
  let topContainer;

  if (renderCondition === 'allAreas') {
    topContainer = <LandingPageGreeting currentState={currentState} />
  } else if (renderCondition === 'selectedArea') {
      topContainer = <SelectedNeighborhoodDetails selectedArea={selectedArea} />
  } else if (renderCondition === 'favorites') {
      topContainer = <FavoriteListings />
  }

  return (
    <header className="pageHeaderContainer">
      <Navigation resetState={resetState} getData={getData} currentState={currentState} />
      {topContainer}
    </header>
  );
}

export default PageHeaderContainer;

PageHeaderContainer.propTypes = {
  currentState: PropTypes.object,
  renderCondition: PropTypes.string,
  selectedArea: PropTypes.string,
  resetState: PropTypes.func,
  getData: PropTypes.func,
};
