import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  progress: PropTypes.number.isRequired,
};

const ProgressBar = ({ progress }) => (
  <div className='bar'>
    <div className='progress' style={ { width: `${progress > 100 ? 100 : progress}%` } } />
    {progress > 100 &&
      <div>Reached goal!</div>
    }
  </div>
);

ProgressBar.propTypes = propTypes;
export default ProgressBar;
