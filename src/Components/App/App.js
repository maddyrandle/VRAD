import React, { Component } from 'react';
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

    let fullAreaData = availableAreaData.areas.map(async (area) => {
      var fullAreaResponse = await fetch(`https://vrad-api.herokuapp.com${area.details}`)
      var fullAreaData =  await fullAreaResponse.json()
    })
   }


   render() {
     return (
       <main className="App">
       </main>
     );
   }
}

export default App;
