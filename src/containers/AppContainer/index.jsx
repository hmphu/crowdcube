import React from 'react';

// import { updateDimensions } from '../../utils/updateDimensions';

import NavigationBar from '../../components/NavigationBar';
import FilterContainer from '../FilterContainer';
import InvestmentCardContainer from '../InvestmentCardContainer';
import Footer from '../../components/Footer';

class AppContainer extends React.Component {
  render() {
    return (
      <div className='container'>
        <NavigationBar />
        <FilterContainer />
        <InvestmentCardContainer />
        <Footer />
      </div>
    );
  }
}

module.exports = AppContainer;
