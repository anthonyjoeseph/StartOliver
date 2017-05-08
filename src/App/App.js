// @flos

import React, { Component } from 'react';

import {
  Fullpage,
  Slide,
  HorizontalSlider,
  Overlay
} from 'fullpage-react';

import ReactSwipeNavigatable from './ReactSwipeNavigatable';
import ScrollHandler from './ScrollHandler';

import NavigationBar from './NavigationBar/NavigationBar';
import SocialNetworkingBar from './SocialNetworkingBar/SocialNetworkingBar';
import Landing from './Slides/Landing/Landing';
import Mission from './Slides/Mission/Mission';
import Map from './Slides/Map/Map';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      slideIndex:0,
      windowHeight: 0,
      isOliverFixed: true,
      isShowingDetailView: false
    }

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ windowHeight: window.innerHeight });
  }

  previousSlide(){
    const currentSlideIndex = this.state.slideIndex;
    if(currentSlideIndex > 0 && !this.state.isShowingDetailView){
      this.setState({
        slideIndex: currentSlideIndex - 1,
        isOliverFixed: currentSlideIndex <= 1
      });
    }
  }

  nextSlide(){
    const currentSlideIndex = this.state.slideIndex;
    if(currentSlideIndex < 2 && !this.state.isShowingDetailView){
      this.setState({
        slideIndex: currentSlideIndex + 1,
        isOliverFixed: currentSlideIndex < 1
      });
    }
  }

  render(){
    return (
      <div
        style={{
          backgroundColor: "rgb(254, 194, 106)"
        }}
      >
        <ScrollHandler
          onScrollUp={this.previousSlide}
          onScrollDown={this.nextSlide}
        />
        <ReactSwipeNavigatable
          swipeOptions={{continuous: false}}
          slideIndex={this.state.slideIndex}
          duration={500}
        >
          <div style={{height:this.state.windowHeight}}>
            <Landing />
          </div>
          <div style={{height:this.state.windowHeight}}>
            <Mission />
            {
              !this.state.isOliverFixed ? <OliverTop isFixed={false} /> : <div/>
            }
          </div>
          <div style={{height:this.state.windowHeight}}>
            <Map
              changeDetailViewStatus={function(isShowingDetailView){
                this.setState({isShowingDetailView: isShowingDetailView});
              }.bind(this)}
              windowHeight={this.state.windowHeight}
            />
          </div>
        </ReactSwipeNavigatable>
        {
          this.state.isOliverFixed ? <OliverTop isFixed={true} /> : <div/>
        }
        <SocialNetworkingBar
          style={{position:'absolute', top:'10%', right:'8%'}}
        />
        {
          !this.state.isShowingDetailView ?
          <NavigationBar
            style={{position:'absolute', bottom:'10%', right:'10%'}}
            currentSlide={this.state.slideIndex}
            prev={this.previousSlide}
            next={this.nextSlide}
          />
          :
          <div />
        }
      </div>
    );
  }
}

const OliverTop = (props) => {
  return (
    <div style={{position:'absolute', top:'5%', left:'5%'}}>
      <div style={{
        color: 'white',
        fontFamily: "peachy-keen-jf",
        fontWeight: '100',
        fontSize: '30pt',
        lineHeight: '125%'}}>
        Oliver
      </div>
      <div style={{
        textAlign: 'center',
        color: 'white',
        fontFamily: "peachy-keen-jf",
        fontWeight: '100',
        fontSize: '15pt',
        lineHeight: '125%'}}>
        Start your journey
      </div>
    </div>
  );
};

export default App;
