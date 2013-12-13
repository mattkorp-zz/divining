App.Models.User = Backbone.Model.extend({
  urlRoot: "/users",
  defaults: {
    user: {
      "username":               "",
      "email":                  "",
      "password":               "",
      "password_confirmation":  ""
    }
  },
  // attrs is model attributes
  // options are what's passed from save or set
  validate: function(attrs, options){
    var errors = [];
    debugger;
    if(attrs.user.username === "" || attrs.user.email === "" || attrs.user.password === "" || attrs.user.password_confirmation === ""){
      errors.push("Fields can't be Blank!");
    }
    if(attrs.user.password !== attrs.user.password_confirmation) {
      errors.push("Passwords must match");
    }
    if(errors.length > 0) {
      return errors;
    }
  },
  authenticate: function(){
    debugger;
    var user = this;
    $.ajax({
      url: "/login",
      type: "post",
      data: {
        username: this.get('username'),
        password: this.get('password')
      }
    }).done(function(response){
      user.set(response);
    })
  }
});

App.Models.Dog = Backbone.Model.extend({
  urlRoot: "/dogs",
  toJSON: function() {
    return { dog: _.clone( this.attributes ) }
  },
  defaults: {
    "username" :              "username",
    "name" :                  "name",
    "password" :              "password",
    "password_confirmation" : "password_confirmation"
  }
});

d1 = new App.Models.Dog({ username: "philco", email: "phil", password: "phil", password_confirmation: "phil"});
