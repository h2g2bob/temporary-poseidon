var self = require('sdk/self');

// a dummy function, to show how tests work.
// to see how to test this function, look at test/test-index.js
function dummy(text, callback) {
  callback(text);
}

exports.dummy = dummy;


// ********************************


var ui = require("sdk/ui");

var action_button = ui.ActionButton({
  label: "Temporary Poseidon",
  icon: "./Tango_conical_flask_green.png",
  onClick: function(state) {
    console.log("You clicked '" + state.label + "'");
  }
});

