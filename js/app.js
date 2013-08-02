App = Ember.Application.create();

App.Router.map(function() {
  this.resource('todos', { path: '/' });
});

App.InfoBlock = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  link: DS.attr('string'),
  use_link: DS.attr('boolean'),

  fullName: function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  }.property('firstName', 'lastName')
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});
