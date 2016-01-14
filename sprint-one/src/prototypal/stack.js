var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.len = 0;

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(val) {

};

stackMethods.pop = function() {

};

stackMethods.size = function() {
  return this.len;
};