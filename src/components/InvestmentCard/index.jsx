import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ProgressBar from '../ProgressBar';

const propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  investment: PropTypes.objectOf(Array).isRequired,
  equity: PropTypes.string.isRequired,
  expires: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(Object).isRequired,
  updated: PropTypes.string.isRequired,
};

const CoverImage = styled.div`
  &:before {
    background-image: url(${images => images[1]})
  }
`;

class InvestmentCard extends React.Component {
  render() {
    const {
      name,
      description,
      investment,
      equity,
      expires,
      images,
      updated,
    } = this.props;
    console.log(images[1].src);
    return (
      <div className='card'>
        <CoverImage images>
          <div className='card-info'>
            <p>{name}</p>
          </div>
        </CoverImage>
        <ProgressBar progress={ investment.percentage } />
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
