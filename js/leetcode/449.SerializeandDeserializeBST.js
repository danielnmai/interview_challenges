/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if(root === null) return "X,";
    const leftSerialized = serialize(root.left);
    const rightSerialized = serialize(root.right);

    return root.val + "," + leftSerialized + rightSerialized;
};
/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {

  function deserializeHelper()
    
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */