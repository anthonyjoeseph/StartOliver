//check issues and make sure all is good!

import React, { Component } from 'react';

import Flexbox from 'flexbox-react';

class Landing extends Component {

  render() {
    return (
      <Flexbox
        flexDirection="column"
        justifyContent='space-around'
        alignItems='center'
        style={{height: '100%'}}
      >
        <Flexbox
          style={{width:"100%"}}
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <div id="spacer" style={{width:'60px'}} />
          top left
        </Flexbox>
        <Flexbox>
          Landing Slide
        </Flexbox>
        <Flexbox
          style={{width:"100%"}}
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <div id="spacer" style={{width:'60px'}} />
          bottom left
        </Flexbox>
      </Flexbox>
    );
  }
}

export default Landing;
