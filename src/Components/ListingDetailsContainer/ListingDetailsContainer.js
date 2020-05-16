import React from 'react';
import Neighborhood from '../Neighborhood/Neighborhood';
import css from './ListingDetailsContainer.css'

const ListingDetailsContainer = ({currentState}) => {
  let areaValues = Object.values(currentState.areas)
  let neighborhoods = areaValues.map(areas => {
      return areas.map(area => {
      return area = <Neighborhood
        key={area.details.id}
        nickname={area.area}
        description={area.details.about}
        fullName={area.details.name}
        id={area.details.id} />
      })
    })

  return (
    <section className='listingDetailsContainer'>
      {neighborhoods}
    </section>
  );
}

export default ListingDetailsContainer;
