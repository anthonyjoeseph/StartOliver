// @flos

import React, { Component } from 'react';

import ReactSwipeNavigatable from './ReactSwipeNavigatable';
import ScrollHandler from './ScrollHandler';

import NavigationBar from './NavigationBar/NavigationBar';
import SocialNetworkingBar from './SocialNetworkingBar/SocialNetworkingBar';
import Landing from './Slides/Landing/Landing';
import Mission from './Slides/Mission/Mission';
import Map from './Slides/Map/Map';
import MapDetail from './Slides/Map/MapDetail/MapDetail';

import castleDetailImg from './Slides/Map/DetailImages/castle.png';
import amazonDetailImg from './Slides/Map/DetailImages/amazon.png';
import desertDetailImg from './Slides/Map/DetailImages/desert.png';
import koreaDetailImg from './Slides/Map/DetailImages/korea.png';
import newYorkDetailImg from './Slides/Map/DetailImages/newYork.png';

const imagesForCities = {
  "castle" : castleDetailImg,
  "korea" : koreaDetailImg,
  "newYork" : newYorkDetailImg,
  "desert" : desertDetailImg,
  "amazon" : amazonDetailImg
}

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      slideIndex:0,
      windowWidth: 0,
      windowHeight: 0,
      isOliverFixed: true,
      isShowingDetailView: false,
      detailViewImage: null
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
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    });
  }

  previousSlide(){
    const currentSlideIndex = this.state.slideIndex;
    if(!this.state.isShowingDetailView){
      const prevSlideIndex = currentSlideIndex > 0 ? currentSlideIndex - 1 : 2;
      this.setState({
        slideIndex: prevSlideIndex,
        isOliverFixed: prevSlideIndex === 0
      });
    }
  }

  nextSlide(){
    const currentSlideIndex = this.state.slideIndex;
    if(!this.state.isShowingDetailView){
      const nextSlideIndex = currentSlideIndex < 2 ? currentSlideIndex + 1 : 0;
      this.setState({
        slideIndex: nextSlideIndex,
        isOliverFixed: nextSlideIndex === 1
      });
    }
  }

  render(){
    return (
      <div
        style={{
          backgroundColor: "rgb(113, 206, 232)"
        }}
      >
        <ScrollHandler
          onScrollUp={this.previousSlide}
          onScrollDown={this.nextSlide}
        />
        <ReactSwipeNavigatable
          style={{zIndex: 2}}
          swipeOptions={{continuous: false}}
          slideIndex={this.state.slideIndex}
          duration={500}
        >
          <div style={{height:this.state.windowHeight}}>
            <Landing />
            {
              !this.state.isOliverFixed ? <OliverTop/> : <div/>
            }
          </div>
          <div style={{height:this.state.windowHeight}}>
            <Mission />
            {
              !this.state.isOliverFixed ? <OliverTop /> : <div/>
            }
          </div>
          <div style={{height:this.state.windowHeight}}>
            <Map
              setDetailViewLocation={location => {
                this.setState({
                  isShowingDetailView: true,
                  detailViewImage: imagesForCities[location]
                })
              }}
            />
          </div>
        </ReactSwipeNavigatable>
        {
          this.state.isOliverFixed ? <OliverTop /> : <div/>
        }
        <SocialNetworkingBar
          style={{
            position:'absolute',
            zIndex: 1,
            top:'10%',
            right:'8%'
          }}
        />
        {
          this.state.isShowingDetailView && (
            <MapDetail
              onTap={() => {
                this.setState({isShowingDetailView: false});
              }}
              detailImg={this.state.detailViewImage}
              windowWidth={this.state.windowWidth}
              windowHeight={this.state.windowHeight}
            />
          )
        }
        <NavigationBar
          style={{position:'absolute', bottom:'10%', right:'10%'}}
          currentSlide={this.state.slideIndex}
          prev={this.previousSlide}
          next={this.nextSlide}
        />
      </div>
    );
  }
}

const OliverTop = (props) => {
  return (
    <div style={{
      position:'absolute', top:'5%', left:'5%',
      color: 'white',
      fontFamily: "peachy-keen-jf",
      fontWeight: '100',
      lineHeight: '125%'
    }}>
      <div style={{
        fontSize: '30pt'}}>
        Oliver
        <br/>
        <br/>
      </div>
      <div style={{
        textAlign: 'center',
        fontSize: '15pt'}}>
        Start your journey
      </div>
    </div>
  );
};

export default App;
