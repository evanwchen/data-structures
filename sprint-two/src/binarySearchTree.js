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

binTreeMethods.breadthFirstLog = function(cb) {
  var temp = [this];
  while (temp.length > 0) {  
    var childNodes = [];
    _.each(temp, function(val) {
      cb(val.value);
      if (val.left !== null) {
        childNodes.push(val.left);
      }
      if (val.right !== null) {
        childNodes.push(val.right);
      } 
    });
    temp = childNodes;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?

.insert = O(log(n)), but only if the binary tree will rebalance. 
          In its current state, it is O(n).

.contains = O(log(n)), but only if the binary tree will rebalance. 
            In its current state, it is O(n).

.depthFirstLog = O(n)

 */
