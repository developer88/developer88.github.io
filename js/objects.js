App.ContentProvider = Ember.Object.extend({
	InfoBlockId,
	ContentType,
	fillFixtures: function() {
		if(InfoBlockId <= 0) {
			d('No infoBlock id present', 'error');
		}
		var infoblock =  App.InfoBlock.find(InfoBlockId);
	}



  say: function(thing) {
    var name = this.get('name');

    alert(name + " says: " + thing);
  }
});


App.YouTubeProvider = App.ContentProvider.extend({
  say: function(thing) {
    this._super(thing + ", sir!");
  }
});

App.BloggerProvider = App.ContentProvider.extend({
  say: function(thing) {
    this._super(thing + ", sir!");
  }
});


App.GitHubProvider = App.ContentProvider.extend({
  say: function(thing) {
    this._super(thing + ", sir!");
  }
});

App.DeviantArtProvider = App.ContentProvider.extend({
  say: function(thing) {
    this._super(thing + ", sir!");
  }
});