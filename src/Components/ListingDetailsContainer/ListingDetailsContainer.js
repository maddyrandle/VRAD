import React from 'react';
import Neighborhood from '../Neighborhood/Neighborhood';
import Property from '../Property/Property';
import css from './ListingDetailsContainer.css'

const ListingDetailsContainer = ({currentState, renderCondition, selectedArea}) => {
  if (renderCondition === 'allAreas') {
    let areaValues = Object.values(currentState.areas)
    var details = areaValues.map(areas => {
      return areas.map(area => {
        return area = <Neighborhood
        key={area.details.id}
        nickname={area.area}
        description={area.details.about}
        fullName={area.details.name}
        id={area.details.id} />
      })
    })
  } else if(renderCondition === 'selectedArea'){
    let listings = selectedArea.details.listings;
    var details = listings.map(listing => {
      return (
        <Property listing={listing} />
      )
    })


  }

  return (
    <section className='listingDetailsContainer'>
      {details}
    </section>
  );
}

export default ListingDetailsContainer;
