/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} u˜
 * @return {TreeNode}z`
 */
var findNearestRightNode = function (root, u) {

  if(root === null) return null;

  function Queue() {
    this.data = [];
  }
  Queue.prototype.enqueue = function(item) {

    // add item to the end of queue
    this.data.push(item);
  }

  Queue.prototype.dequeue = function() {
    if (this.data.length === 0) return null;
    // return the first item in the queue
    return this.data.shift();
  }
  Queue.prototype.isEmpty = function () {
    return this.data.length === 0;
  }

  Queue.prototype.size = function() {
    return this.data.length;
  }

  const queue = new Queue();

  queue.enqueue(root);

  while (!queue.isEmpty()) {
    const levelSize = queue.size();

    for(let i = 0; i < levelSize; i++){
      const curNode = queue.dequeue();
      if(curNode.val === u.val) {
        if(i === levelSize - 1) return null;
        else return queue.dequeue();
      }
      if(curNode.left) queue.enqueue(curNode.left);
      if(curNode.right) queue.enqueue(curNode.right);
    }  
 
  }
};

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}


const node4 = new TreeNode(4, null, null);
const node5 = new TreeNode(5, null, null);
const node6 = new TreeNode(6, null, null);

const node2 = new TreeNode(2, null, node4);
const node3 = new TreeNode(3, node5, node6);
const root = new TreeNode(1, node2, node3);


console.log(findNearestRightNode(root, root));



