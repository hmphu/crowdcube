import React from 'react';

import NavigationBar from '../../components/NavigationBar';
import FilterContainer from '../FilterContainer';
import InvestmentCardContainer from '../InvestmentCardContainer';

class AppContainer extends React.Component {
  render() {
    return (
      <div className='app-container'>
        <NavigationBar />
        <FilterContainer />
        <InvestmentCardContainer />
      </div>
    );
  }
}

export default AppContainer;
