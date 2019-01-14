(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // define AMD
    define(['printmodule'], factory);
  } else if (typeof exports === 'object') {
    // define CommonJS
    module.exports = factory(require('printmodule'));
  } else {
    root.returnExports = factory(root.printmodule);
  }
})(this, function(printmodule) {
  // define module methods
  function printMessage(message) {
    console.log(message);
  }

  return { printMessage: printMessage };
});
