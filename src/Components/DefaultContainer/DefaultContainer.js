import React from 'react';
import PageHeaderContainer from '../PageHeaderContainer/PageHeaderContainer'
import ListingDetailsContainer from '../ListingDetailsContainer/ListingDetailsContainer'
import './DefaultContainer.css'

const DefaultContainer = ({currentState, renderCondition, selectedArea}) => {
  let topContainer;
  let bottomContainer;

  if(renderCondition === 'allAreas') {
    topContainer = <PageHeaderContainer currentState={currentState} renderCondition={renderCondition}/>
    bottomContainer = <ListingDetailsContainer currentState={currentState} renderCondition={renderCondition}/>
  } else if (renderCondition === 'selectedArea') {
    topContainer = <PageHeaderContainer selectedArea={selectedArea} renderCondition={renderCondition}/>
    bottomContainer = <ListingDetailsContainer selectedArea={selectedArea} renderCondition={renderCondition}/>
  }

  return (
    <main className='defaultContainer'>
      {topContainer}
      {bottomContainer}
    </main>
  )
}

export default DefaultContainer;
