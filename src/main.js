var Parse = require("Parse");
var React = require("react/addons");

Parse.initialize("rbxxqa1OqVDFrggjPndedyxSO3UzH6OETZ7ka4xp", "N7ZxmgK8dBCjfzUFoQnR9fOihO4dNopVZ08VyctS");

var Main = Parse.Object.extend("Main", {
  initialize: function(attrs, options) {
  },
});

var m = new Main();

m.set("name", "shelling");
m.set("age", 29);

m.save(null, {
  success: function() {
    console.log("success");
  },
  error: function() {
    console.log("error");
  },
});

module.exports = Main;
