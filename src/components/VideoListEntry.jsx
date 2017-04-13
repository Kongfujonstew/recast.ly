

var VideoListEntry = (props) => (
  <div className="video-list-entry">
    <div className="media-left media-middle">
      <img className="media-object" src={props.video.snippet.thumbnails.default.url} />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title"
      onClick={() => props.onVideoClick(props.video)}
      >{props.video.snippet.title}</div>
      <div className="video-list-entry-detail">{props.video.snippet.description}</div>
    </div>
  </div>
);






