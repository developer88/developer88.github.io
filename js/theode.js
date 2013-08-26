// Define this fucking application
var TheOde = Ember.Application.create({ LOG_TRANSITIONS: true });

// Controllers
TheOde.ApplicationController = Ember.Controller.extend({

});




// Views
IndexView = Ember.View.extend({
  name: 'Teddy',
  templateName: 'choose_path1'
});



// Routes
TheOde.Router.map(function() {
  //this.route("choose_a_path", { path: "/" });
  this.route("thebeginning", { path: "/beginning" });
});

TheOde.IndexRoute = Ember.Route.extend({
  setupController: function(controller) {
    $(document).attr('title', 'Choose Your Path');
  },
  renderTemplate: function() {
    this.render({
      outlet: 'main'
    });
  }  
});
