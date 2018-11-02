import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  progress: PropTypes.number.isRequired,
};

const ProgressBar = ({ progress }) => (
  <div className='bar-container'>
    <div className='bar'>
      <div className={ `progress ${progress < 50 ? 'orange' : 'green'}` } style={ { width: `${progress > 100 ? 100 : progress}%` } } />
    </div>
    <span className='progress-text'>{`${progress}%`}</span>
  </div>
);

ProgressBar.propTypes = propTypes;
export default ProgressBar;
