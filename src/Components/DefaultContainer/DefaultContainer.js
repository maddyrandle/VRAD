import React, { Component } from 'react';
import PageHeaderContainer from '../PageHeaderContainer/PageHeaderContainer'
// import ListingDetailsContainer from '../ListingDetailsContainer/ListingDetailsContainer'

const DefaultContainer = ({currentState}) => {

  return (
    <main className='default-container'>
      <PageHeaderContainer currentState={currentState}/>
    </main>
  )
}

export default DefaultContainer;
