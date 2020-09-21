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
var diameterOfBinaryTree = function(root) {
  let result = 0;

  function path(node){
    if(!node){
      return 0;
    }

    const leftPath = path(node.left);
    const rightPath = path(node.right);

    result = Math.max(result, leftPath + rightPath);

    return Math.max(leftPath, rightPath) + 1;
  }

    path(root);
    return result;
};

 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }

const root = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);

root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = node5;

console.log(diameterOfBinaryTree(root));