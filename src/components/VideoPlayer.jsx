
// import Fetch from '../../../node_modules/react-fetch'


class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      autoPlay: props.autoPlay
    };

  }

  componentWillReceiveProps(newProps) {
    this.setState({autoPlay: newProps.autoPlay});
  }


  render() {

    if (this.state.autoPlay) {
      return(
      <div className="video-player">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={"https://www.youtube.com/embed/" + this.props.video.id.videoId + "?autoplay=1"} allowFullScreen></iframe>
        </div>
        <div className="video-player-details">
          <h3>{this.props.video.snippet.title}</h3>
          <div>{this.props.video.snippet.description}</div>
        </div>
      </div>
      );
    } else if (!this.state.autoPlay) {

      return(
      <div className="video-player">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={"https://www.youtube.com/embed/" + this.props.video.id.videoId} allowFullScreen></iframe>
        </div>
        <div className="video-player-details">
          <h3>{this.props.video.snippet.title}</h3>
          <div>{this.props.video.snippet.description}</div>
        </div>
      </div>
      );


    }


  }

}





window.VideoPlayer = VideoPlayer;
