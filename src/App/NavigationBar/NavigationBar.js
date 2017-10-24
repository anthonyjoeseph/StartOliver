import React from 'react';
import Flexbox from 'flexbox-react';
import Tappable from 'react-tappable';

import leftArrow from './left-arrow.png';
import rightArrow from './right-arrow.png';

const styles = {
  container:{
    width:'200px'
  },
  bigText:{
    color: 'white',
    fontFamily: "peachy-keen-jf",
    fontWeight: '100',
    fontSize: '30pt',
    lineHeight: '125%'
  }
};

const NavigationBar = (props) => {

  return (
    <Flexbox
      style={{ ...props.style, ...styles.container }}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Tappable onTap={function(){
        props.prev();
      }}>
        <img
          alt="left arrow"
          src={leftArrow}
          width='30px'
        />
      </Tappable>
      <div style={styles.bigText} >
        {(props.currentSlide + 1)} / 3
      </div>
      <Tappable onTap={function(){
        props.next();
      }}>
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
