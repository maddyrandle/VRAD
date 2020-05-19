import React, { Component } from 'react';
import LoginContainer from '../LoginContainer/LoginContainer';
import PageHeaderContainer from '../PageHeaderContainer/PageHeaderContainer';
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import DefaultContainer from '../DefaultContainer/DefaultContainer'
import './App.css';

class App extends Component {
  constructor() {
    super();
      this.state = {
        user: '',
        favorites: [],
        password: '',
        stayType: '',
        areas: [],
      }
  }

  componentDidMount = async () => {
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

    await this.setState({
     areas: availableAreaData
    })
  }

  getPurpose = (type) => {
    this.setState({ stayType: type })
  }

  setPassword = (password) => {
    this.setState({ password: password})
  }

  setUserName = (username) => {
    this.setState({ user: username})
  }

  resetState = () => {
    return (
      this.setState({
        user: '',
        favorites: [],
        password: '',
        stayType: '',
        areas: [],
      })
    )

  }

  addPropertyToFavorites = (areaid, listingid) => {
    let foundArea = this.state.areas.areas.find(area => area.details.id === areaid);
    let favoritedListing = foundArea.details.listings.find(listing => listing.listing_id === listingid);
    let addProperty = () => this.state.favorites.push(favoritedListing);
    !this.state.favorites.includes(favoritedListing) && addProperty();

    this.setState({
      favorites: this.state.favorites
    });
  }

  render() {
    return (
      <BrowserRouter>
        <main className="App">
          <Route
            exact path='/'render={() => <LoginContainer
            getPurpose={this.getPurpose}
            setUserName={this.setUserName}
            setPassword={this.setPassword}
            stayType={this.state.stayType}
            validateUser={this.state.user}
            validatePassword={this.state.password}/> }
          />

          <Route
            exact path="/areas" render={() => <DefaultContainer
            currentState={this.state}
            renderCondition='allAreas'
            name='Neighborhoods'
            resetState={this.resetState}
            getData={this.componentDidMount} /> }
          />

          <Route
            path='/areas/:id/listings'
            exact render={({ match }) => {
              let { id } = match.params
              const selectedArea = this.state.areas.areas.find(area => {
                return area.details.id === parseInt(id)
              })
              return <DefaultContainer
                currentState={this.state}
                selectedArea={selectedArea}
                renderCondition='selectedArea'
                resetState={this.resetState}
                getData={this.componentDidMount}
              />
            }}
          />

          <Route
            path='/areas/:areaID/listings/:listingID'
            exact render={({ match }) => {
              let selectedArea = this.state.areas.areas.find(area => {
                return parseInt(area.details.id) === parseInt(match.params.areaID)
              })
              let listingDetails = selectedArea.details.listings.find(listing => {
                return parseInt(match.params.listingID) === parseInt(listing.listing_id)
              })
              return <DefaultContainer
                currentState={this.state}
                selectedArea={selectedArea}
                listingDetails={listingDetails}
                renderCondition='listingDetails'
                resetState={this.resetState}
                getData={this.componentDidMount}
                addPropertyToFavorites={this.addPropertyToFavorites}
              />
            }}
          />

          <Route
            exact path="/favorites" render={() => <DefaultContainer
            currentState={this.state}
            renderCondition='favorites'
            getData={this.componentDidMount}
            resetState={this.resetState} /> }
          />

        </main>
      </BrowserRouter>
    );
  }
}




export default App;
