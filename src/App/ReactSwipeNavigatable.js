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
        ref = {function(c){
          this.slider = c;
        }.bind(this)}
        swipeOptions={this.props.swipeOptions}
      >
        {this.props.children}
      </ReactSwipe>
    );
  }
}

export default ReactSwipeNavigatable;
