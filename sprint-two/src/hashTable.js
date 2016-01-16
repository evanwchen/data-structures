

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index) || [];
  
  for (var i = 0; i < bucket.length; i++) {
    var block = bucket[i];
    if (block[0] === k) {
      block[1] = v;
      return;
    }
  }

  bucket.push([k,v]);
  this._storage.set(index,bucket);
  this._count++;

  if (this._count > this._limit*0.75) {
    this.resize(this, 'double');
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];
  
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }

  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var temp = this._storage.get(index);
  var that = this;
  _.each(temp, function(val, key) {
    if (val[0] === k) {
      that._storage.set(index, undefined);
    }
  });
  this._count--;
  if (this._count < this._limit*0.25) {
    this.resize(this, 'halve');
  }
};

HashTable.prototype.resize = function(hash, action) {
  if (action === 'double' || action === 'halve') {
    this._limit = action === 'double' ? this._limit*2 : this._limit/2;
    this._storage = LimitedArray(this._limit);
    this._storage.each(function(val) {
      this.insert(val[0], val[1]);
    });
  } else {
    throw 'No such action as' + action;
  }
  return this;
};

/*
 *  Complexity: What is the time complexity of the above functions?

    insert: O(1) or constant

    retrieve: O(n) or linear

    remove: O(n) or linear
 */