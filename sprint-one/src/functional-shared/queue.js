var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  _.extend(someInstance, queueMethods);

  someInstance.begin = 0;
  someInstance.end = 0;
  someInstance.queueSize = 0;

  return someInstance;

};

var queueMethods = {};

queueMethods.push = function(val) {

};

queueMethods.pop = function() {

};

queueMethods.size = function() {
  return this.queueSize;
};

