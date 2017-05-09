// @flow
import React, { Component } from 'react';

import exenv from 'exenv';

import ReactSwipe from 'react-swipe';

class ScrollHandler extends Component {
  constructor(props){
    super(props);

    this.lastScrollTime = (new Date).getTime();

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    if(exenv.canUseDOM){
      document.body.style.overflow = "hidden";
    }
    window.addEventListener('mousewheel', this.handleScroll, false);
    window.addEventListener('DOMMouseScroll', this.handleScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('mousewheel', this.handleScroll);
    window.removeEventListener('DOMMouseScroll', this.handleScroll);
  }

  handleScroll(event){
      const e = window.event || event; // old IE support
      const delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
      const currentTime = (new Date).getTime();
      const timeDiff = currentTime - this.lastScrollTime;
      if(timeDiff > 250){
        if(delta > 0){
          this.props.onScrollUp();
        }else{
          this.props.onScrollDown();
        }
        console.log(timeDiff);
        this.lastScrollTime = currentTime;
      }
  }

  render(){
    return <div />;
  }
}

export default ScrollHandler;
