import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

library.add(faBars);

class NavigationBar extends React.Component {
  render() {
    return (
      <div className='navigation'>
        <div className='navigation-container'>
          <div className='navigation-left'>
            <img src='../../assets/logo.jpg' alt='Crowdcube' className='navigation-logo' />
          </div>
          <div className='navigation-right'>
            <button className='regular-button'>Investment Opportunities</button>
            <a href='/' className='navigation-header'>How to invest</a>
            <a href='/' className='navigation-header'>Raising finance</a>
            <a href='/' className='navigation-header'>Explore</a>
            <a href='/' className='navigation-header'>Login</a>
            <button className='green-button'>Join</button>
          </div>
          <div className='navigation-right-mobile'>
            <FontAwesomeIcon icon='bars' className='bar-icon' />
          </div>
        </div>
      </div>
    );
  }
}

export default NavigationBar;
