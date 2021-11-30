import './App.css';
import React, { Component } from 'react';




class App extends Component {
 
  goToCaliforniaScienceCenter = () => {

    window.open("https://ideum.com/portfolio/life-beginnings-exhibit-california-science");
  }


  goToPalmSpringsTramway = () => {

    window.open("https://ideum.com/portfolio/palm-springs-touch-wall")
  }


  goToSmithsonian = () => {

    window.open("https://ideum.com/portfolio/smithsonian-african-art")
  }

 
 render() {

  return(

    <div>
      <header>
        <h1>Ideum</h1>
      </header>  
      <main className="main-container" >
        <div className="column-1" >
          <button type="button" className="column-1-btn" onClick={() => this.goToCaliforniaScienceCenter()} >
            <img src="https://i.imgur.com/eiM5Bceh.png" alt="California Science Center" className="california-science-img" ></img>
          </button>
          <p>California Science Center</p>
        </div>
        <div className="column-2" >
            <button className="column-2-btn" type="button" onClick={() => this.goToPalmSpringsTramway()} >
                <img src="https://i.imgur.com/DdSaaNOh.png" alt="Palm Springs Aerial Tramway" className="palm-springs-img" ></img> 
            </button>
            <p>Palm Springs Aerial Tramway</p>
            <button className="column-2-btn" type="button" onClick={() => this.goToSmithsonian()} >
                <img src="https://i.imgur.com/wAYCOa1l.png" alt="Smithsonian National Museum of African Art" className="african-art-img" ></img>
            </button>
            <p>Smithsonian National Museum of African Art</p>
        </div> 
      </main>
    </div>
    )
   }
 }



export default App
