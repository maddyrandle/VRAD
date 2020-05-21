import React from 'react';
import PropTypes from 'prop-types';
import PageHeaderContainer from '../PageHeaderContainer/PageHeaderContainer'
import ListingDetailsContainer from '../ListingDetailsContainer/ListingDetailsContainer'

const DefaultContainer = ({currentState, renderCondition, selectedArea, resetState, listingDetails, handleFarovites, getData}) => {
  let topContainer;
  let bottomContainer;

  if(renderCondition === 'allAreas') {
    topContainer = <PageHeaderContainer
      currentState={currentState}
      renderCondition={renderCondition}
      resetState={resetState}
      getData={getData} />
    bottomContainer = <ListingDetailsContainer
      currentState={currentState}
      renderCondition={renderCondition}/>
  } else if (renderCondition === 'selectedArea') {
      topContainer = <PageHeaderContainer
        currentState={currentState}
        selectedArea={selectedArea}
        renderCondition={renderCondition}
        resetState={resetState}
        getData={getData} />
      bottomContainer = <ListingDetailsContainer
        selectedArea={selectedArea}
        renderCondition={renderCondition}/>
  } else if (renderCondition === 'listingDetails') {
      topContainer = <PageHeaderContainer
        currentState={currentState}
        selectedArea={selectedArea}
        renderCondition={renderCondition}
        resetState={resetState}
        getData={getData} />
      bottomContainer = <ListingDetailsContainer
        listingDetails={listingDetails}
        renderCondition={renderCondition}
        handleFarovites={handleFarovites}/>
  } else if (renderCondition === 'favorites') {
      topContainer = <PageHeaderContainer
        currentState={currentState}
        renderCondition={renderCondition}
        resetState={resetState}
        getData={getData} />
      bottomContainer = <ListingDetailsContainer
        currentState={currentState}
        renderCondition={renderCondition}
        handleFarovites={handleFarovites} />
  }

  return (
    <main className='defaultContainer'>
      {topContainer}
      {bottomContainer}
    </main>
  )
}

export default DefaultContainer;

DefaultContainer.propTypes = {
  currentState: PropTypes.object,
  renderCondition: PropTypes.string,
  selectedArea: PropTypes.string,
  resetState: PropTypes.func,
  listingDetails: PropTypes.object,
  handleFarovites: PropTypes.func,
  getData: PropTypes.func,
};
