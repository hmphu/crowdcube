import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

import ProgressBar from '../ProgressBar';

const propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  investment: PropTypes.objectOf(Array).isRequired,
  equity: PropTypes.string.isRequired,
  expires: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(Object).isRequired,
};

class InvestmentCard extends React.Component {
  render() {
    const {
      name, description, investment, equity, expires, images,
    } = this.props;
    // May need to do this manually for IE
    const formatter = new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
    });
    const coverImg = images[1].type === 'coverImage' ? images[1].src : images[0].src;
    const logoImg = images[0].type === 'logo' ? images[0].src : images[1].src;
    // The data is all in the past, so going to use the difff + 365
    const expireDate = Moment(expires).add(365, 'days');
    const expiry = `${Moment().diff(expireDate, 'days') * -1} days left`;
    const target = formatter.format(parseInt(investment.target, 10));
    const raised = formatter.format(parseInt(investment.current, 10));
    return (
      <div className='card'>
        <div className='cover-image'>
          <div style={ {
            content: '',
            width: '100%',
            height: '100%',
            position: 'absolute',
            overflow: 'visible',
            top: 0,
            left: 0,
            zIndex: -1,
            transform: 'skewY(-2.2deg)',
            WebkitTransformOrigin: '0 0',
            transformOrigin: '0 0',
            backgroundImage: `linear-gradient(351deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.0) 45%), url(${coverImg})`,
            backgroundSize: 'cover',
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
          } }
          />
        </div>
        <div className='floating'>
          <img alt='logo' src={ logoImg } className='logo-circle' />
          <div className='description-right'>
            <p className='description-expires'>{expiry}</p>
            <h3 className='title'>{name}</h3>
          </div>
        </div>
        <div className='description-container'>
          <p className='description-text'>{description}</p>
          <ProgressBar progress={ investment.percentage } />
        </div>
        <div className='description-investment'>
          <div className='investment-section'>
            <h4>Raised</h4>
            <h3>{raised}</h3>
          </div>
          <div className='border' />
          <div className='investment-section'>
            <h4>Target</h4>
            <h3>{target}</h3>
          </div>
          <div className='border' />
          <div className='investment-section'>
            <h4>Equity</h4>
            <h3>{equity}</h3>
          </div>
        </div>
      </div>
    );
  }
}

InvestmentCard.propTypes = propTypes;
export default InvestmentCard;
