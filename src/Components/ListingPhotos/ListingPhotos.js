import React from 'react';
import PropTypes from 'prop-types';
import './ListingPhotos.css'

const ListingPhotos = ({listingDetails}) => {
  let imagesArray = [
    `/Images/${listingDetails.listing_id}_a.jpg`,
    `/Images/${listingDetails.listing_id}_b.jpg`,
    `/Images/${listingDetails.listing_id}_c.jpg`
  ]

  let listingImages = imagesArray.map(image => {
    return (<img src={`${image}`} key={image} className='listingImage' />)
  })

  return (
    <section className="listingPhotos">
      {listingImages}
    </section>
  )
}

export default ListingPhotos;

ListingPhotos.propTypes = {
  listingDetails: PropTypes.object,
};
