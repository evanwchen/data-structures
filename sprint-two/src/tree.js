var Tree = function(value) {
  //var newTree = {};
  var newTree = Object.create(treeMethods);

  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Object.create(Tree(value)));
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].value === target) {
      return true;
    }
    if (this.children[i].children.length > 0) {
      for (var j = 0; j < this.children[i].children.length; j++) {
        if (this.children[i].children[j].contains(target)) {
          return true;
        }
      }
    }
  }
  return false;
};

/*
 *  Complexity: What is the time complexity of the above functions?

    treeMethods.addChild = O(1) or constant

    treeMethods.contains = O(n) or linear

 */