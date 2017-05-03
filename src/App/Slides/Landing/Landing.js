//check issues and make sure all is good!

import React, { Component } from 'react';

import Flexbox from 'flexbox-react';

import kickstarterLogo from './kickstarter-logo.png';
import middlePicture from './middle-picture.png';

const styles = {
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
          flexGrow={2}
        >
          <div id="spacer" style={{width:'60px'}} />
          <Flexbox
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <div style={styles.bigText}>
              Oliver
            </div>
            <div style={styles.smallText}>
              Start your journey
            </div>
          </Flexbox>
        </Flexbox>
        <Flexbox
          flexGrow={1}
          justifyContent="flex-end"
          alignItems="center"
        >
          <img
            src={middlePicture}
            alt="desktop adventure items"
            width="800px"
          />
        </Flexbox>
        <Flexbox
          style={{width:"100%"}}
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          flexGrow={2}
        >
          <div id="spacer" style={{width:'60px'}} />
          <Flexbox
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
          >
            <div style={styles.smallText}>
              Coming soon to
            </div>
            <img
              src={kickstarterLogo}
              alt="kickstarter"
              width="300px"
            />
          </Flexbox>
        </Flexbox>
      </Flexbox>
    );
  }
}

export default Landing;
