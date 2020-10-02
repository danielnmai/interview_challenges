/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}
function countNodes(node){ 
  if(!node){
    return null;
  }
  const d = getHeight(node);
  if(d === 0) {
    return 1;
  }
  let left = 1, right = Math.pow(2, d) - 1;
  let mid;
  while(left <= right){
    mid = Math.floor((left + right) / 2);
    if(isExist(mid, d, node)){
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return Math.pow(2, d) - 1 + left;
}

function getHeight(node){
  let height = 0;
  while(node.left){
    height++;
    node = node.left;
  }
  return height;
}

function isExist(k, d, node){
  let left = 0, right = Math.pow(2, d) - 1;
  for(let i = 0; i < d; i++) {
    let mid = (left + right) / 2;
    if(mid <= k){
      if(node.right){
        node = node.right;
      } else {
        node = null;
      }
      left = mid;
    }
    else if(mid > k){
      if(node.left){
        node = node.left;
      } else {
        node = null;
      }
      right = mid;
    }
  }
  return node !== null;
}

const root = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);
const node7 = new Node(7);
const node8 = new Node(8);
const node9 = new Node(9);
const node10 = new Node(10);
const node11 = new Node(11);
const node12 = new Node(12);

root.left = node2;
root.right = node3;

node2.left = node4;
node2.right = node5;

node3.left = node6;
node3.right = node7;

node4.left = node8;
node4.right = node9;

/*
                1
            2        3
        4      5  6     7
      8   9
      0   1 2  3  4 5 6 7
      1   2 3  4  5 6 7 8

          1
        2
      3
*/

const nodeA = new Node(1);
const nodeB = new Node(2);
const nodeC = new Node(3);

nodeA.left = nodeB;
nodeA.right = nodeC;

console.log(countNodes(nodeA));
// console.log(isExist(8, 3, root))


