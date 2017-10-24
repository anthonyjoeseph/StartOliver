// @flow

import React, { Component } from 'react';

import MapScreen from './MapScreen';
import MapDetail from './MapDetail/MapDetail'

class Map extends Component {
  constructor(props){
    super(props);

    this.state = {
      detailImg: null,
      lineOne: "",
      lineTwo: "",
      showMapScreen: true
    };
  }

  render() {
    return (
      <MapScreen onTap={this.props.setDetailViewLocation} />
    );
  }
}

export default Map;
