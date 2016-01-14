var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newItem = new Node(value);
    
    // if no values
    if (list.head === null) {
      list.head = newItem;
      list.tail = newItem;
    }
    // if one or more value
    if (list.head === list.tail) {
      list.tail.next = newItem;
      list.tail = newItem;
    }
  };

  list.removeHead = function() {
    // if no values in LinkedList
    if (list.head === null && list.tail === null) {
      return;
    }
    // if one value in LinkedList
    else if (list.head === list.tail) {
      list.head = null;
      list.tail = null;
    }
    // else
    else {
      list.head = list.head.next;
    } 
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
