import React from 'react';
import './ListingPhotos.css'

const ListingPhotos = ({listingPhotos}) => {
  let imagesArray = [`/Images/${listingPhotos.listing_id}_a.jpg`, `/Images/${listingPhotos.listing_id}_b.jpg`, `/Images/${listingPhotos.listing_id}_c.jpg`]
  let listingImages = imagesArray.map(image => {
    return (<img src={`${image}`} className='listingImage' />)
  })
  return (
    <section className="listingPhotos">
      {listingImages}
    </section>
  )
}

export default ListingPhotos;
