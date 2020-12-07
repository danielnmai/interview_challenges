/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

function Node(val, left, right, next) {
  this.val = val === undefined ? null : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.next = next === undefined ? null : next;
};

var connect = function (root) {
  function Queue() {
    this.items = [];

    Queue.prototype.enqueue = function (item) {
      this.items.push(item); // add the item to the end of the array
    }

    Queue.prototype.dequeue = function () {
      if (this.isEmpty()) {
        return undefined;
      }
      return this.items.shift() // remove the first item and return it
    }
    Queue.prototype.isEmpty = function () {
      return this.items.length === 0;
    }

    Queue.prototype.peek = function () {
      return this.items[0];
    }

    Queue.prototype.size = function () {
      return this.items.length;
    }
  }

  const queue = new Queue();
  queue.enqueue(root);

  while (!queue.isEmpty()) {
    const temp = [];

    const queueSize = queue.size();
    for (let i = 0; i < queueSize; i++) {
      const curNode = queue.dequeue();


      if (curNode) {
        curNode.next = queue.peek();
        temp.push(curNode);
      }
    }
    temp.forEach(node => {
      if (node.left) queue.enqueue(node.left);
      if (node.right) queue.enqueue(node.right);
    });

  }


};

const node4 = new Node(4, null, null, null);
const node5 = new Node(5, null, null, null);
const node7 = new Node(7, null, null, null);

const node2 = new Node(2, node4, node5, null);
const node3 = new Node(3, null, node7, null);
const node1 = new Node(1, node2, node3, null);

connect(node1)

console.log('node 5 ', node5);
console.log('node 4 ', node4);

