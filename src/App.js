import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';
import PlanetCard from './components/PlanetCard';
import Missions from './components/Missions';
import MissionCard from './components/MissionCard';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <p id="title">Sistema Solar</p>
        <Header />
        <SolarSystem />
        <Missions />
        <Title />
      </>
    );
  }
}

export default App;
