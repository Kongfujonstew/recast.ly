var searchYouTube = ({key, query, max=5}, callback) => {


  console.log('searchYouTube called with query: ', query);


  $.get('https://www.googleapis.com/youtube/v3/search', {
    key: key,
    q: query,
    maxResults: max,
    part: 'snippet',
    type: 'video',
    videoEmbeddable: true,
  })
  .done(function(items) {
    callback(items.items);
  })
  ;


};

window.searchYouTube = searchYouTube;
