import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  width: PropTypes.number.isRequired,
};

class FilterContainer extends React.Component {
  render() {
    return (
      <div style={ { width: this.props.width } }>
        <div className='filter-container' />
      </div>
    );
  }
}

FilterContainer.propTypes = propTypes;
module.exports = FilterContainer;
