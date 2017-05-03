// @flow

import React from 'react';
import Tappable from 'react-tappable';

import castleDetailImg from './castle-background.png';
import backIcon from './back-icon.png'

const CastleDetail = (props) => (
  <div
    style={{
      width:'100%',
      height:'100%',
      backgroundImage: "url(" + castleDetailImg + ")",
      backgroundSize: "cover",
      backgroundColor:'white'
    }}
  >
    <Tappable onTap={props.onTap}>
      <img
        src={backIcon}
        style={{
          position: 'relative',
          left: '30px',
          top: '30px',
          width: '100px',
          height: '100px'
        }}
      />
    </Tappable>
  </div>
);

export default CastleDetail;
