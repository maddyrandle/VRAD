export { getListings };

const getListings = async () => {
  let listings;
  let availableAreaResponse = await fetch('https://vrad-api.herokuapp.com/api/v1/areas')
  let availableAreaData = await availableAreaResponse.json()

  availableAreaData.areas.map(async (area) => {
    var fullAreaResponse = await fetch(`https://vrad-api.herokuapp.com${area.details}`)
    var fullAreaDetails =  await fullAreaResponse.json();
    area.details = fullAreaDetails

    Object.keys(area.details).forEach(detailsProperty => {
      if (detailsProperty === 'listings') {
        area.details[detailsProperty].map(async (listing, index) => {
          let listingResponse = await fetch(`https://vrad-api.herokuapp.com${listing}`)
          let fullListingData = await listingResponse.json()
          area.details[detailsProperty].splice(index, 1, fullListingData)
        })
      }
    })
  })
  return availableAreaData;
}
