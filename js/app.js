// Define this fucking application
App = Ember.Application.create();

// Fixtures
App.Store = DS.Store.extend({
  revision: 13,
  adapter: DS.FixtureAdapter.create()
});

// Model for showing Info Block 
App.InfoBlock = DS.Model.extend({
  id: DS.attr('number'),
  title: DS.attr('string'),
  description: DS.attr('string'),
  link: DS.attr('string'),
  use_link: DS.attr('boolean'), // ???
  content_type: DS.attr('string'),
  
  content: DS.hasMany('App.Content')
});

// Content for Info Block
App.Content = DS.Model.extend({
  id: DS.attr('number'),
  title: DS.attr('string'),
  description: DS.attr('string'),
  preview_link: DS.attr('string'),
  link: DS.attr('string'),
  object_type: DS.attr('string'),

  block: DS.belongsTo('App.InfoBlock')
});

// Routes
App.Router.map(function() {
  this.resource('app', { path: '/' });
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});
