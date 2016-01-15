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
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].value === target) {
      return true;
    }
    if (Array.isArray(this.children[i])) {
      treeMethods(this.children[i]);
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
