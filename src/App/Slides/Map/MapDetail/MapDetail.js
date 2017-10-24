// @flow

import React from 'react';
import Tappable from 'react-tappable';
import Flexbox from 'flexbox-react';

import backIcon from './back-icon.png'

const ASPECT_RATIO = 1.3094

const MapDetail = (props) => {
  let totalHeightPercent = props.windowHeight + "px";
  let heightPx = props.windowHeight * 0.9;
  let widthPx = heightPx * ASPECT_RATIO;
  let topPx = (props.windowHeight / 2) - (heightPx / 2);
  let leftPx = (props.windowWidth / 2) - (widthPx / 2);
  let heightPxString = heightPx + "px";
  let widthPxString = widthPx + "px";
  let topPxString = topPx + "px";
  let leftPxString = leftPx + "px";
  return (
    <div
      style={{
        position: 'absolute',
        zIndex: 2,
        width:'100%',
        left: '0px',
        top: '0px',
        height: totalHeightPercent
      }}
      onClick={props.onTap}
    >
      <div
        onClick={() => {}}
        style={{
          position: 'absolute',
          left: leftPxString,
          top: topPxString,
          width: widthPxString,
          height: heightPxString,
          backgroundImage: "url(" + props.detailImg + ")",
          backgroundSize: "cover"
        }}
      />
    </div>
  );
};

export default MapDetail;
