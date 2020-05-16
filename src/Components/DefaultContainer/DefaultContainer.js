import React from 'react';
import PageHeaderContainer from '../PageHeaderContainer/PageHeaderContainer'
import ListingDetailsContainer from '../ListingDetailsContainer/ListingDetailsContainer'
import './DefaultContainer.css'

const DefaultContainer = ({currentState}) => {

  return (
    <main className='defaultContainer'>
      <PageHeaderContainer currentState={currentState} />
      <ListingDetailsContainer />
    </main>
  )
}

export default DefaultContainer;
