// @flow
import React, { Component } from 'react';

import ReactSwipe from 'react-swipe';

class ReactSwipeNavigatable extends Component {

  componentWillReceiveProps(nextProps){
    this.slider.slide(nextProps.slideIndex, nextProps.duration);
  }

  render(){
    return (
      <ReactSwipe
        ref={c => {
          this.slider = c;
        }}
        swipeOptions={this.props.swipeOptions}
      >
        {this.props.children}
      </ReactSwipe>
    );
  }
}

export default ReactSwipeNavigatable;
