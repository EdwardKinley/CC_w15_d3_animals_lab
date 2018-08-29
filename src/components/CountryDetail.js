import React from 'react';

const CountryDetail = function (props) {
  return (
    <li className="country-detail">
      <h4>{props.name}</h4>
      <p>{props.region}</p>
    </li>
  );
}

export default CountryDetail;
