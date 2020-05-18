import React from 'react';
import './ListingPhotos.css'

const ListingPhotos = ({selectedArea}) => {
  return (
    <section className="listingPhotos">
      {console.log(selectedArea)}
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
