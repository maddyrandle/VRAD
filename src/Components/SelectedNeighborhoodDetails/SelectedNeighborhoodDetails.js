import React from 'react';


const SelectedNeighboodDetails = ({selectedArea}) => {

  return (
    <section>
      <h2>{selectedArea.area}</h2>
      <p>{selectedArea.details.about}</p>
    </section>

  )
}


export default SelectedNeighboodDetails
