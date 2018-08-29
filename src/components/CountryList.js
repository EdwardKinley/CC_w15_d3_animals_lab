import React from 'react';
import CountryDetail from './CountryDetail.js';

class CountryList extends React.Component {
  render() {
    const countryComponents = this.props.countries.map((country) => {
      return (<CountryDetail name={country.name} region={country.region} />)
    });
    return (
      <ul className="country-list">
        {countryComponents}
      </ul>
    );
  }
}

export default CountryList;
