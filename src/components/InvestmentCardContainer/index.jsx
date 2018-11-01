import React from 'react';

import { ContainerStyles } from './ContainerStyles';

class InvestmentCardContainer extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div style={ContainerStyles.container}>
        <NavigationBar width={this.state.width} />
      </div>
    )
  }
}

export default InvestmentCardContainer;