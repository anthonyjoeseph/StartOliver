// @flow

import React, { Component } from 'react';

import castleDetailImg from './DetailImages/castle.jpg';
import amazonDetailImg from './DetailImages/amazon.jpg';
import desertDetailImg from './DetailImages/desert.jpg';
import koreaDetailImg from './DetailImages/korea.jpg';
import newYorkDetailImg from './DetailImages/newYork.jpg';
import MapScreen from './MapScreen';
import CastleDetail from './CastleDetail/CastleDetail'

class Map extends Component {
  constructor(props){
    super(props);

    this.state = {
      detailImg: null,
      lineOne: "",
      lineTwo: "",
      showMapScreen: true
    };

    this.onLocationTap = this.onLocationTap.bind(this);
    this.onDetailTap = this.onDetailTap.bind(this);
  }

  onLocationTap(location){
    if(location === "castle"){
      this.props.changeDetailViewStatus(true);
      this.setState({
        detailImg: castleDetailImg,
        lineOne: "Neuschwanstein Castle, Schwangau",
        lineTwo: "",
        showMapScreen: false
      });
    }else if(location === "korea"){
      this.props.changeDetailViewStatus(true);
      this.setState({
        detailImg: koreaDetailImg,
        lineOne: "Gwanghwamun, Seoul",
        lineTwo: "",
        showMapScreen: false
      });
    }else if(location === "newYork"){
      this.props.changeDetailViewStatus(true);
      this.setState({
        detailImg: newYorkDetailImg,
        lineOne: "Soho, New York",
        lineTwo: "",
        showMapScreen: false
      });
    }else if(location === "desert"){
      this.props.changeDetailViewStatus(true);
      this.setState({
        detailImg: desertDetailImg,
        lineOne: "Sahara, Africa",
        lineTwo: "",
        showMapScreen: false
      });
    }else if(location === "amazon"){
      this.props.changeDetailViewStatus(true);
      this.setState({
        detailImg: amazonDetailImg,
        lineOne: "Amazon, Brazil",
        lineTwo: "",
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
      return <CastleDetail
        onTap={this.onDetailTap}
        detailImg={this.state.detailImg}
        lineOne={this.state.lineOne}
        lineTwo={this.state.lineTwo}
        windowHeight={this.props.windowHeight}
      />;
    }
  }
}

export default Map;
