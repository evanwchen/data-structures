

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
};

HashTable.prototype.insert = function(k, v) {
  // if (this.count > this._limit*0.75) {
  //   var tempArray = [];
  //   this._storage.each(function(val)) {
  //     tempArray.push(val);
  //   };
  // }

  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage.get(index) === undefined) {
   this._storage.set(index, []);
  }
  var temp = this._storage.get(index);
  
  if (temp.length === 0) {
    temp.push([k,v]);
  } else {
    _.each(temp, function(val) {
      if (temp[0] === k) {
        temp[1] = v;
      } else {
        temp.push([k,v]);
      }
    });    
  }

  this._storage.set(index,temp);
  //this._count++;
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
  this._count--;
};

HashTable.prototype.extend = function(hash) {
  // var newHashTable = new HashTable();
  // newHashTable._limit = hash._limit * 2;
  // newHashTable._storage = LimitedArray(newHashTable._limit);  
};

/*
 *  Complexity: What is the time complexity of the above functions?

    insert: O(1) or constant

    retrieve: O(n) or linear

    remove: O(n) or linear
 */