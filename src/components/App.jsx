class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: exampleVideoData[0],
      videos: exampleVideoData
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

  render() {
    return (
    <div>
      <Nav searchYT={this.getYouTubeResults.bind(this)}/>
      <div className="col-md-7">
        <VideoPlayer video={this.state.currentVideo}/>
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
