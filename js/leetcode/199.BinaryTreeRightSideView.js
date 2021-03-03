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
 * @return {number[]}
 */
var rightSideView = function(root) {
  const result = [];


  function helper(node, level){
    if(level === result.length) result.push(node.val);
    if(node.right) helper(node.right, level + 1);
    if(node.left) helper(node.left, level + 1);
  }
  if(!root) return result;
  helper(root, 0);
  return result;

};


function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const node4 = new TreeNode(4, null, null);
const node3 = new TreeNode(3, null, node4);
const node5 = new TreeNode(5, null, null);
const node2 = new TreeNode(2, null, node5);


const root = new TreeNode(1, node2, node3);

console.log(rightSideView(root));

