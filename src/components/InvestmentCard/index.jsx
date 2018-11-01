import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  investment: PropTypes.objectOf(Array).isRequired,
  equity: PropTypes.string.isRequired,
  expires: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(Object).isRequired,
  updated: PropTypes.string.isRequired,
};

class InvestmentCard extends React.Component {
  render() {
    const {
      name,
      description,
      investment,
      equity,
      expires,
      images,
      updated
    } = this.props;

    return (
      <div className='card'>
        <p>{name}</p>
        <p>{description}</p>
        <p>{equity}</p>
        <p>{expires}</p>
        <p>{updated}</p>
      </div>
    );
  }
}

InvestmentCard.propTypes = propTypes;
module.exports = InvestmentCard;
