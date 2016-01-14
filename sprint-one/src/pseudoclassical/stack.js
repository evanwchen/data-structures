var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.len = 0;
};

Stack.prototype.push = function(val) {
  this.len++;
  this.storage[this.len] = val;
};

Stack.prototype.pop = function() {
  if (this.len > 0) {
    var temp = this.storage[this.len];
    delete this.storage[this.len];
    this.len--;
    return temp;
  }
};

Stack.prototype.size = function() {
  return this.len;
};

var Collection = new Stack();