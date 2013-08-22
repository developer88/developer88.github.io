App.ContentProvider = Ember.Object.extend({
  ObjectCount: 5,
	InfoBlockId,
	ContentType,
	fillFixtures: function(data) {
		if(InfoBlockId <= 0) {
			d('No infoBlock is present', 'error');
      return false;
		}
    if(ContentType.length() == 0) {
      d('No ContentType is present', 'error');
      return false;
    }    
		var infoblock =  App.InfoBlock.find({ content_type: this.ContentType });
    data.forEach(function(item) {
      var content = App.Content.createRecord({
        title: data['title'],
        description: data['description'],
        preview_link: data['preview_link'],
        link: data['link'],
        object_type: infoblock.content_type,
        block: infoblock
      });
      content.save();
    });
     
	}
});

// YouTube records
App.YouTubeProvider = App.ContentProvider.extend({
  ContentType: 'YouTube',
  InfoBlockId: 1,
  playlistId,

  getData: function() {
    var data = [];



    this.fillFixtures(data);
  },

  getUploadedPlaylist: function() {
    var request = gapi.client.youtube.channels.list({
      mine: true,
      part: 'contentDetails'
    });
    request.execute(function(response) {
      this.playlistId = response.result.items[0].contentDetails.uploads;
      requestVideoPlaylist(this.playlistId);
    })
  },

  requestVideoPlaylist: function(playlistId) {
    var requestOptions = {
      playlistId: playlistId,
      part: 'snippet',
      maxResults: this.ObjectCount
    };

    var request = gapi.client.youtube.playlistItems.list(requestOptions);

    request.execute(function(response) {

      var playlistItems = response.result.items;
      if (playlistItems) {
        // For each result lets show a thumbnail.
        //jQuery.each(playlistItems, function(index, item) {
        //  createDisplayThumbnail(item.snippet);
        //});
      } else {
        //$('#video-container').html('Sorry you have no uploaded videos');
      }
    });

  },

  createThumbnail: function(videoSnippet) {
    /*var titleEl = $('<h3>');
    titleEl.addClass('video-title');
    $(titleEl).html(videoSnippet.title);
    var thumbnailUrl = videoSnippet.thumbnails.medium.url;

    var div = $('<div>');
    div.addClass('video-content');
    div.css('backgroundImage', 'url("' + thumbnailUrl + '")');
    div.append(titleEl);
    $('#video-container').append(div);  */  
  }
});

// Blogger RSS
App.BloggerProvider = App.ContentProvider.extend({
  getData: function() {
    var data = [];



    this.fillFixtures(data);
  }
});

// GitHub Repos
App.GitHubProvider = App.ContentProvider.extend({
  getData: function() {
    var data = [];



    this.fillFixtures(data);
  }
});

// Deviantart records
App.DeviantArtProvider = App.ContentProvider.extend({
  getData: function() {
    var data = [];



    this.fillFixtures(data);
  }
});

// Google+ Public Posts
App.BloggerProvider = App.ContentProvider.extend({
  getData: function() {
    var data = [];



    this.fillFixtures(data);
  }
});