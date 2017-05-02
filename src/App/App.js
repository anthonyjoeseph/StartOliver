//check issues and make sure all is good!

import React, { Component } from 'react';
import Tappable from 'react-tappable';

import {
  Fullpage,
  Slide,
  HorizontalSlider,
  Overlay,
  changeHorizontalSlide
} from 'fullpage-react';

import Landing from './Slides/Landing';
import Mission from './Slides/Mission';
import Map from './Slides/Map';

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

let horizontalNavStyle = {
  position: 'relative',
  top: '80%',
  left: '80%'
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

  render() {
    let prevHorizontalSlide = changeHorizontalSlide.bind(null, 'horizontalSlider1', 'PREV');
    let nextHorizontalSlide = changeHorizontalSlide.bind(null, 'horizontalSlider1', 'NEXT');

    let horizontalNav = (
      <Overlay style={{top: '80%'}}>
        <div style={horizontalNavStyle}>
          <Tappable
            onTap={prevHorizontalSlide}>
            <button>PREV</button>
          </Tappable>
          <Tappable
            onTap={nextHorizontalSlide}>
            <button>Next</button>
          </Tappable>
        </div>
      </Overlay>
    );

    let socialNetworkingNav = (
      <Overlay style={{top: '10%', left: '80%'}}>
        <div>
          Insta, FB, Twitter
        </div>
      </Overlay>
    );

    return (
      <div style={{
        backgroundColor: "rgb(254, 194, 106)"
      }}>
        {socialNetworkingNav}
        <Fullpage {...fullPageOptions}>
          <HorizontalSlider {...horizontalSliderProps}>
            <Slide><Landing /></Slide>
            <Slide><Mission /></Slide>
            <Slide><Map /></Slide>
          </HorizontalSlider>
          {horizontalNav}
        </Fullpage>
      </div>
    );
  }
}

export default App;
