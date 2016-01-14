var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};

  _.extend(someInstance, queueMethods);

  someInstance.begin = 0;
  someInstance.end = 0;
  someInstance.queueSize = 0;

  return someInstance;

};

var queueMethods = {};

queueMethods.enqueue = function(val) {
  this.storage[this.end] = val;
  this.end++;
  this.queueSize = this.end - this.begin;
};

queueMethods.dequeue = function() {
  if (this.queueSize > 0) {
    var temp = this.storage[this.begin];
    delete this.storage[this.begin];
    this.begin++;
    this.queueSize = this.end - this.begin;
    return temp;
  }
};

queueMethods.size = function() {
  return this.queueSize;
};

