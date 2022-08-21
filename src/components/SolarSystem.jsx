import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

export default function SolarSystem() {
  return (
    <div className="planets" data-testid="solar-system">
      <Title className="titulo-planetas" headline="Planetas" />
      {planets.map(({ name, image }) => (
        <PlanetCard key={ name } planetName={ name } planetImage={ image } />
      ))}

    </div>
  );
}
