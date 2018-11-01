import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  width: PropTypes.number.isRequired,
};

class Footer extends React.Component {
  render() {
    return (
      <div style={ { width: this.props.width } }>
        <div className='footer' />
      </div>
    );
  }
}

Footer.propTypes = propTypes;
module.exports = Footer;
