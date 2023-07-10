function receivesAFunction(callback) {
    callback();
  }
  
  const myCallback = function() {
    console.log("This is my callback");
  };
  
  function returnsANamedFunction() {
    return function named() {
      console.log("This is a named function");
    };
  }
  
  module.exports = {
    receivesAFunction,
    returnsANamedFunction,
  };
  