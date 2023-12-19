const {NotImplementedError} = require('../extensions/index.js');

const {Node} = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);

    if (this.rootNode === null) {
      this.rootNode = newNode;
    } else {
      this.addNode(this.rootNode, newNode);
    }
  }

  addNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.addNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.addNode(node.right, newNode);
      }
    }
  }

  has(data) {
    return this.hasNode(this.rootNode, data);
  }

  hasNode(node, data) {
    if (node === null) {
      return false;
    }

    if (data < node.data) {
      return this.hasNode(node.left, data);
    } else if (data > node.data) {
      return this.hasNode(node.right, data);
    } else {
      return true;
    }
  }

  find(data) {
    return this.findNode(this.rootNode, data);
  }

  findNode(node, data) {
    if (node === null) {
      return null;
    }

    if (data < node.data) {
      return this.findNode(node.left, data);
    } else if (data > node.data) {
      return this.findNode(node.right, data);
    } else {
      return node;
    }
  }

  remove(data) {
    return this.removeNode(this.rootNode, data)
  }

  removeNode(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }

      let minValueNode = this.findMinNode(node.right);
      node.data = minValueNode.data;
      node.right = this.removeNode(node.right, minValueNode.data);
      return node;
    }
  }

  min() {
    return this.findMinNodeData(this.rootNode);
  }

  findMinNode(node) {
    if (node === null) {
      return null;
    }

    while (node.left !== null) {
      node = node.left;
    }

    return node;
  }

  findMinNodeData(node) {
    if (node === null) {
      return null;
    }

    while (node.left !== null) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    return this.findMaxNode(this.rootNode);
  }

  findMaxNode(node) {
    if (node === null) {
      return null;
    }

    while (node.right !== null) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};