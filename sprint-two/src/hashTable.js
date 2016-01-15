

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // var newTuple = new LimitedArray(2);
  // this._storage.set(index, newTuple);
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
  var found = false;
  _.each(temp, function(val) {
    if (val[0] === k) {
    console.log(val);
      found = val[1];
    }
  });

  return found;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  delete this._storage.get(index);

  // this._storage[index].each(function(val, key, collection) {
  //   if (val[0] === k) {
  //     this._storage[index].splice(key, 1);
  //   }
  // });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


