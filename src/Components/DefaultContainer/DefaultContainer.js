import React from 'react';
import PageHeaderContainer from '../PageHeaderContainer/PageHeaderContainer'
import ListingDetailsContainer from '../ListingDetailsContainer/ListingDetailsContainer'
import './DefaultContainer.css'

const DefaultContainer = ({currentState, renderCondition}) => {
  let topContainer;
  let bottomContainer;

  if(renderCondition === 'allAreas') {
    topContainer = <PageHeaderContainer currentState={currentState} />
    bottomContainer = <ListingDetailsContainer currentState={currentState}/>
  } else if (renderCondition === 'selectedArea') {
    console.log(1);
  }

  return (
    <main className='defaultContainer'>
      {topContainer}
      {bottomContainer}
    </main>
  )
}

export default DefaultContainer;
