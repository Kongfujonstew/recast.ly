var searchYouTube = (options, callback) => {

  console.log(options);
  console.log('searchYouTube called');


  $.get({
    url: 'https://www.googleapis.cm/youtube/v3',
    key: YOUTUBE_API_KEY,
    query: options,
    max: max || 5,
    part: snippet,
    data: data,
    // success: function(data) {
    //   console.log(data)
    // }
  });

};

window.searchYouTube = searchYouTube;
