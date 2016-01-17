var self = require('sdk/self');

// a dummy function, to show how tests work.
// to see how to test this function, look at test/test-index.js
function dummy(text, callback) {
  callback(text);
}

exports.dummy = dummy;


// ********************************


var ui = require("sdk/ui");
var contextMenu = require("sdk/context-menu");

var action_button = ui.ActionButton({
  id: 'temporary-poseidon-actionbutton',
  label: "Temporary Poseidon",
  icon: self.data.url("Tango_conical_flask_green.png"),
  onClick: function(state) {
    console.log("You clicked '" + state.label + "'");
  }
});

var context_menu_script = '' +
  'self.on("click", function (node, data) {' +
  '  console.log("Item clicked!");' +
  '});'
var menuItem = contextMenu.Item({
  label: "Temporary Poseidon",
  image: self.data.url("Tango_conical_flask_green.png"),
  accessKey: "e",
  context: contextMenu.PageContext(),
  contentScript: context_menu_script
});
