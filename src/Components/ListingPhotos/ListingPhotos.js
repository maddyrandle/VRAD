import React from 'react';
import './ListingPhotos.css'

const ListingPhotos = ({listingPhotos}) => {
  let imagesArray = `url('public/Images/images/${listingPhotos.listings_id}_a')`
  return (
    <section className="listingPhotos">
      {imagesArray}
      <h1 className="listingImage">photos</h1>
      <h1 className="listingImage">photos</h1>
      <h1 className="listingImage">photos</h1>
      <h1 className="listingImage">photos</h1>
      <h1 className="listingImage">photos</h1>
      <h1 className="listingImage">photos</h1>
    </section>
  )
}

export default ListingPhotos;
