var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.beg = 0;
  this.end = 0;
  this.len = 0;
};

Queue.prototype.enqueue = function(val) {
  this.storage[this.end] = val;
  this.end++;
  this.len = this.end - this.beg;
};

Queue.prototype.dequeue = function() {
  if (this.len > 0) {
    var temp = this.storage[this.beg];
    delete this.storage[this.beg];
    this.beg++;
    this.len = this.end - this.beg;
    return temp;
  }
};

Queue.prototype.size = function() {
  return this.len;
};

var Collection = new Queue();