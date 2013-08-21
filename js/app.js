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
  //content: function() {
  //  return App.Content.find({ content_type: "Peter" });
  ///  return this.get('firstName') + ' ' + this.get('lastName');
 // }//.property('firstName', 'lastName')
});

// Content for Info Block
App.InfoBlock = DS.Model.extend({
  id: DS.attr('number'),
  title: DS.attr('string'),
  description: DS.attr('string'),
  preview_link: DS.attr('string'),
  link: DS.attr('string'),
  object_type: DS.attr('string'),

  block: DS.belongsTo('App.InfoBlock')
});





App.Router.map(function() {
  this.resource('todos', { path: '/' });
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});
