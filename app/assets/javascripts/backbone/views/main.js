App.Views.Main = Backbone.View.extend({
  el: "#main",
  events: {
    "click #signup_button" : "showForm",
    "click #login_button"  : "showLogin"
  },
  initialize: function(){
    this.signup = new App.Views.Signup({ model: this.model });
    this.login = new App.Views.Login({ model: this.model });
  },
  showForm: function(e){
    this.signup.show();
    this.login.$el.hide();
  },
  showLogin: function(e){
    this.login.show();
    this.signup.$el.hide();
  }
});

// grab signup form and unhide
// initialize sub view of main and display
App.Views.Signup = Backbone.View.extend({
  el: "#signup_form",
  events: {
    "submit form" : "createUser"
  },
  initialize: function(){
    this.email = $("#user_email");
    this.password = $("#user_password");
    this.password_confirmation = $("#user_password_confirmation");
    this.listenTo(this.model, "invalid", this.displayErrors);
    this.errors = $("#errors");
  },
  show: function(){
    this.$el.show();
  },
  createUser: function(e){
    e.preventDefault();
    console.log('submit');
    this.model.set( this.getAttributes() );
    if (this.model.isValid()){
      this.model.save();
    }
  },
  // crate hash to pass across
  getAttributes: function(){
    return {
      email: this.email.val(),
      password: this.password.val(),
      password_confirmation: this.password_confirmation.val()
    }
  },
  displayErrors: function(){
    // alert("There are errors");
    this.errors.text(this.model.validationError.join(" "));
  }
});

App.Views.Login = Backbone.View.extend({
  el: "#login_form",
  events: {
    "submit form" : "loginUser"
  },
  initialize: function(){
    this.email = $("#email");
    this.passsword = $("#password");
  },
  show: function(){
    this.$el.show();
  },
  loginUser: function(e){
    e.preventDefault();
    console.log("auth needed");
    this.model.set( this.getAttributes() );
    this.model.authenticate();
  },
  getAttributes: function(){
    return {
      email: this.email.val(),
      password: this.password.val()
    }
  }
});

// App.main.model.attributes
// App.main.model.validationError
// .validate()
// .save()
// App.main.login
// this.getAttributes()
// this.model.attributes
// App.main.model.get('email')