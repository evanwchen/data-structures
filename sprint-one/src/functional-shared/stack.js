var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.len = 0;

  _.extend(someInstance, Stack.stackMethods);

  return someInstance;
};

// _.extend = function(obj) {
//     each(slice.call(arguments, 1), function(source) {
//       if (source) {
//         for (var prop in source) {
//           obj[prop] = source[prop];
//         }
//       }
//     });
//     return obj;
//   };

//var stackMethods = {};

Stack.stackMethods = {};

Stack.stackMethods.push = function(val) {

};

Stack.stackMethods.pop = function() {
  
};

Stack.stackMethods.size = function() {
  return this.len;
};

