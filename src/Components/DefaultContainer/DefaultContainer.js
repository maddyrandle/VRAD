import React from 'react';
import PageHeaderContainer from '../PageHeaderContainer/PageHeaderContainer'
import ListingDetailsContainer from '../ListingDetailsContainer/ListingDetailsContainer'
import './DefaultContainer.css'

const DefaultContainer = () => {

  return (
    <main className='defaultContainer'>
      <PageHeaderContainer />
      <ListingDetailsContainer />
    </main>
  )
}

export default DefaultContainer;
