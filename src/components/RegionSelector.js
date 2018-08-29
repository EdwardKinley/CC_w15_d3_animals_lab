import React from 'react';
import RegionDetail from './RegionDetail.js';

class RegionSelector extends React.Component {
  render() {
    const regionComponents = this.props.regions.map((region) => {
      return (<RegionDetail region={region} />)
    });
    return (
      <div>
        {regionComponents}
      </div>
    )
  }
}

export default RegionSelector;
