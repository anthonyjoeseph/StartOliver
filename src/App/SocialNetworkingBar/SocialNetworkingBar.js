// @flow
import React from 'react';
import Flexbox from 'flexbox-react';

import email from './email.png';
import facebook from './facebook.png';
import instagram from './instagram.png';

const SocialNetworkingBar = (props) => (
  <Flexbox
    style={{width:'200px'}}
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
    <a href="mailto:hello@playbroccoli.com">
      <img
        alt="email"
        src={email}
        width='40px'
        height='30px'
      />
    </a>
    <a href="https://www.facebook.com/Broccoli-193559324409522/">
      <img
        alt="facebook"
        src={facebook}
        width='20px'
        height='40px'
      />
    </a>
  </Flexbox>
);

export default SocialNetworkingBar;
