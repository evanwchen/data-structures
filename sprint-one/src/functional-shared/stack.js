var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.len = 0;
  someInstance.storage = {};

  _.extend(someInstance, Stack.stackMethods);

  return someInstance;
};

Stack.stackMethods = {};

Stack.stackMethods.push = function(val) {
  this.len++;
  this.storage[this.len] = val;
};

Stack.stackMethods.pop = function() {
  if (this.len > 0) {
    var temp = this.storage[this.len];
    delete this.storage[this.len];
    this.len--;
    return temp;
  }
};

Stack.stackMethods.size = function() {
  return this.len;
};

