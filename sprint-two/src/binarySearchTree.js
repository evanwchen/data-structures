var BinarySearchTree = function(value) {

  var someTree = Object.create(binTreeMethods);
  someTree.val = value;
  someTree.left = null;
  someTree.right = null;
  // someTree.leaves = {left: null, right: null};
  return someTree;

};

var binTreeMethods = {};

binTreeMethods.insert = function(val) {
  // create a new node called newLeaf and assign it equal to new BinarySearchTree w/ val as argument
  // assign a var next = undefined;
  // start at 'this'. 
  // if val > node, then next = node.right 
    // while (next.left !== null && next.right !== null) 
      // next = node.right;
    // node.right = temp
  var leaf = BinarySearchTree(val);
  var traverse = function(node, leaf) {
    if (leaf.val >= node.val) {
      if (node.right === null) {
        node.right = leaf;
      }
      else {
        traverse(node.right, leaf);
      }
    }
    else {
      if (node.left === null) {
        node.left = leaf;
      }
      else {
        traverse(node.left, leaf);
      }
    }
  };
  traverse(this, leaf);
};

binTreeMethods.contains = function(val) {
  //returns boolean
};

binTreeMethods.depthFirstLog = function(cb) {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
