// @flow

import React, { Component } from 'react';

import MapScreen from './MapScreen';
import CastleDetail from './CastleDetail/CastleDetail'

class Map extends Component {
  constructor(props){
    super(props);

    this.state = {
      showMapScreen: true
    };

    this.onLocationTap = this.onLocationTap.bind(this);
    this.onDetailTap = this.onDetailTap.bind(this);
  }

  onLocationTap(location){
    if(location === "castle"){
      this.props.changeDetailViewStatus(true);
      this.setState({
        showMapScreen: false
      });
    }
  }

  onDetailTap(){
    this.props.changeDetailViewStatus(false);
    this.setState({
      showMapScreen: true
    });
  }

  render() {
    if(this.state.showMapScreen){
      return <MapScreen onTap={this.onLocationTap} />;
    }else{
      return <CastleDetail onTap={this.onDetailTap} windowHeight={this.props.windowHeight} />;
    }
  }
}

export default Map;
