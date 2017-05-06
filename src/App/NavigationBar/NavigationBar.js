import React from 'react';
import Flexbox from 'flexbox-react';
import Tappable from 'react-tappable';
import { changeHorizontalSlide } from 'fullpage-react';

import leftArrow from './left-arrow.png';
import rightArrow from './right-arrow.png';

const styles = {
  bigText:{
    color: 'white',
    fontFamily: "peachy-keen-jf",
    fontWeight: '100',
    fontSize: '30pt',
    lineHeight: '125%'
  }
};

const NavigationBar = (props) => {

  let horizontalNavStyle = {
    width: '200px'
  };

  let prevHorizontalSlide = changeHorizontalSlide.bind(null, 'horizontalSlider1', 'PREV');
  let nextHorizontalSlide = changeHorizontalSlide.bind(null, 'horizontalSlider1', 'NEXT');

  return (
    <Flexbox
      style={horizontalNavStyle}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Tappable onTap={prevHorizontalSlide}>
        <img
          alt="left arrow"
          src={leftArrow}
          width='30px'
        />
      </Tappable>
      <div style={styles.bigText} >
        {(props.currentSlide + 1)} / 3
      </div>
      <Tappable onTap={nextHorizontalSlide}>
        <img
          alt="right arrow"
          src={rightArrow}
          width='30px'
        />
      </Tappable>
    </Flexbox>
  );
};

export default NavigationBar;
