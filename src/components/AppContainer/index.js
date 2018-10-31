import React from 'react';

import { ContainerStyles } from './ContainerStyles';
import { CommonStyles } from '../../constants/CommonStyles';
import { updateDimensions } from '../../utils/updateDimensions';


import NavigationBar from '../NavigationBar';

class AppContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  updateDimensions() {
    let dimensions = updateDimensions(window);
    this.setState({ width: dimensions.width, height: dimensions.height });
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

  render() {
    return (
      <div style={ContainerStyles.container}>
        <NavigationBar width={this.state.width} />
      </div>
    )
  }
}

export default AppContainer;