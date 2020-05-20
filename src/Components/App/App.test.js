import React from 'react';
import { render, waitfor, fireEvent } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';
import { getListings } from '../../apiRequest'
jest.mock('../../apiRequest')
describe(App, () => {
  const mockedData =
    {area: 'RiNo',
    details: {
      id:590,
      name:'River North',
      location:'North of Downtown Denver',
      about: 'Rino is Great',
      listings:{
        name: 'Hip RiNo Party Spot',
        address: {street: '2250 lawrence drive', zip:'49494'},
        area: 'rino',
        area_id: 590,
        details:{baths: 2.5, beds: 3, cost_per_night:420,
        features:['hot tub', 'esspresso machine'],
        listing_id: 3
      }
    }
  }
}
  it('renders without crashing', () => {
   const app = render(<App />)
  });

  it('should load the app with the correct data', () => {
    const app = render(<App />)
    getListings.mockResolvedValueOnce(mockedData)
  });

})
