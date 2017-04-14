// import React, { Component } from 'react'
// import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'




class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: exampleVideoData[0],
      videos: exampleVideoData,
      autoPlay: false
    };
  }

  componentDidMount() {
    this.getYouTubeResults('depeche mode');
  }

  getYouTubeResults(searchTerms) {
    var options = {
      max: 5,
      key: 'AIzaSyDZQ48zhJFH1DPJBFJ-NQo5QKSWe4twumA',
      query: searchTerms
    };

    var setAppState = function(newVideosArr) {
      this.setState({
        currentVideo: newVideosArr[0],
        videos: newVideosArr
      });
    };
    searchYouTube(options, setAppState.bind(this));
  }

  onVideoClick(video) {
    this.setState({
      currentVideo: video
      // currentVideo: exampleVideoData[1]
    });
  }

  toggleAutoPlay() {
    console.log('tAP called');
    this.setState({
      autoPlay: !this.state.autoPlay
    });

  }

  render() {
    return (
    <div>
      <Nav searchYT={this.getYouTubeResults.bind(this)}/>
      <h1 id="title">Nothin' But Depeche Mode</h1>
      <div className="col-md-7">
        <VideoPlayer 
          video={this.state.currentVideo}
          autoPlay={this.state.autoPlay}
        />
        <h1
          onClick={this.toggleAutoPlay.bind(this)}

        >AutoPlay: {this.state.autoPlay+''}</h1>
        </div>
        <div className="col-md-5">
        <VideoList 
          videos={this.state.videos}
          onVideoClick={this.onVideoClick.bind(this)}

        />
      </div>
    </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
