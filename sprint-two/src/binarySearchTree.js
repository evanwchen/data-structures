var BinarySearchTree = function(value) {

  var someTree = Object.create(binTreeMethods);
  someTree.value = value;
  someTree.left = null;
  someTree.right = null;
  return someTree;

};

var binTreeMethods = {};

binTreeMethods.insert = function(val) {
  var leaf = BinarySearchTree(val);
  var traverse = function(node, leaf) {
    if (leaf.value >= node.value) {
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

binTreeMethods.contains = function(target) {
  var found = false;
  var traverse = function(node) {
    if (target === node.value) {
      found = true;
    }
    else if (target > node.value) {
      if (node.right !== null) {
        traverse(node.right);
      }
    }
    else if (target < node.value) {
      traverse(node.left);
    }
  };
  traverse(this);
  return found;
};

binTreeMethods.depthFirstLog = function(cb) {
  var traverse = function(node) {
    cb(node.value);
    if (node.right !== null) {
      traverse(node.right);
    }
    if (node.left !== null) {
      traverse(node.left);
    }
  };
  traverse(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
