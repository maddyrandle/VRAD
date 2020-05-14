import React, { Component } from 'react';
import LoginContainer from '../LoginContainer/LoginContainer';
import PageHeaderContainer from '../PageHeaderContainer/PageHeaderContainer';
import './App.css';

class App extends Component {
  constructor() {
    super();
      this.state = {
        stayType: '',
        areas: []
      }
  }
  componentDidMount = async () => {
    let availableAreaResponse = await fetch('https://vrad-api.herokuapp.com/api/v1/areas')
    let availableAreaData = await availableAreaResponse.json()

    availableAreaData.areas.map(async (area) => {
      var fullAreaResponse = await fetch(`https://vrad-api.herokuapp.com${area.details}`)
      var fullAreaDetails =  await fullAreaResponse.json()
      area.details = fullAreaDetails

    area.details.listings.map(async (listing) => {
      let listingResponse = await fetch(`https://vrad-api.herokuapp.com${listing}`)
      let fullListingData = await listingResponse.json()
      area.details.listings = fullListingData
    })
    })
    await this.setState({
     areas: availableAreaData
    })
  }

  getPurpose = (type) => {
    this.setState({ stayType: type })
  }

  render() {
    return (
      <main className="App">
        <LoginContainer getPurpose={ this.getPurpose } />
      </main>
    );
  }
}

export default App;


// <section className="landingPageWrapper">
//   <PageHeaderContainer />
// </section>
