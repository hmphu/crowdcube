import React from 'react';

import { updateDimensions } from '../../utils/updateDimensions';

import NavigationBar from '../../components/NavigationBar';
import FilterContainer from '../FilterContainer';
import InvestmentCardContainer from '../InvestmentCardContainer';
import Footer from '../../components/Footer';

class AppContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }

  /**
   * Adds an event listener to the window
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
        {/* <NavigationBar width={ this.state.width } /> */}
        {/* <FilterContainer width={ this.state.width } /> */}
        <InvestmentCardContainer width={ this.state.width } />
        {/* <Footer width={ this.state.width } /> */}
      </div>
    );
  }
}

module.exports = AppContainer;
