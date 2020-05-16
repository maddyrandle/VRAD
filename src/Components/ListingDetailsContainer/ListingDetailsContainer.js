import React from 'react';
import Neighborhood from '../Neighborhood/Neighborhood';
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
    console.log('This is where Property goes');
  }

  return (
    <section className='listingDetailsContainer'>
      {details}
    </section>
  );
}

export default ListingDetailsContainer;
