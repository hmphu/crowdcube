import React from 'react';

class NavigationBar extends React.Component {
  render() {
    return (
      <div className='navigation'>
        <div className='navigationContainer' style={ {width: this.props.width * 0.75, padding: `10px ${this.props.width * 0.09}px`} }>
          <div className='left'>
            <img src='../../assets/logo.jpg' alt='Crowdcube' className='logo' />
          </div>
          <div className='right'>
            <h2 className='header'>How to invest</h2>
            <button className='regularButton'>Investment Opportunities</button>
            <button className='greenButton'>Join</button>
          </div>
        </div>
      </div>
    );
  }
}

export default NavigationBar;