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

class Video extends Component {
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
          <iframe
            width="640"
            height="360"
            src="https://www.youtube.com/embed/0N4zk3OwqUg"
            frameborder="0"
            gesture="media"
            allow="encrypted-media"
            webkitallowfullscreen
            mozallowfullscreen
            allowFullScreen
          >
          </iframe>
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

export default Video;
