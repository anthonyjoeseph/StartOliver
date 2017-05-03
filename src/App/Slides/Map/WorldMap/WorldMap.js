// @flow
import React from 'react';
import Flexbox from 'flexbox-react';
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
    backgroundSize: '100% 100%',
    backgroundPosition: 'center',
    width: '80%',
    height: '100%'
  }
};

const WorldMap = (props) => (
  <div style={styles.worldMap}>
    <Location
      left={46}
      top={10}
      src={castle}
      onTap={() => {props.onTap('castle')}}
      index={0}
    />
    <Location
      left={85}
      top={23}
      src={korea}
      index={1}
    />
    <Location
      left={22}
      top={28}
      src={newYork}
      index={2}
    />
    <Location
      left={50}
      top={40}
      src={desert}
      index={3}
    />
    <Location
      left={13}
      top={60}
      src={amazon}
      index={4}
    />
  </div>
);

const Location = (props) => {
  var widthPercent = 8;
  var heightPercent = 15;
  var topPercent = props.top - (props.index * heightPercent);
  var inside = (
    <img
      src={props.src}
      style={{
        width:'100%',
        height:'100%'
      }}
    />
  );
  var middle = inside;
  if(props.onTap != null){
    var middle = (
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
