var DoublyLinkedList = function() {
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
    // if one or more values
    else {
      list.tail.next = newItem;
      newItem.previous = list.tail;
      list.tail = newItem;
    }
  };

  list.removeHead = function() {
    var oldHead = list.head.value;
    // if no values in LinkedList
    if (list.head === null && list.tail === null) {
      return oldHead;
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
    return oldHead;
  };

  list.contains = function(target) {
    var check = list.head;
    while (check.next !== null || check === list.tail ) {
      if (check.value === target) {
        return true;
      }
      else if (check.next) {
        check = check.next;
      }
      else {
        break;
      }
    }
    return false;
  };

  list.addToHead = function() {

  };

  list.removeTail = function() {

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};
