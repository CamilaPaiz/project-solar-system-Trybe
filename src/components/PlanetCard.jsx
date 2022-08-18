import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName } = this.props;
    const { planetImage } = this.props;
    return (
      <div id="card" data-testid="planet-card">
        <div id="planet-name">
          <p data-testid="planet-name">{ planetName}</p>
        </div>
        <img id="imgsize" src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
};

PlanetCard.defaultProps = {
  planetImage: '',
  planetName: '',
};
export default PlanetCard;
