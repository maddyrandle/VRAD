import React, { Component } from 'react';
import LoginContainer from '../LoginContainer/LoginContainer';
import PageHeaderContainer from '../PageHeaderContainer/PageHeaderContainer';
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import DefaultContainer from '../DefaultContainer/DefaultContainer'
import './App.css';

import { getListings} from '../../apiRequest'

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
    await this.setState({
     areas: await getListings()
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
      <App />
    )
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
            resetState={this.resetState}/> }
          />

          <Route
            path='/areas/:id/listings'
            exact render={({ match }) => {
              let { id } = match.params
              const selectedArea = this.state.areas.areas.find(area => {
                return area.details.id === parseInt(id)
              })
              return <DefaultContainer
                selectedArea={selectedArea}
                renderCondition='selectedArea'
                resetState={this.resetState}
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
                selectedArea={selectedArea}
                listingDetails={listingDetails}
                renderCondition='listingDetails'
                resetState={this.resetState}
              />
            }}
          />

        </main>
      </BrowserRouter>
    );
  }
}




export default App;
