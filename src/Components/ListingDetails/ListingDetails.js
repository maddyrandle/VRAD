import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropertyFeatures from '../PropertyFeatures/PropertyFeatures';
import './ListingDetails.css'

class ListingDetails extends Component {
  constructor({areaid, listingid, name, address, beds, baths, costPerNight, features, handleFarovites}) {
    super();
      this.state = {
        favorited: false,
      }
  }

  handleFarovite = () => {
    this.props.handleFarovites(this.props.areaid, this.props.listingid)
  }

  render() {
    return (
      <section className="listingDetails">
        <h2>{this.props.name}</h2>
        <p>{this.props.address.street}, CO, {this.props.address.zip}</p>
        <ul className="propertyDetails">
          <li>{this.props.beds} Beds</li>
          <li>{this.props.baths} Baths</li>
          <li>{this.props.costPerNight.toLocaleString("en-US", {style: "currency", currency: "USD"})} Per Night</li>
          <li>Features will go here</li>
        </ul>
        <button className="favoritePropertyBtn" onClick={ this.handleFarovite }>Favorite this Property</button>
      </section>
    )
  }
}


export default ListingDetails;
