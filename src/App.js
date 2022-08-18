import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';
import PlanetCard from './components/PlanetCard';
import Missions from './components/Missions';

class App extends React.Component {
  render() {
    return (
      <>
        <p>Sistema Solar</p>
        <Header />
        <SolarSystem />
        <Missions />
        <Title />
        <PlanetCard />
      </>
    );
  }
}

export default App;
