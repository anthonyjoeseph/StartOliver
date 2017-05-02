//check issues and make sure all is good!

import React, { Component } from 'react';

import Flexbox from 'flexbox-react';

class Mission extends Component {

  render() {
    return (
      <Flexbox
        justifyContent='center'
        alignItems='center'
        style={{height: '100%'}}
      >
        Mission Slide
      </Flexbox>
    );
  }
}

export default Mission;
