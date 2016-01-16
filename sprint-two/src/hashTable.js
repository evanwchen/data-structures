

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage.get(index) === undefined) {
   this._storage.set(index, []);
  }
  var temp = this._storage.get(index);
  temp.push([k,v]);
  this._storage.set(index,temp);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var temp = this._storage.get(index);
  var found;
  _.each(temp, function(val) {
    if (val[0] === k) {
      found = val[1];
    }
  });

  return found;
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
};

/*
 *  Complexity: What is the time complexity of the above functions?

    insert: O(1) or constant

    retrieve: O(n) or linear

    remove: O(n) or linear
 */