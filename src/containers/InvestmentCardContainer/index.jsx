import React from 'react';
// import axios from 'axios';

// import getData from '../../utils/getData;

import InvestmentCard from '../../components/InvestmentCard';
import { results } from '../../utils/data';

class InvestmentCardContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      // State for when fetching data
      // results,
      // error: false,
      // loading: true
    };
  }

  componentDidMount() {
    /*
    * Use this with an actual endpoint
    * this.fetchData();
    */
  }
  /*
  * Use this with an actual endpoint
    async fetchData() {
      this.setState({
        loading: true,
      });

      try {
        const results = await getData();
        this.setState({
          loading: false,
          results
        });
      } catch (error) {
        this.setState({
          error: true,
          loading: false
        });
      }
    }
  */

  render() {
    return (
      <div>
        {/* for use when fetching data
          * {loading &&
            <div>Loading</div>
          }
        */}
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

export default InvestmentCardContainer;
