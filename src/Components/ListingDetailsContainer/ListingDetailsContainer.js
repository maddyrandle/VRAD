import React from 'react';
import Neighborhood from '../Neighborhood/Neighborhood';
import Property from '../Property/Property';
import ListingPhotos from '../ListingPhotos/ListingPhotos';
import ListingDetails from '../ListingDetails/ListingDetails';
import FavoriteListingsDetails from '../FavoriteListingsDetails/FavoriteListingsDetails';
import css from './ListingDetailsContainer.css'

const ListingDetailsContainer = ({currentState, renderCondition, selectedArea, listingDetails, addPropertyToFavorites}) => {
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
  } else if (renderCondition === 'selectedArea') {
      let listings = selectedArea.details.listings;
      var details = listings.map(listing => {
        return (
          <Property
          name={listing.name}
          areaID={listing.area_id}
          listingID={listing.listing_id}/>
        )
      })
  } else if (renderCondition === 'listingDetails') {
    var details = listingDetails;
    return (
      <section className="listingDetailsContainer">
        <section className="allListingDetails">
          <ListingPhotos />
          <ListingDetails
            areaid={details.area_id}
            listingid={details.listing_id}
            name={details.name}
            address={details.address}
            beds={details.details.beds}
            baths={details.details.baths}
            costPerNight={details.details.cost_per_night}
            features={details.details.features}
            addPropertyToFavorites={addPropertyToFavorites}/>
        </section>
      </section>
    )
  } else if (renderCondition === 'favorites') {
    var details = currentState.favorites;
    return (
      <section className="listingDetailsContainer">
        <section className="allFavoriteListings">
          <FavoriteListingsDetails favorites={details}/>
        </section>
      </section>
    )
  }

  return (
    <section className='listingDetailsContainer'>
      {details}
    </section>
  );
}

export default ListingDetailsContainer;
