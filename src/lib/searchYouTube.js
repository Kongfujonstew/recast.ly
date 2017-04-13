var searchYouTube = ({key, query, max=5}, callback) => {


  console.log('searchYouTube called');


  $.get('https://www.googleapis.com/youtube/v3/search', {
    key: key,
    q: query,
    maxResults: max,
    part: 'snippet',
    type: 'video',
    videoEmbeddable: true,
    // success: function(data) {
    //   console.log(data)
    // }
  })
  .done(function(items) {
    console.log(items.items);
  })
  ;


};

window.searchYouTube = searchYouTube;
