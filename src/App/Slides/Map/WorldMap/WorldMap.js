// @flow
import React from 'react';
import Tappable from 'react-tappable';

import worldMap from './world-map.png';
import amazon from './amazon.png';
import desert from './desert.png';
import korea from './korea.png';
import castle from './Neuschwanstein-castle.png';
import newYork from './new-york.png';

const TOP_BAR_HEIGHT = 150;
const BOTTOM_SPACE = 100;
const MAP_ASPECT_RATIO = 1.987

const WorldMap = (props) => {
  let heightMinusTopBar = props.windowHeight - TOP_BAR_HEIGHT - BOTTOM_SPACE;
  return (
    <div style={{
      backgroundImage: 'url(' + worldMap + ')',
      backgroundSize: 'auto 100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      position: 'absolute',
      top: '150px',
      width: '100%',
      height: heightMinusTopBar + 'px'
    }}>
      <Location
        windowWidth={props.windowWidth}
        windowHeight={props.windowHeight}
        left={4}
        top={66}
        width={10}
        aspectRatio={0.85}
        src={castle}
        onTap={() => {props.onTap('castle')}}
        index={0}
      />
      <Location
        windowWidth={props.windowWidth}
        windowHeight={props.windowHeight}
        left={80}
        top={40}
        width={11}
        aspectRatio={0.8}
        src={korea}
        onTap={() => {props.onTap('korea')}}
        index={1}
      />
      <Location
        windowWidth={props.windowWidth}
        windowHeight={props.windowHeight}
        left={-43}
        top={33}
        width={9}
        aspectRatio={0.9}
        src={newYork}
        onTap={() => {props.onTap('newYork')}}
        index={2}
      />
      <Location
        windowWidth={props.windowWidth}
        windowHeight={props.windowHeight}
        left={8}
        top={0}
        width={9}
        aspectRatio={0.9}
        src={desert}
        onTap={() => {props.onTap('desert')}}
        index={3}
      />
      <Location
        windowWidth={props.windowWidth}
        windowHeight={props.windowHeight}
        left={-65}
        top={-40}
        width={10}
        aspectRatio={0.9}
        src={amazon}
        onTap={() => {props.onTap('amazon')}}
        index={4}
      />
    </div>
  );
}

const Location = (props) => {
  let picHeight = props.windowHeight - TOP_BAR_HEIGHT - BOTTOM_SPACE;
  let picWidth = picHeight * MAP_ASPECT_RATIO;
  let widthPx = props.width * 0.01 * picWidth;
  let heightPx =  widthPx * props.aspectRatio;
  let halfLeft = (props.windowWidth / 2) - (widthPx / 2)
  let halfTop = (picHeight / 2) - (heightPx / 2)

  let leftPx = (props.left * 0.005 * picWidth) + halfLeft;
  let topPx = (props.top * -0.005 * picHeight) + halfTop;

  if(props.top !== 0){
    let breakP = 3;
  }

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
        position:'absolute',
        left: leftPx + "px",
        top: topPx + "px",
        width: widthPx + "px",
        height: heightPx + "px"
      }}
    >
      {middle}
    </div>
  );
  return outside;
};

export default WorldMap;
