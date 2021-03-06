var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.beg = 0;
  someInstance.end = 0;
  someInstance.len = 0;

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(val){
  this.storage[this.end] = val;
  this.end++;
  this.len = this.end - this.beg;
};

queueMethods.dequeue = function() {
  if (this.len > 0) {
    var temp = this.storage[this.beg];
    delete this.storage[this.beg];
    this.beg++;
    this.len = this.end - this.beg;
    return temp;
  }
};

queueMethods.size = function() {
  return this.len;
};

