import React from 'react';
import LandingPageGreeting from '../LandingPageGreeting/LandingPageGreeting';
import Navigation from '../Navigation/Navigation';
import SelectedNeighboodDetails from '../SelectedNeighborhoodDetails/SelectedNeighborhoodDetails'
import './PageHeaderContainer.css';

const PageHeaderContainer = ({ currentState, renderCondition, selectedArea, resetState }) => {

  let topContainer;
  if (renderCondition === 'allAreas') {
    topContainer = <LandingPageGreeting currentState={currentState}/>
  } else if (renderCondition === 'selectedArea' || renderCondition === 'listingDetails') {
    topContainer = <SelectedNeighboodDetails selectedArea={selectedArea}/>
  }

  return (
    <React.Fragment>
      {topContainer}
      <Navigation resetState={resetState}/>
    </React.Fragment>
  );
}


export default PageHeaderContainer;
