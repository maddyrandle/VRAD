import React from 'react';
import PageHeaderContainer from '../PageHeaderContainer/PageHeaderContainer'
<<<<<<< HEAD
// import ListingDetailsContainer from '../ListingDetailsContainer/ListingDetailsContainer'
=======
import ListingDetailsContainer from '../ListingDetailsContainer/ListingDetailsContainer'
import './DefaultContainer.css'
>>>>>>> master

const DefaultContainer = ({currentState}) => {

  return (
<<<<<<< HEAD
    <main className='default-container'>
      <PageHeaderContainer currentState={currentState}/>
=======
    <main className='defaultContainer'>
      <PageHeaderContainer />
      <ListingDetailsContainer />
>>>>>>> master
    </main>
  )
}

export default DefaultContainer;
