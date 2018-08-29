import React from 'react';
import Title from '../components/Title.js';
import CountryList from '../components/CountryList.js';

class CountryContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: []
    }
  }

  componentDidMount() {
    const url = 'https://restcountries.eu/rest/v2/all';
    console.log(url);
    console.log(this.state.countries);
    fetch(url)
      .then((res) => res.json())
      .then((countries) => this.setState({countries: countries}));
      console.log(this.state.countries);
  }

  render() {
    return (
      <div>
        <Title />
        <CountryList countries={this.state.countries}/>
      </div>
    );
  }

}

export default CountryContainer;
