const { NotImplementedError } = require("../extensions/index.js");

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.newRoot = null;
  }
  root() {
    return this.newRoot;
  }

  add(data) {
    this.newRoot = addNewNum(this.newRoot, data);
    function addNewNum(nodeAdd, data) {
      if (!nodeAdd) {
        return new Node(data);
      }
      if (nodeAdd.data === data) {
        return nodeAdd;
      }
      if (data > nodeAdd.data) {
        nodeAdd.right = addNewNum(nodeAdd.right, data);
      } else {
        nodeAdd.left = addNewNum(nodeAdd.left, data);
      }
      return nodeAdd;
    }
  }

  has(data) {
    return addNewSearch(this.newRoot, data);
    function addNewSearch(nodeHas, data) {
      if (!nodeHas) {
        return false;
      }
      if (nodeHas.data === data) {
        return true;
      }
      if (data > nodeHas.data) {
        return addNewSearch(nodeHas.right, data);
      } else {
        return addNewSearch(nodeHas.left, data);
      }
    }
  }

  find(data) {
    return addNewFind(this.newRoot, data);
    function addNewFind(nodeFind, data) {
      if (!nodeFind) {
        return null;
      }
      if (nodeFind.data === data) {
        return nodeFind;
      }
      if (data > nodeFind.data) {
        return addNewFind(nodeFind.right, data);
      }
      if (data < nodeFind.data) {
        return addNewFind(nodeFind.left, data);
      }
    }
  }

  remove(data) {
    this.newRoot = addNewRemove(this.newRoot, data);
    function addNewRemove(nodeRemove, data) {
      if (!nodeRemove) {
        return null;
      }
      if (data > nodeRemove.data) {
        nodeRemove.right = addNewRemove(nodeRemove.right, data);
        return nodeRemove;
      } else if (data < nodeRemove.data) {
        nodeRemove.left = addNewRemove(nodeRemove.left, data);
        return nodeRemove;
      } else {
        if (!nodeRemove.right && !nodeRemove.left) {
          return null;
        }
        if (!nodeRemove.right) {
          nodeRemove = nodeRemove.left;
          return nodeRemove;
        }
        if (!nodeRemove.left) {
          nodeRemove = nodeRemove.right;
          return nodeRemove;
        }
        // orMinRight
        let greatestAreaLeft = nodeRemove.left;
        while (greatestAreaLeft.right) {
          greatestAreaLeft = greatestAreaLeft.right;
        }
        nodeRemove.data = greatestAreaLeft.data;
        nodeRemove.left = addNewRemove(nodeRemove.left, greatestAreaLeft.data);
        return nodeRemove;
      }
    }
  }

  min() {
    if (!this.newRoot) {
      return;
    }
    let nodeNewMin = this.newRoot;
    while (nodeNewMin.left) {
      nodeNewMin = nodeNewMin.left;
    }
    return nodeNewMin.data;
  }

  max() {
    if (!this.newRoot) {
      return;
    }
    let nodeNewRight = this.newRoot;
    while (nodeNewRight.right) {
      nodeNewRight = nodeNewRight.right;
    }
    return nodeNewRight.data;
  }
}

module.exports = {
  BinarySearchTree,
};
