var BinarySearchTree = function(value) {

  var someTree = Object.create(treeMethods);
  someTree.val = value;
  someTree.left = null;
  someTree.right = null;
  // someTree.leaves = {left: null, right: null};
  return someTree;

};

var treeMethods = {};

treeMethods.insert = function(val) {

};

treeMethods.contains = function(val) {
  //returns boolean
};

treeMethods.depthFirstLog = function(cb) {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
