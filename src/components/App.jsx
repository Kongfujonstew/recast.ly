class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videoSet: exampleVideoData,
      currentVideo: videoSet[0]

    };

  }

  componentDidMount() {
    searchYouTube('depeche mode');

  }

  getYouTubeResults(searchTerms) {
    searchYoutube(searchTerms);
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
          videos={exampleVideoData}
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
