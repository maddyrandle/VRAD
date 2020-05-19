import React from 'react';
import LandingPageGreeting from '../LandingPageGreeting/LandingPageGreeting';
import Navigation from '../Navigation/Navigation';
import SelectedNeighboodDetails from '../SelectedNeighborhoodDetails/SelectedNeighborhoodDetails'
import FavoriteListings from '../FavoriteListings/FavoriteListings'
import './PageHeaderContainer.css';

const PageHeaderContainer = ({ currentState, renderCondition, selectedArea, resetState, getData }) => {

  let topContainer;
  if (renderCondition === 'allAreas') {
    topContainer = <LandingPageGreeting currentState={currentState} />
  } else if (renderCondition === 'selectedArea' || renderCondition === 'listingDetails') {
    topContainer = <SelectedNeighboodDetails selectedArea={selectedArea} />
  } else if (renderCondition === 'favorites') {
    topContainer = <FavoriteListings />
  }

  return (
    <React.Fragment>
      {topContainer}
      <Navigation resetState={resetState} getData={getData} currentState={currentState} />
    </React.Fragment>
  );
}


export default PageHeaderContainer;
