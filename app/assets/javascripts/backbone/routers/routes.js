App.Router = Backbone.Router.extend({
  routes: {
    ""          : "index",
    "/contacts" : "listContacts"
  },
  initialize: function(){
    Backbone.history.start();
  },
  index: function(){
    var user = new App.Models.User();
    App.main = new App.Views.Main({ model:user });
  },
  listContacts: function(){
    debugger;
  }
});