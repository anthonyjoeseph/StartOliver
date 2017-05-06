// @flos

import React, { Component } from 'react';

import {
  Fullpage,
  Slide,
  HorizontalSlider,
  Overlay
} from 'fullpage-react';

import NavigationBar from './NavigationBar/NavigationBar';
import SocialNetworkingBar from './SocialNetworkingBar/SocialNetworkingBar';
import Landing from './Slides/Landing/Landing';
import Mission from './Slides/Mission/Mission';
import Map from './Slides/Map/Map';

let fullPageOptions = {
  // for mouse/wheel events
  // represents the level of force required to generate a slide change on non-mobile, 10 is default
  scrollSensitivity: 2,

  // for touchStart/touchEnd/mobile scrolling
  // represents the level of force required to generate a slide change on mobile, 10 is default
  touchSensitivity: 2,
  scrollSpeed: 500,
  resetSlides: true,
  hideScrollBars: true
};

let horizontalSliderProps = {
  name: 'horizontalSlider1',
  scrollSpeed: 500,
  infinite: false,
  resetSlides: false,
  scrollSensitivity: 2,
  touchSensitivity: 2
};

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      slideIndex:0
    }
  }

  render() {
    //backgroundColor: "rgb(252, 295, 90)"
    return (
      <div style={{
        backgroundColor: "rgb(254, 194, 106)"
      }}>
        <Fullpage {...fullPageOptions}
          onSlideChangeEnd={function(name, state){
            this.setState({slideIndex: state.activeSlide});
          }.bind(this)}
        >
          <HorizontalSlider {...horizontalSliderProps} >
            <Slide><Landing /></Slide>
            <Slide><Mission /></Slide>
            <Slide><Map /></Slide>
          </HorizontalSlider>
          <Overlay style={{
            top: '85%',
            left: '80%'
          }}>
            <NavigationBar
              currentSlide={this.state.slideIndex}
            />
          </Overlay>
        </Fullpage>
        <Overlay style={{
          top: '10%', left: '80%'
        }}>
          <SocialNetworkingBar />
        </Overlay>
      </div>
    );
  }
}

export default App;
