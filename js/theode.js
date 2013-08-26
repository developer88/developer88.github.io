// Define this fucking application
var TheOde = Ember.Application.create({ LOG_TRANSITIONS: true });


// Views
ChooseAPathView = Ember.View.extend({
  name: 'Teddy',
  templateName: 'choose_a_path'
});



// Routes
TheOde.Router.map(function() {
  //this.route("choose_a_path", { path: "/" });
  this.route("thebeginning", { path: "/beginning" });
});

TheOde.IndexRoute = Ember.Route.extend({
  setupController: function(controller) {
    controller.set('title', "Choose Your Path");
  }
});
