// @flow
import React from 'react';
import Flexbox from 'flexbox-react';

import WorldMap from './WorldMap/WorldMap';

const styles = {
  bigText:{
    color: 'white',
    fontFamily: "peachy-keen-jf",
    fontWeight: '100',
    fontSize: '20pt',
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

const Map = (props) => (
  <div>
    <TopSection />
    <WorldMap
      onTap={props.setDetailViewLocation}
      windowWidth={props.windowWidth}
      windowHeight={props.windowHeight}
    />
  </div>
);

const TopSection = () => (
  <Flexbox
    style={{
      width:"100%",
      height: '150px'
    }}
    flexDirection="row"
    justifyContent="flex-start"
    alignItems="center"
  >
    <div id="spacer" style={{width:'60px'}} />
    <Flexbox
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <div id="spacer" style={{height:'30px'}} />
      <div style={styles.bigText}>
        Take a peek<br/>at some of our locations!
      </div>
      <div id="spacer" style={{height:'30px'}} />
    </Flexbox>
  </Flexbox>
);

export default Map;
