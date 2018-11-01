import React from 'react';

import { updateDimensions } from '../../utils/updateDimensions';

import NavigationBar from '../NavigationBar/index.jsx';

class AppContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }

  /**
   * Adds an event listener
  */
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }


  /**
   * Removes the event listener
  */
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }

  updateDimensions() {
    const dimensions = updateDimensions(window);
    this.setState({ width: dimensions.width });
  }

  render() {
    return (
      <div className='container'>
        <NavigationBar width={ this.state.width } />
      </div>
    );
  }
}

export default AppContainer;
