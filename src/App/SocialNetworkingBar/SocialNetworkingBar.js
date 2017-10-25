// @flow
import React from 'react';
import Flexbox from 'flexbox-react';

import email from './email.png';
import facebook from './facebook.png';
import instagram from './instagram.png';

const SocialNetworkingBar = (props) => (
  <Flexbox
    style={{ ...props.style , width:'120px'}}
    flexDirection="row"
    justifyContent="space-between"
    alignItems="center"
  >
    <a href="https://www.instagram.com/broccoli_app/">
      <img
        alt="instagram"
        src={instagram}
        width='40px'
        height='40px'
      />
    </a>
    <a href="mailto:hello@startoliver.com">
      <img
        alt="email"
        src={email}
        width='40px'
        height='30px'
      />
    </a>
  </Flexbox>
);

export default SocialNetworkingBar;
