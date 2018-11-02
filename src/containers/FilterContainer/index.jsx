import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch);

class FilterContainer extends React.Component {
  render() {
    return (
      <div className='filter-container'>
        <div className='filter-left'>
          <h2 className='filter-header'>Investment opportunities</h2>
        </div>
        <div className='filter-right'>
          <div className='search-container'>
            <input type='text' className='search-input' placeholder='Search...' />
            <FontAwesomeIcon icon='search' className='search-icon' />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = FilterContainer;
