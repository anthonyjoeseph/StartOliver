// @flow

import React from 'react';
import Tappable from 'react-tappable';
import Flexbox from 'flexbox-react';

import castleDetailImg from './castle-background1.jpg';
import backIcon from './back-icon.png'

const CastleDetail = (props) => {
  var heightPercent = props.windowHeight + "px";
  return (
    <div
      style={{
        width:'100%',
        height: heightPercent,
        backgroundImage: "url(" + props.detailImg + ")",
        backgroundSize: "cover",
        backgroundColor:'white'
      }}
    >
      <Tappable onTap={props.onTap}>
        <img
          alt="back"
          src={backIcon}
          style={{
            position: 'relative',
            left: '27px',
            top: '27px',
            width: '100px',
            height: '100px'
          }}
        />
      </Tappable>
      <Flexbox
        style={{
          position:'absolute',
          right: '5%',
          bottom: '3%',
          color: 'white',
          fontFamily: "peachy-keen-jf",
          fontWeight: '100',
          lineHeight: '125%',
          height:'120px'
        }}
        flexDirection="column"
        justifyContent='space-around'
        alignItems='flex-end'
      >
        <Flexbox flex={1} style={{ fontSize: '35pt' }}>
          {props.lineOne}
        </Flexbox>
        <Flexbox flex={1} style={{ fontSize: '25pt' }}>
          {props.lineTwo}
        </Flexbox>
      </Flexbox>
    </div>
  );
};

export default CastleDetail;
