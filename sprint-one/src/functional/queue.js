var Queue = function() {
  var someInstance = {};
  var start = 0;
  var end = 0;
  var queueSize = end - start;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
  };

  someInstance.dequeue = function() {
  };

  someInstance.size = function() {
    return queueSize;
  };

  return someInstance;
};
