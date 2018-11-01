import React from 'react';
// import axios from 'axios';
import PropTypes from 'prop-types';

import InvestmentCard from '../../components/InvestmentCard';
// import FilterContainer from '../FilterContainer';

import { results } from '../../utils/data';

const propTypes = {
  width: PropTypes.number.isRequired,
};

class InvestmentCardContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      // results,
      // error: false,
      // loading: true
    };
  }

  componentDidMount() {
    /*
    * Use this with an actual endpoint
    * this.fetchData('endpoint');
    */
  }
  /*
  * Use this with an actual endpoint
  fetchData(url) {
    axios.get(url)
      .then(result => this.setState({ results: result.data, loading: false }))
      .catch(error => this.setState({ error, loading: false }));
  }
  */
  render() {
    return (
      <div style={ { width: this.props.width } }>
        {/* {loading &&
          <div>Loading</div>
        } */}
        {results && results.length &&
          <div className='card-container'>
            {results.map(result =>
              (<InvestmentCard
                key={ result.id }
                name={ result.name }
                description={ result.description }
                investment={ result.investment }
                equity={ result.equity }
                expires={ result.expires_at }
                images={ result.images }
                updated={ result.updated_at }
              />))
            }
          </div>
        }
      </div>
    );
  }
}

InvestmentCardContainer.propTypes = propTypes;
module.exports = InvestmentCardContainer;
