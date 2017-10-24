//check issues and make sure all is good!

import React, { Component } from 'react';

import Flexbox from 'flexbox-react';

const styles = {
  padded:{
    textAlign: 'center',
    paddingLeft: '235px',
    paddingRight: '235px'
  },
  bigText:{
    color: 'white',
    fontFamily: "peachy-keen-jf",
    fontWeight: '100',
    fontSize: '30pt',
    lineHeight: '125%'
  },
  smallText:{
    textAlign: 'center',
    color: 'white',
    fontFamily: "peachy-keen-jf",
    fontWeight: '100',
    fontSize: '15pt',
    lineHeight: '125%'
  }
};

class Mission extends Component {
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
          flexGrow={2}
        >
          <div id="spacer" style={{width:'60px'}} />
        </Flexbox>
        <Flexbox
          justifyContent="center"
          alignItems="center"
          flexGrow={1}
        >
          <div style={{...styles.padded, ...styles.bigText}}>
            Our mission is to help people
            learn about the topics of their
            interest while exploring the
            world to find the passions
            of their lives
          </div>
        </Flexbox>
        <Flexbox
          style={{width:"100%",}}
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="center"
          flexGrow={2}
        >
          <div id="spacer" style={{width:'60px'}} />
        </Flexbox>
      </Flexbox>
    );
  }
}

export default Mission;
