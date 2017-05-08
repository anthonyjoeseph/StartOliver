// @flow
import React from 'react';
import Tappable from 'react-tappable';

import worldMap from './world-map.png';
import amazon from './amazon.png';
import desert from './desert.png';
import korea from './korea.png';
import castle from './Neuschwanstein-castle.png';
import newYork from './new-york.png';

const styles = {
  worldMap:{
    backgroundImage: 'url(' + worldMap + ')',
    backgroundSize: 'auto 100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%'
  }
};

const WorldMap = (props) => (
  <div style={styles.worldMap}>
    <Location
      left={48}
      top={10}
      width={6}
      src={castle}
      onTap={() => {props.onTap('castle')}}
      index={0}
    />
    <Location
      left={73}
      top={23}
      width={6.3}
      src={korea}
      index={1}
    />
    <Location
      left={31}
      top={28}
      width={5.7}
      src={newYork}
      index={2}
    />
    <Location
      left={50}
      top={40}
      width={5.7}
      src={desert}
      index={3}
    />
    <Location
      left={23}
      top={60}
      width={6}
      src={amazon}
      index={4}
    />
  </div>
);

const Location = (props) => {
  var widthPercent = props.width;
  var heightPercent = 15;
  var topPercent = props.top - (props.index * heightPercent);
  var inside = (
    <img
      alt="clickable location"
      src={props.src}
      style={{
        width:'100%',
        height:'100%'
      }}
    />
  );
  var middle = inside;
  if(props.onTap != null){
    middle = (
        <Tappable onTap={props.onTap}>
          {inside}
        </Tappable>
    );
  }
  var outside = (
    <div
      style={{
        position:'relative',
        left:props.left.toString() + "%",
        top:topPercent.toString() + "%",
        width:widthPercent.toString() + "%",
        height:heightPercent.toString() + "%"
      }}
    >
      {middle}
    </div>
  );
  return outside;
};

export default WorldMap;
