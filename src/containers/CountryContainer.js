import React from 'react';
import Title from '../components/Title.js';
import CountryList from '../components/CountryList.js';
import RegionSelector from '../components/RegionSelector.js';

class CountryContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: [],
      selectedCountries: []
    }
  }

  componentDidMount() {
    const url = 'https://restcountries.eu/rest/v2/all';
    fetch(url)
      .then((res) => res.json())
      .then((countries) => {
        this.setState({countries: countries})
        this.setState({selectedCountries: countries})
      });
  }

  getRegionsOfCountries(countries) {
    const regions = countries.map((country) => country.region);
    return Array.from(new Set(regions));
  }

  showCountriesOfRegion(region) {
    console.log('hello regions');
  }

  render() {
    return (
      <div>
        <Title />
        <RegionSelector regions={this.getRegionsOfCountries(this.state.countries)} />
        <CountryList countries={this.state.selectedCountries} />
      </div>
    );
  }

}

export default CountryContainer;
