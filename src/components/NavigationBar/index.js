import React from 'react';

import { NavigationStyles } from './NavigationStyles';

import './style.less';

class Navigation extends React.Component {
  render() {
    return (
      <div style={NavigationStyles.navigation}>
        <div style={{width: this.props.width * 0.75, padding: `10px ${this.props.width * 0.09}px`, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <div style={NavigationStyles.left}>
            <img src={require('../../assets/logo.jpg')} alt='Crowdcube' style={NavigationStyles.logo} />
          </div>
          <div style={NavigationStyles.right}>
            <h2>How to invest</h2>
            <button style={NavigationStyles.regularButton}>Investment Opportunities</button>
            <button style={NavigationStyles.greenButton}>Join</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Navigation;